import { db } from './firebase.js';
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

const DB_TABLES = [
  'profissionais', 'pacientes', 'atendimentos', 'despesas', 
  'cobrancas', 'cobrancas_excluidas', 'receitas', 
  'custom_subcats', 'custom_rec_cats'
];

export const DB = {
  _cache: {},
  _unsubscribers: [],

  get(t) { return this._cache[t] ? [...this._cache[t]] : []; },
  
  getOne(t, id) { return (this._cache[t] || []).find(x => x.id === id) || null; },
  
  async save(t, item) {
    if (!item.id) {
      item.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }
    
    // Save to Firestore Collection (1 document per record)
    await setDoc(doc(db, t, item.id), item);

    // Optimistic update
    const list = [...(this._cache[t] || [])];
    const idx = list.findIndex(x => x.id === item.id);
    if (idx >= 0) list[idx] = item; else list.push(item);
    this._cache[t] = list;
    
    return item;
  },

  async remove(t, id) {
    await deleteDoc(doc(db, t, id));
    this._cache[t] = (this._cache[t] || []).filter(x => x.id !== id);
  },

  getConfig() { return JSON.parse(localStorage.getItem('clinica_config') || '{}'); },
  setConfig(d) { localStorage.setItem('clinica_config', JSON.stringify(d)); },

  async init(renderCallback) {
    // Escuta todas as coleções em tempo real
    for (const t of DB_TABLES) {
      const unsub = onSnapshot(collection(db, t), (snap) => {
        this._cache[t] = snap.docs.map(d => d.data());
        if (renderCallback) renderCallback();
      }, (e) => {
        console.warn(`Listener [${t}]:`, e);
        this._cache[t] = [];
      });
      this._unsubscribers.push(unsub);
    }
  },

  // Migration function: Call this ONCE from the console to migrate data from the old monolithic documents
  // to individual collections.
  async runMigration() {
    console.log("Iniciando migração de dados...");
    const oldTables = ['profissionais', 'despesas', 'cobrancas', 'cobrancas_excluidas', 'receitas', 'custom_subcats', 'custom_rec_cats'];
    
    for (const t of oldTables) {
      try {
        const snap = await getDoc(doc(db, 'clinica', t));
        if (snap.exists()) {
          const items = snap.data().items || [];
          console.log(`Migrando ${items.length} itens da tabela ${t}...`);
          
          for (const item of items) {
            if (!item.id) item.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
            await setDoc(doc(db, t, item.id), item);
          }
          console.log(`${t} migrado com sucesso!`);
        }
      } catch (err) {
        console.error(`Erro ao migrar ${t}:`, err);
      }
    }
    console.log("Migração concluída!");
  }
};
