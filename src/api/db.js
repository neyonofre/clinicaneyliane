import { db } from './firebase.js';
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

const DB_TABLES = [
  'profissionais', 'pacientes', 'atendimentos', 'despesas', 
  'cobrancas', 'cobrancas_excluidas', 'receitas', 
  'custom_subcats', 'custom_rec_cats', 'reservas_auditorio'
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

    // merge:true — sem isso, salvar um registro (ex: editar paciente) apaga
    // qualquer campo que a tela do Gestão não conhece. "pacientes" é
    // compartilhado com o Prontuário, que guarda usuarioUid (o vínculo da
    // conta do paciente com o próprio cadastro) — um set() completo, sem
    // merge, apagava esse campo silenciosamente a cada edição pelo Gestão,
    // derrubando o acesso do paciente ao próprio app sem erro nenhum.
    await setDoc(doc(db, t, item.id), item, { merge: true });

    // Optimistic update
    const list = [...(this._cache[t] || [])];
    const idx = list.findIndex(x => x.id === item.id);
    if (idx >= 0) list[idx] = item; else list.push(item);
    this._cache[t] = list;
    
    return item;
  },

  async remove(t, id) {
    // Sem id não dá pra montar a referência: o deleteDoc estouraria com um
    // erro obscuro e, como quem chama não esperava a promise, a tela ainda
    // dizia "excluído". Falha explícita pra quem chama poder avisar.
    if (!id) throw new Error(`remove(${t}): registro sem id`);
    await deleteDoc(doc(db, t, id));
    this._cache[t] = (this._cache[t] || []).filter(x => x.id !== id);
  },

  getConfig() { return JSON.parse(localStorage.getItem('clinica_config') || '{}'); },
  setConfig(d) { localStorage.setItem('clinica_config', JSON.stringify(d)); },

  async init(renderCallback) {
    // Escuta todas as coleções em tempo real
    for (const t of DB_TABLES) {
      const unsub = onSnapshot(collection(db, t), (snap) => {
        // O id do DOCUMENTO tem que entrar no objeto, e por último pra vencer
        // um eventual campo "id" gravado dentro dele. Registros criados aqui
        // no Gestão guardam "id" no próprio documento, mas os criados pelo
        // Prontuário (addDoc) não guardam — sem isso eles chegavam com
        // id undefined e não dava pra excluir nem editar pelo Gestão.
        this._cache[t] = snap.docs.map(d => ({ ...d.data(), id: d.id }));
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
