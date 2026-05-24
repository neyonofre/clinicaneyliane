/* ===== CONSTANTS ===== */
const REGIMES = {
  sublocacao: 'Sublocação Mensal',
  turno: 'Aluguel por Turno',
  hora: 'Aluguel por Hora',
  porcentagem: 'Porcentagem por Paciente',
  cliente: 'Valor por Cliente'
};
const TURNOS_LIST = ['Manhã','Tarde','Noite'];
const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const MESES_SHORT = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const CATS_DESPESA = {
  '2': 'Despesas com Pessoal',
  '2.1': 'Salários mensal', '2.2': '13º salário', '2.3': 'FGTS', '2.4': 'INSS',
  '2.5': 'Contabilidade', '2.6': 'Faxineiro', '2.7': 'Outros (Pessoal)',
  '3': 'Despesas Fixas',
  '3.1.1': 'Condomínio Consultório', '3.1.2': 'Condomínio Garagens', '3.2': 'Aluguel',
  '3.3': 'Energia', '3.4': 'Telefones Celulares', '3.5': 'Internet',
  '3.6': 'IPTU', '3.7': 'Seguro do Imóvel', '3.8': 'Outros (Fixas)',
  '4': 'Despesas Variáveis',
  '4.1': 'Material de Limpeza', '4.2': 'Material de Escritório', '4.3': 'Material Elétrico',
  '4.4': 'Lanches e Buffet', '4.5': 'Manutenção (Mão de Obra)', '4.6': 'Manutenção (Material)',
  '4.7': 'Descartáveis', '4.8': 'Reformas', '4.9': 'Propaganda e Marketing', '4.10': 'Outros (Variáveis)'
};
const SUBCATS = [
  { k:'2.1',l:'Salários mensal',g:'2' }, { k:'2.2',l:'13º salário',g:'2' }, { k:'2.3',l:'FGTS',g:'2' },
  { k:'2.4',l:'INSS',g:'2' }, { k:'2.5',l:'Contabilidade',g:'2' }, { k:'2.6',l:'Faxineiro',g:'2' }, { k:'2.7',l:'Outros (Pessoal)',g:'2' },
  { k:'3.1.1',l:'Condomínio Consultório',g:'3' }, { k:'3.1.2',l:'Condomínio Garagens',g:'3' }, { k:'3.2',l:'Aluguel',g:'3' },
  { k:'3.3',l:'Energia',g:'3' }, { k:'3.4',l:'Telefones Celulares',g:'3' }, { k:'3.5',l:'Internet',g:'3' },
  { k:'3.6',l:'IPTU',g:'3' }, { k:'3.7',l:'Seguro do Imóvel',g:'3' }, { k:'3.8',l:'Outros (Fixas)',g:'3' },
  { k:'4.1',l:'Material de Limpeza',g:'4' }, { k:'4.2',l:'Material de Escritório',g:'4' }, { k:'4.3',l:'Material Elétrico',g:'4' },
  { k:'4.4',l:'Lanches e Buffet',g:'4' }, { k:'4.5',l:'Manutenção (Mão de Obra)',g:'4' }, { k:'4.6',l:'Manutenção (Material)',g:'4' },
  { k:'4.7',l:'Descartáveis',g:'4' }, { k:'4.8',l:'Reformas',g:'4' }, { k:'4.9',l:'Propaganda e Marketing',g:'4' }, { k:'4.10',l:'Outros (Variáveis)',g:'4' }
];

const SALAS = ['Sala 1','Sala 2','Sala 3 (Infantil)','Sala 4','Sala 5','Mini Auditório'];
const DIAS_SEMANA_WORK = ['Seg','Ter','Qua','Qui','Sex','Sáb'];
const TURNOS_NAMES = ['Manhã','Tarde','Noite'];
const CATS_RECEITA = [
  { k:'saldo_banco', l:'Saldo Anterior — Banco' },
  { k:'saldo_caixa', l:'Saldo Anterior — Caixa' },
  { k:'saldo_aplic', l:'Saldo Anterior — Aplicações Financeiras' },
  { k:'aluguel_auditorio', l:'Aluguel de Auditório' },
  { k:'garagem', l:'Garagens' },
  { k:'outros_rec', l:'Outros' }
];

/* ===== INITIAL DATA ===== */
const INITIAL_PROFISSIONAIS = [
  // SUBLOCAÇÃO
  { id:'p1', nome:'Adadja Aragão Correia Farias', cpf:'803.462.193-53', profissao:'Fonoaudióloga', especialidade:'Fonoaudiologia', conselho:'CRFa 8044-8', celular:'85 99754-7540', whatsapp:'85 99754-7540', email:'fgaadadja@gmail.com', endereco:'Rua José Cavalcante Sobrinho, 120 - Coaçu', dataContrato:'2026-01-01', regime:'sublocacao', valorMensal:600, valorEstacionamento:80, usaEstacionamento:true, valorHoraExtra:50, diaVencimento:1, ativo:true, obs:'' },
  { id:'p2', nome:'Andyslene Freitas Fernandes', cpf:'604.141.443-33', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP 11/11693', celular:'85 98582-4247', whatsapp:'85 98582-4247', email:'andyslenefernandes@yahoo.com.br', endereco:'Rua Tavares Coutinho, 1890 - Varjota', dataContrato:'2025-02-15', regime:'sublocacao', valorMensal:450, valorEstacionamento:0, usaEstacionamento:false, valorHoraExtra:50, diaVencimento:15, ativo:true, obs:'' },
  { id:'p3', nome:'Dalva Martins Montenegro Barrocas', cpf:'555.604.403-10', profissao:'Fonoaudióloga', especialidade:'Fonoaudiologia', conselho:'CRFa 6095-4', celular:'85 99675-3241', whatsapp:'85 99675-3241', email:'dalvabarrocas.fono@gmail.com', endereco:'Av. Visconde do Rio, 2421 ap 1108', dataContrato:'2025-03-01', regime:'sublocacao', valorMensal:400, valorEstacionamento:0, usaEstacionamento:false, valorHoraExtra:50, diaVencimento:1, ativo:true, obs:'' },
  { id:'p4', nome:'Déborah Sussmann', cpf:'056.200.358-40', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP 11/04553', celular:'85 98870-7232', whatsapp:'85 98870-7232', email:'deborahpsic1@gmail.com', endereco:'Rua Leonardo Mota, 1080/101', dataContrato:'2026-02-25', regime:'sublocacao', valorMensal:600, valorEstacionamento:0, usaEstacionamento:false, valorHoraExtra:50, diaVencimento:5, ativo:true, obs:'' },
  { id:'p5', nome:'Fabiana Maria Alves de Oliveira Shinmon', cpf:'408.616.863-49', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP 11/07661', celular:'85 98731-1000', whatsapp:'85 98731-1000', email:'fshinmonpsi@gmail.com', endereco:'Rua Bento Albuquerque, 3300 ap 1601 - Manoel Dias Branco', dataContrato:'2025-01-15', regime:'sublocacao', valorMensal:450, valorEstacionamento:80, usaEstacionamento:true, valorHoraExtra:50, diaVencimento:15, ativo:true, obs:'' },
  { id:'p6', nome:'Janaina Guerra', cpf:'976.091.963-04', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP-11/06477', celular:'85 99670-1806', whatsapp:'85 99670-1806', email:'janainamirandacruz@gmail.com', endereco:'Rua Cel. Olegario Memoria, 3717 - Sapiranga', dataContrato:'2024-10-01', regime:'sublocacao', valorMensal:575, valorEstacionamento:50, usaEstacionamento:true, valorHoraExtra:50, diaVencimento:15, ativo:true, obs:'' },
  { id:'p7', nome:'Lana Lins Hübscher', cpf:'029.411.173-50', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP 11/11222', celular:'85 99231-1280', whatsapp:'85 99231-1280', email:'psi.lfmartin@gmail.com', endereco:'Rua Mundica Paula, 172 - Maranguape/CE', dataContrato:'2026-03-16', regime:'sublocacao', valorMensal:400, valorEstacionamento:0, usaEstacionamento:false, valorHoraExtra:50, diaVencimento:1, ativo:true, obs:'' },
  { id:'p8', nome:'Márcia Emanuelle Teixeira Maia Mattos', cpf:'734.211.113-91', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP 11/24833', celular:'85 99717-0233', whatsapp:'85 99717-0233', email:'marciatmaia@gmail.com', endereco:'Rua Dr. Gilberto Studart, 1497 ap 901 - Cocó', dataContrato:'2026-03-01', regime:'sublocacao', valorMensal:600, valorEstacionamento:0, usaEstacionamento:false, valorHoraExtra:50, diaVencimento:1, ativo:true, obs:'' },
  { id:'p9', nome:'Martha Maria da Silva Marciel', cpf:'909.957.593-91', profissao:'Nutricionista', especialidade:'Nutrição', conselho:'CRN 11/19794', celular:'85 99959-8652', whatsapp:'85 99959-8652', email:'marthamacielnutri@gmail.com', endereco:'Rua Leonel Chaves, 295 - Parangaba', dataContrato:'2024-11-01', regime:'sublocacao', valorMensal:450, valorEstacionamento:50, usaEstacionamento:true, valorHoraExtra:50, diaVencimento:15, ativo:true, obs:'' },
  { id:'p10', nome:'Naiana Mendes Façanha Alves', cpf:'024.484.573-52', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP 11/06614', celular:'85 98778-3396', whatsapp:'85 98778-3396', email:'naianamf@gmail.com', endereco:'Rua José Lino, 171 ap 504 - Torre Dali', dataContrato:'2025-04-01', regime:'sublocacao', valorMensal:750, valorEstacionamento:80, usaEstacionamento:true, valorHoraExtra:50, diaVencimento:15, ativo:true, obs:'' },
  { id:'p11', nome:'Rakel de Castro Evangelista', cpf:'027.091.653-92', profissao:'Médica', especialidade:'Medicina', conselho:'CREMEC 16606 | RQE 15222', celular:'85 99155-9494', whatsapp:'85 99155-9494', email:'rakeldce@gmail.com', endereco:'Chico Feitosa do Cococi, 210 ap 701 - Torre Bambu', dataContrato:'2026-01-01', regime:'sublocacao', valorMensal:1620, valorEstacionamento:240, usaEstacionamento:true, valorHoraExtra:50, diaVencimento:1, ativo:true, obs:'' },
  // PORCENTAGEM
  { id:'p12', nome:'Alícia da Costa Pereira Brandão', cpf:'072.674.573-12', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP nº 11/19677', celular:'85 99900-1572', whatsapp:'85 99900-1572', email:'psialiciacbrandao@gmail.com', endereco:'Rua Naturalista Feijó, 960 - Carlito Pamplona', dataContrato:'2025-08-24', regime:'porcentagem', percentualClinica:60, percentualProprioClinica:60, valorEstacionamento:0, usaEstacionamento:false, diaVencimento:2, ativo:true, obs:'Terça-T Sex-T' },
  { id:'p13', nome:'Ana Cecília Valente de Araújo Marques', cpf:'863.945.333-00', profissao:'Fisioterapeuta', especialidade:'Fisioterapia', conselho:'75649-F', celular:'85 98776-2039', whatsapp:'85 98776-2039', email:'aceciva@hotmail.com', endereco:'Afrânio Peixoto, 288 ap 37 - Parangaba', dataContrato:'2024-10-01', regime:'porcentagem', percentualClinica:60, percentualProprioClinica:60, valorEstacionamento:0, usaEstacionamento:true, diaVencimento:2, ativo:true, obs:'Terça-T Qui-M' },
  { id:'p14', nome:'Camila Dias Serrano', cpf:'012.850.662-86', profissao:'Psicóloga', especialidade:'Psicologia', conselho:'CRP 11/18418', celular:'85 98115-5451', whatsapp:'85 98115-5451', email:'camiladiaserrano@gmail.com', endereco:'Tibúrcio Cavalcante, 1222', dataContrato:'2025-03-01', regime:'porcentagem', percentualClinica:60, percentualProprioClinica:40, valorEstacionamento:0, usaEstacionamento:true, diaVencimento:2, ativo:true, obs:'Ter-T Sex-T | 60% cliente clínica, 40% cliente próprio' },
  { id:'p15', nome:'Elen Maria Chaves Lima', cpf:'059.061.243-30', profissao:'Fisioterapeuta', especialidade:'Fisioterapia', conselho:'246511f', celular:'85 98706-3037', whatsapp:'85 98706-3037', email:'elenmarialima@yahoo.com.br', endereco:'Rua Regionópolis, 333 - Jóquei Club', dataContrato:'2025-11-01', regime:'porcentagem', percentualClinica:60, percentualProprioClinica:60, valorEstacionamento:0, usaEstacionamento:false, diaVencimento:2, ativo:true, obs:'' },
  { id:'p16', nome:'Leandra Maria Vieira Alves', cpf:'518.262.243-00', profissao:'Fisioterapeuta', especialidade:'Fisioterapia', conselho:'248637-F', celular:'85 99183-6735', whatsapp:'85 99183-6735', email:'leandramaria74@yahoo.com.br', endereco:'Rua Carlota Pinheiro, 255 ap 1202B - Guararapes', dataContrato:'2025-01-20', regime:'porcentagem', percentualClinica:60, percentualProprioClinica:60, valorEstacionamento:0, usaEstacionamento:true, diaVencimento:2, ativo:true, obs:'Seg-M Qua-M Sex-M' },
  { id:'p17', nome:'Lia Sobreira Diógenes Paiva', cpf:'039.701.733-29', profissao:'Nutricionista', especialidade:'Nutrição', conselho:'9413', celular:'85 98191-8748', whatsapp:'85 98191-8748', email:'liasobreira@hotmail.com.br', endereco:'Rua Mariana Pinto Bandeira, 255', dataContrato:'2025-07-06', regime:'porcentagem', percentualClinica:60, percentualProprioClinica:60, valorEstacionamento:0, usaEstacionamento:false, diaVencimento:2, ativo:true, obs:'' },
  { id:'p18', nome:'Maria Janile Rocha Leite', cpf:'853.053.323-20', profissao:'Fisioterapeuta', especialidade:'Fisioterapia', conselho:'Crefito 6 85714-F', celular:'85 99212-6958', whatsapp:'85 99212-6958', email:'fsiomila@hotmail.com', endereco:'Raimundo Arruda, 400 - Parquelândia', dataContrato:'2024-10-01', regime:'porcentagem', percentualClinica:60, percentualProprioClinica:60, valorEstacionamento:0, usaEstacionamento:true, diaVencimento:2, ativo:true, obs:'Seg-T Qua-T' },
  { id:'p19', nome:'Tania Salete de A. Moreira (Vitallis)', cpf:'721.974.047-68', cnpj:'61.868.024/0001-51', profissao:'Arteterapueta', especialidade:'Arteterapia', conselho:'0212/0520', celular:'21 98504-5277', whatsapp:'21 98504-5277', email:'taniasalete@gmail.com', endereco:'Rua Dr. Airton Bezerra, 588A - José de Alencar', dataContrato:'2024-12-15', regime:'porcentagem', percentualClinica:40, percentualProprioClinica:40, valorEstacionamento:0, usaEstacionamento:true, diaVencimento:2, ativo:true, obs:'Ter-T' },
  { id:'p20', nome:'Wilton de Abreu Moreira (Vitallis)', cpf:'721.974.047-68', cnpj:'61.868.024/0001-51', profissao:'Psicólogo', especialidade:'Psicologia', conselho:'CRP 11/20542', celular:'85 98872-2357', whatsapp:'85 98872-2357', email:'prwiltonabreu@gmail.com', endereco:'Rua Dr. Airton Bezerra, 588A - José de Alencar', dataContrato:'2024-12-01', regime:'porcentagem', percentualClinica:50, percentualProprioClinica:50, valorEstacionamento:0, usaEstacionamento:false, diaVencimento:2, ativo:true, obs:'' },
  // CLIENTE (por cliente)
  { id:'p21', nome:'Denyse Sales Veloso Albuquerque', cpf:'008.315.723-96', profissao:'Médica', especialidade:'Medicina', conselho:'CREMEC 13.974', celular:'85 98208-1134', whatsapp:'85 98208-1134', email:'denyse.albuq@gmail.com', endereco:'Av. Benjamim Brasil, 1600 ap 201D - Maraponga', dataContrato:'2025-12-05', regime:'cliente', valorPorCliente:50, valorEstacionamento:0, usaEstacionamento:false, diaVencimento:5, ativo:true, obs:'Terça-Tarde' },
  { id:'p22', nome:'Ramille Moitas Kramer de Mesquita', cpf:'045.753.673-03', profissao:'Médica', especialidade:'Medicina', conselho:'CREMEC 17418', celular:'85 99635-1541', whatsapp:'85 99635-1541', email:'ramillekramer@hotmail.com', endereco:'Rua João Gentil, 479 bl B ap 301 - Benfica', dataContrato:'2026-01-10', regime:'cliente', valorPorCliente:50, valorEstacionamento:0, usaEstacionamento:false, diaVencimento:5, ativo:true, obs:'' },
  { id:'p23', nome:'Cristiane da Costa Bandeira Lima', cpf:'048.687.523-75', profissao:'Massagista', especialidade:'Massoterapia', conselho:'X', celular:'85 98965-7109', whatsapp:'85 98965-7109', email:'cristianecostabandeira@gmail.com', endereco:'Rua Ilha Dourada, 152 – Quintino Cunha', dataContrato:'2024-12-01', regime:'cliente', valorPorCliente:120, valorEstacionamento:0, usaEstacionamento:false, diaVencimento:5, ativo:true, obs:'Sexta-Tarde' },
  // HORA
  { id:'p24', nome:'Isabelle Rodrigues Schramm', cpf:'048.294.073-52', profissao:'Médica', especialidade:'Medicina', conselho:'CREMEC 21556', celular:'85 98630-9436', whatsapp:'85 98630-9436', email:'isabelleschramm@gmail.com', endereco:'Rua Dr. Airton Bezerra, 588A - José de Alencar', dataContrato:'2026-04-01', regime:'hora', valorHora:50, valorEstacionamento:0, usaEstacionamento:false, diaVencimento:5, ativo:true, obs:'' }
];

/* ===== FIREBASE CONFIG ===== */
// Preencha com os dados do seu projeto Firebase APÓS criá-lo no Console:
// console.firebase.google.com → Adicionar App (Web) → Configuração do SDK
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCn0ElKEW7ZDIlTbYdgZ0KUgLaaJWE1bdM",
  authDomain:        "clinicaneyliane.firebaseapp.com",
  projectId:         "clinicaneyliane",
  storageBucket:     "clinicaneyliane.firebasestorage.app",
  messagingSenderId: "23363035629",
  appId:             "1:23363035629:web:9df330af888089c8ab07e4",
  measurementId:     "G-N82TCFD589"
};

/* ===== DATABASE ===== */
const DB_TABLES = ['profissionais','pacientes','atendimentos','despesas','cobrancas','receitas','custom_subcats','custom_rec_cats'];

const DB = {
  _cache: {},
  _fs: null,
  _useFirebase: false,

  _write(t) {
    if (this._useFirebase && this._fs) {
      this._fs.collection('clinica').doc(t).set({ items: this._cache[t] || [] })
        .catch(e => console.warn('Firebase write [' + t + ']:', e));
    } else {
      try { localStorage.setItem('clinica_' + t, JSON.stringify(this._cache[t] || [])); } catch(e) {}
    }
  },

  get(t) { return this._cache[t] ? [...this._cache[t]] : []; },
  set(t, d) { this._cache[t] = d; this._write(t); },
  getOne(t, id) { return (this._cache[t] || []).find(x => x.id === id) || null; },
  save(t, item) {
    const list = [...(this._cache[t] || [])];
    const idx = list.findIndex(x => x.id === item.id);
    if (idx >= 0) list[idx] = item; else list.push(item);
    this.set(t, list);
  },
  remove(t, id) { this.set(t, (this._cache[t] || []).filter(x => x.id !== id)); },
  getConfig() { return JSON.parse(localStorage.getItem('clinica_config') || '{}'); },
  setConfig(d) { localStorage.setItem('clinica_config', JSON.stringify(d)); },

  async init() {
    if (this._useFirebase && this._fs) {
      await Promise.all(DB_TABLES.map(async t => {
        try {
          const snap = await this._fs.collection('clinica').doc(t).get();
          this._cache[t] = snap.exists ? (snap.data().items || []) : [];
        } catch(e) { this._cache[t] = []; }
      }));
      if (!this._cache['profissionais'].length) {
        this._cache['profissionais'] = INITIAL_PROFISSIONAIS;
        this._write('profissionais');
      }
    } else {
      if (!localStorage.getItem('clinica_initialized')) {
        this._cache['profissionais'] = INITIAL_PROFISSIONAIS;
        DB_TABLES.filter(t => t !== 'profissionais').forEach(t => { this._cache[t] = []; });
        DB_TABLES.forEach(t => localStorage.setItem('clinica_' + t, JSON.stringify(this._cache[t])));
        localStorage.setItem('clinica_initialized', '1');
      } else {
        DB_TABLES.forEach(t => {
          this._cache[t] = JSON.parse(localStorage.getItem('clinica_' + t) || '[]');
        });
      }
    }
  }
};

/* ===== UTILITIES ===== */
const U = {
  id: () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
  fmt: (n) => {
    if (n == null || isNaN(n)) return 'R$ 0,00';
    return 'R$ ' + Number(n).toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
  },
  fmtShort: (n) => {
    if (!n) return 'R$ 0';
    if (Math.abs(n) >= 1000) return 'R$ ' + (n/1000).toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1}) + 'k';
    return 'R$ ' + Number(n).toLocaleString('pt-BR',{minimumFractionDigits:0,maximumFractionDigits:0});
  },
  date: (iso) => { if (!iso) return ''; const [y,m,d] = iso.split('-'); return `${d}/${m}/${y}`; },
  isoToday: () => new Date().toISOString().split('T')[0],
  monthKey: (y,m) => `${y}-${String(m).padStart(2,'0')}`,
  parseNum: (s) => parseFloat(String(s).replace(/[^\d,.-]/g,'').replace(',','.')) || 0,
  escHtml: (s) => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'),
  initials: (n) => (n||'').split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase(),
  profNome: (id) => { const p = DB.getOne('profissionais', id); return p ? p.nome : '—'; },
  pacNome: (id) => { const p = DB.getOne('pacientes', id); return p ? p.nome : '—'; },
  regimeBadge: (r) => {
    const map = { sublocacao:'badge-info', turno:'badge-primary', hora:'badge-warning', porcentagem:'badge-success', cliente:'badge-gray' };
    return `<span class="badge ${map[r]||'badge-gray'}">${REGIMES[r]||r}</span>`;
  },
  calcRepasse: (at) => {
    const p = DB.getOne('profissionais', at.profissionalId);
    if (!p) return 0;
    if (p.regime === 'porcentagem') {
      const pct = at.percentualOverride != null ? at.percentualOverride
        : (at.origemPaciente === 'profissional' ? (p.percentualProprioClinica||p.percentualClinica) : p.percentualClinica);
      return (at.valor * pct) / 100;
    }
    if (p.regime === 'cliente') return p.valorPorCliente || 0;
    if (p.regime === 'hora') return (at.horasQtd || 1) * (p.valorHora || 0);
    return 0;
  }
};

/* ===== TOAST ===== */
function toast(msg, type='info') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  const icons = { success:'✅', error:'❌', warning:'⚠️', info:'ℹ️' };
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

/* ===== MODAL ===== */
const Modal = {
  el: null, overlay: null,
  init() {
    this.overlay = document.getElementById('modal-overlay');
    this.el = document.getElementById('modal');
    document.getElementById('modal-close').onclick = () => Modal.close();
    this.overlay.onclick = (e) => { if (e.target === this.overlay) Modal.close(); };
  },
  open(title, bodyHtml, footerHtml, size='') {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = bodyHtml;
    document.getElementById('modal-footer').innerHTML = footerHtml || '';
    this.el.className = 'modal' + (size ? ' modal-'+size : '');
    this.overlay.classList.add('open');
  },
  close() { this.overlay.classList.remove('open'); },
  confirm(msg, onYes) {
    this.open('Confirmar', `<p style="color:var(--text-2)">${msg}</p>`,
      `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
       <button class="btn btn-danger" id="confirm-yes">Confirmar</button>`, 'sm');
    document.getElementById('confirm-yes').onclick = () => { Modal.close(); onYes(); };
  }
};

/* ===== HELPERS ===== */
function getSublocacaoRevenue(yr, mo) {
  return DB.get('profissionais')
    .filter(p => p.ativo && ['sublocacao','turno'].includes(p.regime))
    .reduce((s, p) => {
      const c = DB.get('cobrancas').find(c2 => c2.profissionalId===p.id && c2.ano===yr && c2.mes===mo) || {};
      const base = p.regime==='sublocacao' ? (p.valorMensal||0) : (p.valorTurno||0);
      const estac = p.usaEstacionamento ? (p.valorEstacionamento||0) : 0;
      const he = (c.qtdHorasExtras||0) * (p.valorHoraExtra||50);
      return s + base + estac + he;
    }, 0);
}

function getAllSubcats() {
  return [...SUBCATS, ...DB.get('custom_subcats')];
}
function getAllRecCats() {
  return [...CATS_RECEITA, ...DB.get('custom_rec_cats')];
}
function getReceitasMonth(yr, mo) {
  return DB.get('receitas').filter(r => { const d=new Date(r.data); return d.getFullYear()===yr && d.getMonth()+1===mo; });
}

/* ===== ROUTER ===== */
const Router = {
  current: 'dashboard',
  pages: {
    dashboard: { title:'Dashboard', render: renderDashboard },
    profissionais: { title:'Profissionais', render: renderProfissionais },
    pacientes: { title:'Pacientes', render: renderPacientes },
    atendimentos: { title:'Atendimentos', render: renderAtendimentos },
    receitas: { title:'Receitas', render: renderReceitas },
    cobranca: { title:'Cobrança Mensal', render: renderCobranca },
    despesas: { title:'Despesas', render: renderDespesas },
    balancete: { title:'Balancete', render: renderBalancete }
  },
  go(page) {
    if (!this.pages[page]) return;
    this.current = page;
    document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page === page));
    document.getElementById('topbar-title').textContent = this.pages[page].title;
    this.pages[page].render();
  }
};

/* ===== DASHBOARD ===== */
function renderDashboard() {
  const now = new Date();
  const y = now.getFullYear(), m = now.getMonth()+1;
  const atends = DB.get('atendimentos').filter(a => { const d=new Date(a.data); return d.getFullYear()===y && d.getMonth()+1===m; });
  const desps = DB.get('despesas').filter(d => { const dt=new Date(d.data); return dt.getFullYear()===y && dt.getMonth()+1===m; });
  const cobrs = DB.get('cobrancas').filter(c => c.ano===y && c.mes===m);

  let receitaAtend = atends.reduce((s,a) => s + U.calcRepasse(a), 0);
  let receitaSubl = getSublocacaoRevenue(y, m);
  let receitaOutras = getReceitasMonth(y, m).reduce((s,r) => s+(r.valor||0), 0);
  let totalReceita = receitaAtend + receitaSubl + receitaOutras;
  let totalDespesa = desps.reduce((s,d) => s + (d.valor||0), 0);
  let resultado = totalReceita - totalDespesa;
  let pendentes = cobrs.filter(c => !c.boletoPago).length;

  // Occupancy grid
  const profAtivos = DB.get('profissionais').filter(p => p.ativo);
  const occGrid = {};
  DIAS_SEMANA_WORK.forEach(d => { occGrid[d]={}; TURNOS_NAMES.forEach(t => { occGrid[d][t]=[]; }); });
  profAtivos.forEach(p => {
    (p.diasSemana||[]).forEach(d => {
      (p.turnosTrabalho||[]).forEach(t => {
        if (occGrid[d] && occGrid[d][t]) occGrid[d][t].push(p);
      });
    });
  });

  // Build 6-month evolution
  const labels6 = [], dataRec6 = [], dataDsp6 = [];
  for (let i=5; i>=0; i--) {
    const dt = new Date(y, m-1-i, 1);
    const yi = dt.getFullYear(), mi = dt.getMonth()+1;
    labels6.push(MESES_SHORT[mi-1]);
    const ai = DB.get('atendimentos').filter(a => { const d=new Date(a.data); return d.getFullYear()===yi && d.getMonth()+1===mi; });
    const ri = ai.reduce((s,a) => s+U.calcRepasse(a),0) + getSublocacaoRevenue(yi, mi);
    const di = DB.get('despesas').filter(d => { const dt2=new Date(d.data); return dt2.getFullYear()===yi && dt2.getMonth()+1===mi; }).reduce((s,d) => s+(d.valor||0),0);
    dataRec6.push(ri); dataDsp6.push(di);
  }

  // Receita por tipo
  const rSubl = receitaSubl;
  const rPct = atends.filter(a=>{const p=DB.getOne('profissionais',a.profissionalId); return p&&p.regime==='porcentagem';}).reduce((s,a)=>s+U.calcRepasse(a),0);
  const rCli = atends.filter(a=>{const p=DB.getOne('profissionais',a.profissionalId); return p&&p.regime==='cliente';}).reduce((s,a)=>s+U.calcRepasse(a),0);
  const rHr = atends.filter(a=>{const p=DB.getOne('profissionais',a.profissionalId); return p&&p.regime==='hora';}).reduce((s,a)=>s+U.calcRepasse(a),0);

  // Recent attendance
  const recentAtends = [...DB.get('atendimentos')].sort((a,b)=>b.data.localeCompare(a.data)).slice(0,5);

  const content = document.getElementById('content');
  // Occupancy grid HTML
  const occHtml = `
    <table style="width:100%;border-collapse:collapse;text-align:center;font-size:12px">
      <thead><tr>
        <th style="padding:8px 10px;background:var(--surface-2);border:1px solid var(--border);font-weight:700;min-width:60px">Turno</th>
        ${DIAS_SEMANA_WORK.map(d=>`<th style="padding:8px;background:var(--surface-2);border:1px solid var(--border);font-weight:700">${d}</th>`).join('')}
      </tr></thead>
      <tbody>${TURNOS_NAMES.map(t=>`<tr>
        <td style="padding:8px 10px;border:1px solid var(--border);font-weight:700;background:var(--surface-2)">${t}</td>
        ${DIAS_SEMANA_WORK.map(d=>{
          const ps=occGrid[d][t]; const n=ps.length;
          const bg=n===0?'var(--surface-3)':n<=2?'rgba(34,197,94,0.18)':n<=4?'rgba(34,197,94,0.4)':'rgba(34,197,94,0.7)';
          const col=n>=5?'#fff':'var(--text)';
          const tip=ps.map(p=>p.nome).join('\n')||'Livre';
          return `<td style="padding:10px 6px;border:1px solid var(--border);background:${bg};color:${col};cursor:${n>0?'pointer':'default'};transition:opacity 0.15s" title="${U.escHtml(tip)}" onclick="showOccCell('${d}','${t}')">${n>0?`<strong>${n}</strong><br><span style="font-size:10px;opacity:0.8">${ps.slice(0,2).map(p=>p.nome.split(' ')[0]).join(', ')}${ps.length>2?'…':''}</span>`:'—'}</td>`;
        }).join('')}
      </tr>`).join('')}</tbody>
    </table>`;

  content.innerHTML = `
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon" style="background:var(--success-light)">💰</div>
        <div class="kpi-info">
          <div class="kpi-label">Receita ${MESES_SHORT[m-1]}</div>
          <div class="kpi-value">${U.fmtShort(totalReceita)}</div>
          <div class="kpi-sub">Acumulado no mês</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon" style="background:var(--danger-light)">📉</div>
        <div class="kpi-info">
          <div class="kpi-label">Despesas ${MESES_SHORT[m-1]}</div>
          <div class="kpi-value">${U.fmtShort(totalDespesa)}</div>
          <div class="kpi-sub">Acumulado no mês</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon" style="background:${resultado>=0?'var(--success-light)':'var(--danger-light)'}">📊</div>
        <div class="kpi-info">
          <div class="kpi-label">Resultado ${MESES_SHORT[m-1]}</div>
          <div class="kpi-value" style="color:${resultado>=0?'var(--success)':'var(--danger)'}">${U.fmtShort(resultado)}</div>
          <div class="kpi-sub">${resultado>=0?'Superávit':'Déficit'}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon" style="background:var(--info-light)">📋</div>
        <div class="kpi-info">
          <div class="kpi-label">Atendimentos</div>
          <div class="kpi-value">${atends.length}</div>
          <div class="kpi-sub">Esse mês • ${pendentes} cobr. pendentes</div>
        </div>
      </div>
    </div>

    <div class="dash-grid">
      <div class="card">
        <div class="card-title">Evolução 6 Meses <span>Receitas vs Despesas</span></div>
        <div class="chart-container"><canvas id="chart-evolucao"></canvas></div>
      </div>
      <div class="card">
        <div class="card-title">Receita por Tipo <span>${MESES[m-1]}</span></div>
        <div class="chart-container"><canvas id="chart-tipos"></canvas></div>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-title">Ocupação da Clínica <span>Por dia e turno — profissionais agendados</span></div>
      <div style="overflow-x:auto">${occHtml}</div>
      <div style="display:flex;gap:16px;margin-top:10px;font-size:11.5px;color:var(--text-muted);flex-wrap:wrap">
        <span>⬜ Livre</span>
        <span style="display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:14px;height:14px;background:rgba(34,197,94,0.18);border-radius:3px"></span>1–2 profissionais</span>
        <span style="display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:14px;height:14px;background:rgba(34,197,94,0.4);border-radius:3px"></span>3–4 profissionais</span>
        <span style="display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:14px;height:14px;background:rgba(34,197,94,0.7);border-radius:3px"></span>5+ profissionais</span>
        <span style="margin-left:auto;font-style:italic">Clique em uma célula para ver os profissionais</span>
      </div>
    </div>

    <div class="dash-grid">
      <div class="card">
        <div class="card-title">Últimos Atendimentos</div>
        ${recentAtends.length ? recentAtends.map(a=>`
          <div class="list-item">
            <div class="avatar">${U.initials(U.profNome(a.profissionalId))}</div>
            <div class="list-item-info">
              <div class="list-item-name">${U.escHtml(a.pacienteNome||U.pacNome(a.pacienteId))}</div>
              <div class="list-item-sub">${U.escHtml(U.profNome(a.profissionalId))} • ${U.date(a.data)}</div>
            </div>
            <div class="list-item-value" style="color:var(--success)">${U.fmt(U.calcRepasse(a))}</div>
          </div>`).join('') : '<div class="empty-state"><div class="empty-icon">📋</div><p>Nenhum atendimento registrado</p></div>'}
      </div>
      <div class="card">
        <div class="card-title">Profissionais Ativos <span>${DB.get('profissionais').filter(p=>p.ativo).length} total</span></div>
        ${DB.get('profissionais').filter(p=>p.ativo).slice(0,6).map(p=>`
          <div class="list-item">
            <div class="avatar">${U.initials(p.nome)}</div>
            <div class="list-item-info">
              <div class="list-item-name">${U.escHtml(p.nome)}</div>
              <div class="list-item-sub">${U.escHtml(p.profissao)}</div>
            </div>
            ${U.regimeBadge(p.regime)}
          </div>`).join('')}
      </div>
    </div>`;

  window.showOccCell = (dia, turno) => {
    const ps = occGrid[dia]?.[turno] || [];
    if (!ps.length) return;
    Modal.open(`${dia} — ${turno}`,
      `<div style="display:grid;gap:10px">${ps.map(p=>`
        <div class="list-item">
          <div class="avatar">${U.initials(p.nome)}</div>
          <div class="list-item-info">
            <div class="list-item-name">${U.escHtml(p.nome)}</div>
            <div class="list-item-sub">${U.escHtml(p.profissao)} • ${U.escHtml((p.salasOcupadas||[]).join(', ')||'—')}</div>
          </div>
          ${U.regimeBadge(p.regime)}
        </div>`).join('')}</div>`,
      `<button class="btn btn-secondary" onclick="Modal.close()">Fechar</button>`, 'sm');
  };

  // Charts
  requestAnimationFrame(() => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const gridColor = isDark ? '#334155' : '#e2e8f0';
    const textColor = isDark ? '#94a3b8' : '#64748b';

    new Chart(document.getElementById('chart-evolucao'), {
      type:'bar',
      data:{ labels:labels6,
        datasets:[
          { label:'Receita', data:dataRec6, backgroundColor:'rgba(99,102,241,0.7)', borderRadius:6 },
          { label:'Despesa', data:dataDsp6, backgroundColor:'rgba(239,68,68,0.5)', borderRadius:6 }
        ]},
      options:{ responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ labels:{ color:textColor, boxWidth:12 } } },
        scales:{ x:{ grid:{color:gridColor}, ticks:{color:textColor} }, y:{ grid:{color:gridColor}, ticks:{color:textColor, callback:v=>U.fmtShort(v)} } } }
    });

    const pieData = [rSubl, rPct, rCli, rHr].filter(v=>v>0);
    const pieLabels = ['Sublocação','Porcentagem','Por Cliente','Por Hora'].filter((_,i)=>[rSubl,rPct,rCli,rHr][i]>0);
    new Chart(document.getElementById('chart-tipos'), {
      type:'doughnut',
      data:{ labels:pieLabels, datasets:[{ data:pieData, backgroundColor:['#6366f1','#22c55e','#f59e0b','#3b82f6'], borderWidth:2, borderColor:'var(--surface)' }]},
      options:{ responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ position:'bottom', labels:{ color:textColor, boxWidth:12, padding:10 } } } }
    });
  });
}

/* ===== PROFISSIONAIS ===== */
function renderProfissionais() {
  let filter = '', regFilter = '';
  function draw() {
    const list = DB.get('profissionais').filter(p => {
      const q = filter.toLowerCase();
      const ok = !q || p.nome.toLowerCase().includes(q) || (p.profissao||'').toLowerCase().includes(q);
      const rok = !regFilter || p.regime === regFilter;
      return ok && rok;
    });
    document.getElementById('prof-list').innerHTML = list.length ? `
      <div class="table-wrap"><table>
        <thead><tr><th>Profissional</th><th>Especialidade</th><th>Regime</th><th>Vencimento</th><th>Estac.</th><th>Status</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>${list.map(p=>`
          <tr>
            <td><div style="display:flex;align-items:center;gap:10px"><div class="avatar">${U.initials(p.nome)}</div><div><div style="font-weight:600">${U.escHtml(p.nome)}</div><div style="font-size:11px;color:var(--text-muted)">${U.escHtml(p.conselho||'')}</div></div></div></td>
            <td>${U.escHtml(p.profissao)}</td>
            <td>${U.regimeBadge(p.regime)}${regimedesc(p)}</td>
            <td>Dia ${p.diaVencimento}</td>
            <td>${p.usaEstacionamento ? U.fmt(p.valorEstacionamento) : '<span class="badge badge-gray">Não</span>'}</td>
            <td><span class="badge ${p.ativo?'badge-success':'badge-danger'}">${p.ativo?'Ativo':'Inativo'}</span></td>
            <td><div class="td-actions">
              <button class="action-btn view" onclick='viewProf("${p.id}")'>👁</button>
              <button class="action-btn edit" onclick='editProf("${p.id}")'>✏️</button>
              <button class="action-btn delete" onclick='delProf("${p.id}")'>🗑</button>
            </div></td>
          </tr>`).join('')}
        </tbody>
      </table></div>` : '<div class="empty-state"><div class="empty-icon">👩‍⚕️</div><h3>Nenhum profissional encontrado</h3></div>';
  }
  function regimedesc(p) {
    if (p.regime==='sublocacao') return `<div style="font-size:11px;color:var(--text-muted)">${U.fmt(p.valorMensal)}/mês</div>`;
    if (p.regime==='porcentagem') return `<div style="font-size:11px;color:var(--text-muted)">${p.percentualClinica}% clínica</div>`;
    if (p.regime==='cliente') return `<div style="font-size:11px;color:var(--text-muted)">${U.fmt(p.valorPorCliente)}/cliente</div>`;
    if (p.regime==='hora') return `<div style="font-size:11px;color:var(--text-muted)">${U.fmt(p.valorHora)}/hora</div>`;
    return '';
  }

  const c = document.getElementById('content');
  c.innerHTML = `
    <div class="page-header">
      <h2>Profissionais</h2>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="editProf()">＋ Novo Profissional</button>
      </div>
    </div>
    <div class="filters-bar">
      <input class="search-input" placeholder="🔍 Buscar profissional..." id="prof-search">
      <select class="filter-select" id="prof-reg-filter">
        <option value="">Todos os regimes</option>
        ${Object.entries(REGIMES).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}
      </select>
    </div>
    <div id="prof-list"></div>`;

  document.getElementById('prof-search').oninput = e => { filter=e.target.value; draw(); };
  document.getElementById('prof-reg-filter').onchange = e => { regFilter=e.target.value; draw(); };
  draw();
}

window.viewProf = (id) => {
  const p = DB.getOne('profissionais', id);
  if (!p) return;
  const atends = DB.get('atendimentos').filter(a=>a.profissionalId===id);
  const totalRec = atends.reduce((s,a)=>s+U.calcRepasse(a),0);
  Modal.open(`👩‍⚕️ ${p.nome}`, `
    <div style="display:grid;gap:12px">
      <div class="stat-row">
        ${U.regimeBadge(p.regime)}
        <span class="badge ${p.ativo?'badge-success':'badge-danger'}">${p.ativo?'Ativo':'Inativo'}</span>
      </div>
      <div class="form-grid">
        <div><label style="font-size:11px;color:var(--text-muted)">CPF</label><div>${U.escHtml(p.cpf||'—')}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">Conselho</label><div>${U.escHtml(p.conselho||'—')}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">Celular</label><div>${U.escHtml(p.celular||'—')}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">E-mail</label><div>${U.escHtml(p.email||'—')}</div></div>
        <div class="form-full"><label style="font-size:11px;color:var(--text-muted)">Endereço</label><div>${U.escHtml(p.endereco||'—')}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">Contrato</label><div>${U.date(p.dataContrato)}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">Vencimento</label><div>Dia ${p.diaVencimento}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">Total Atendimentos</label><div>${atends.length}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">Receita Gerada</label><div style="color:var(--success);font-weight:700">${U.fmt(totalRec)}</div></div>
      </div>
      ${(p.diasSemana||[]).length||((p.turnosTrabalho||[]).length) ? `
        <div><label style="font-size:11px;color:var(--text-muted)">Agenda</label>
          <div style="margin-top:4px;display:flex;gap:6px;flex-wrap:wrap">
            ${(p.diasSemana||[]).map(d=>`<span class="badge badge-info">${d}</span>`).join('')}
            ${(p.turnosTrabalho||[]).map(t=>`<span class="badge badge-primary">${t}</span>`).join('')}
          </div>
        </div>` : ''}
      ${(p.salasOcupadas||[]).length ? `<div><label style="font-size:11px;color:var(--text-muted)">Salas</label><div style="margin-top:4px;display:flex;gap:6px;flex-wrap:wrap">${(p.salasOcupadas||[]).map(s=>`<span class="badge badge-gray">${s}</span>`).join('')}</div></div>` : ''}
      ${p.obs ? `<div><label style="font-size:11px;color:var(--text-muted)">Observações</label><div>${U.escHtml(p.obs)}</div></div>` : ''}
    </div>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Fechar</button><button class="btn btn-primary" onclick="Modal.close();editProf('${id}')">Editar</button>`);
};

window.editProf = (id) => {
  const p = id ? DB.getOne('profissionais', id) : null;
  const v = (field, def='') => p ? (p[field]??def) : def;
  const regimeFields = () => {
    const reg = document.getElementById('f-regime').value;
    const div = document.getElementById('regime-fields');
    div.innerHTML = '';
    if (reg==='sublocacao') div.innerHTML = `
      <div class="form-section-title">Valores de Sublocação</div>
      <div class="form-group"><label>Valor Mensal (R$) *</label><input id="f-valorMensal" type="number" step="0.01" value="${v('valorMensal',0)}" required></div>
      <div class="form-group"><label>Valor Hora Extra (R$)</label><input id="f-valorHoraExtra" type="number" step="0.01" value="${v('valorHoraExtra',50)}"></div>`;
    else if (reg==='hora') div.innerHTML = `
      <div class="form-section-title">Valor por Hora</div>
      <div class="form-group"><label>Valor por Hora (R$) *</label><input id="f-valorHora" type="number" step="0.01" value="${v('valorHora',0)}" required></div>`;
    else if (reg==='cliente') div.innerHTML = `
      <div class="form-section-title">Valor por Cliente</div>
      <div class="form-group"><label>Valor por Cliente (R$) *</label><input id="f-valorPorCliente" type="number" step="0.01" value="${v('valorPorCliente',0)}" required></div>`;
    else if (reg==='porcentagem') div.innerHTML = `
      <div class="form-section-title">Percentuais</div>
      <div class="form-group"><label>% Clínica — Paciente da Clínica *</label><input id="f-percentualClinica" type="number" step="1" min="0" max="100" value="${v('percentualClinica',60)}" required></div>
      <div class="form-group"><label>% Clínica — Paciente Próprio</label><input id="f-percentualProprioClinica" type="number" step="1" min="0" max="100" value="${v('percentualProprioClinica',60)}"></div>`;
    else if (reg==='turno') div.innerHTML = `
      <div class="form-section-title">Turnos</div>
      <div class="form-group"><label>Valor por Turno (R$) *</label><input id="f-valorTurno" type="number" step="0.01" value="${v('valorTurno',0)}" required></div>
      <div class="form-group"><label>Valor Hora Extra (R$)</label><input id="f-valorHoraExtra" type="number" step="0.01" value="${v('valorHoraExtra',50)}"></div>`;
  };

  window._regimeFields = regimeFields;
  Modal.open(p ? 'Editar Profissional' : 'Novo Profissional', `
    <form id="prof-form">
      <div class="form-grid">
        <div class="form-section-title">Dados Pessoais</div>
        <div class="form-group form-full"><label>Nome Completo *</label><input id="f-nome" value="${U.escHtml(v('nome'))}" required></div>
        <div class="form-group"><label>CPF</label><input id="f-cpf" value="${U.escHtml(v('cpf'))}"></div>
        <div class="form-group"><label>CNPJ</label><input id="f-cnpj" value="${U.escHtml(v('cnpj'))}"></div>
        <div class="form-group"><label>Profissão *</label><input id="f-profissao" value="${U.escHtml(v('profissao'))}" required></div>
        <div class="form-group"><label>Especialidade</label><input id="f-especialidade" value="${U.escHtml(v('especialidade'))}"></div>
        <div class="form-group"><label>Conselho</label><input id="f-conselho" value="${U.escHtml(v('conselho'))}"></div>
        <div class="form-group"><label>Celular</label><input id="f-celular" value="${U.escHtml(v('celular'))}"></div>
        <div class="form-group"><label>WhatsApp</label><input id="f-whatsapp" value="${U.escHtml(v('whatsapp'))}"></div>
        <div class="form-group"><label>E-mail</label><input id="f-email" type="email" value="${U.escHtml(v('email'))}"></div>
        <div class="form-group"><label>Data do Contrato</label><input id="f-dataContrato" type="date" value="${v('dataContrato')}"></div>
        <div class="form-group form-full"><label>Endereço</label><input id="f-endereco" value="${U.escHtml(v('endereco'))}"></div>

        <div class="form-section-title">Regime Contratual</div>
        <div class="form-group"><label>Regime *</label>
          <select id="f-regime" required onchange="window._regimeFields()">
            ${Object.entries(REGIMES).map(([k,lbl])=>`<option value="${k}" ${v('regime')===k?'selected':''}>${lbl}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label>Dia de Vencimento</label><input id="f-diaVencimento" type="number" min="1" max="31" value="${v('diaVencimento',5)}"></div>
        <div id="regime-fields" class="form-full" style="display:grid;grid-template-columns:1fr 1fr;gap:16px"></div>

        <div class="form-section-title">Estacionamento</div>
        <div class="form-group form-full">
          <label class="form-check"><input type="checkbox" id="f-usaEstac" ${v('usaEstacionamento')?'checked':''}> Usa estacionamento</label>
        </div>
        <div class="form-group"><label>Valor Estacionamento (R$/mês)</label><input id="f-valorEstac" type="number" step="0.01" value="${v('valorEstacionamento',0)}"></div>

        <div class="form-section-title">Agenda Semanal</div>
        <div class="form-group form-full"><label>Dias da Semana</label>
          <div style="display:flex;gap:12px;flex-wrap:wrap;padding:6px 0">
            ${DIAS_SEMANA_WORK.map(d=>`<label class="form-check"><input type="checkbox" class="f-dia" value="${d}" ${(v('diasSemana',[])||[]).includes(d)?'checked':''}> ${d}</label>`).join('')}
          </div>
        </div>
        <div class="form-group form-full"><label>Turnos de Trabalho</label>
          <div style="display:flex;gap:20px;flex-wrap:wrap;padding:6px 0">
            ${TURNOS_NAMES.map(t=>`<label class="form-check"><input type="checkbox" class="f-turno" value="${t}" ${(v('turnosTrabalho',[])||[]).includes(t)?'checked':''}> ${t}</label>`).join('')}
          </div>
        </div>
        <div class="form-group form-full"><label>Salas Ocupadas</label>
          <div style="display:flex;gap:12px;flex-wrap:wrap;padding:6px 0">
            ${SALAS.map(s=>`<label class="form-check"><input type="checkbox" class="f-sala" value="${s}" ${(v('salasOcupadas',[])||[]).includes(s)?'checked':''}> ${s}</label>`).join('')}
          </div>
        </div>

        <div class="form-section-title">Outros</div>
        <div class="form-group form-full">
          <label class="form-check"><input type="checkbox" id="f-ativo" ${v('ativo',true)?'checked':''}> Profissional ativo</label>
        </div>
        <div class="form-group form-full"><label>Observações</label><textarea id="f-obs">${U.escHtml(v('obs'))}</textarea></div>
      </div>
    </form>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
   <button class="btn btn-primary" onclick="saveProf('${id||''}')">💾 Salvar</button>`, 'lg');
  regimeFields();
};

window.saveProf = (id) => {
  const g = (i) => document.getElementById(i);
  const nome = g('f-nome')?.value?.trim();
  if (!nome) { toast('Nome é obrigatório','error'); return; }
  const regime = g('f-regime').value;
  const base = {
    id: id || U.id(),
    nome, cpf: g('f-cpf').value.trim(), cnpj: g('f-cnpj').value.trim(),
    profissao: g('f-profissao').value.trim(), especialidade: g('f-especialidade').value.trim(),
    conselho: g('f-conselho').value.trim(), celular: g('f-celular').value.trim(),
    whatsapp: g('f-whatsapp').value.trim(), email: g('f-email').value.trim(),
    endereco: g('f-endereco').value.trim(), dataContrato: g('f-dataContrato').value,
    regime, diaVencimento: parseInt(g('f-diaVencimento').value)||5,
    usaEstacionamento: g('f-usaEstac').checked,
    valorEstacionamento: U.parseNum(g('f-valorEstac').value),
    ativo: g('f-ativo').checked, obs: g('f-obs').value.trim(),
    createdAt: id ? (DB.getOne('profissionais',id)||{}).createdAt : new Date().toISOString()
  };
  base.diasSemana = [...document.querySelectorAll('.f-dia:checked')].map(el=>el.value);
  base.turnosTrabalho = [...document.querySelectorAll('.f-turno:checked')].map(el=>el.value);
  base.salasOcupadas = [...document.querySelectorAll('.f-sala:checked')].map(el=>el.value);
  if (regime==='sublocacao') { base.valorMensal=U.parseNum(g('f-valorMensal')?.value); base.valorHoraExtra=U.parseNum(g('f-valorHoraExtra')?.value)||50; }
  if (regime==='hora') { base.valorHora=U.parseNum(g('f-valorHora')?.value); }
  if (regime==='cliente') { base.valorPorCliente=U.parseNum(g('f-valorPorCliente')?.value); }
  if (regime==='porcentagem') { base.percentualClinica=parseFloat(g('f-percentualClinica')?.value)||60; base.percentualProprioClinica=parseFloat(g('f-percentualProprioClinica')?.value)||base.percentualClinica; }
  if (regime==='turno') { base.valorTurno=U.parseNum(g('f-valorTurno')?.value); base.valorHoraExtra=U.parseNum(g('f-valorHoraExtra')?.value)||50; }
  DB.save('profissionais', base);
  Modal.close();
  toast(id ? 'Profissional atualizado!' : 'Profissional cadastrado!', 'success');
  renderProfissionais();
};

window.delProf = (id) => {
  const p = DB.getOne('profissionais', id);
  Modal.confirm(`Excluir <strong>${U.escHtml(p?.nome)}</strong>? Esta ação não pode ser desfeita.`, () => {
    DB.remove('profissionais', id);
    toast('Profissional excluído', 'warning');
    renderProfissionais();
  });
};

/* ===== PACIENTES ===== */
function renderPacientes() {
  let filter = '';
  function draw() {
    const list = DB.get('pacientes').filter(p => !filter || p.nome.toLowerCase().includes(filter.toLowerCase()));
    document.getElementById('pac-list').innerHTML = list.length ? `
      <div class="table-wrap"><table>
        <thead><tr><th>Paciente</th><th>WhatsApp</th><th>Profissional</th><th>Início</th><th>Status</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>${list.map(p=>`
          <tr>
            <td><div style="display:flex;align-items:center;gap:10px"><div class="avatar">${U.initials(p.nome)}</div><div><div style="font-weight:600">${U.escHtml(p.nome)}</div><div style="font-size:11px;color:var(--text-muted)">${U.escHtml(p.cpf||'')}</div></div></div></td>
            <td>${U.escHtml(p.whatsapp||'—')}</td>
            <td>${U.escHtml(U.profNome(p.profissionalPrincipal)||'—')}</td>
            <td>${U.date(p.dataInicio)}</td>
            <td><span class="badge ${p.ativo!==false?'badge-success':'badge-gray'}">${p.ativo!==false?'Ativo':'Inativo'}</span></td>
            <td><div class="td-actions">
              <button class="action-btn view" onclick='viewPac("${p.id}")'>👁</button>
              <button class="action-btn edit" onclick='editPac("${p.id}")'>✏️</button>
              <button class="action-btn delete" onclick='delPac("${p.id}")'>🗑</button>
            </div></td>
          </tr>`).join('')}
        </tbody></table></div>`
    : '<div class="empty-state"><div class="empty-icon">🧑</div><h3>Nenhum paciente cadastrado</h3><p>Clique em "Novo Paciente" para começar</p></div>';
  }
  document.getElementById('content').innerHTML = `
    <div class="page-header"><h2>Pacientes</h2>
      <div class="page-actions"><button class="btn btn-primary" onclick="editPac()">＋ Novo Paciente</button></div>
    </div>
    <div class="filters-bar"><input class="search-input" placeholder="🔍 Buscar paciente..." id="pac-search"></div>
    <div id="pac-list"></div>`;
  document.getElementById('pac-search').oninput = e => { filter=e.target.value; draw(); };
  draw();
}

window.viewPac = (id) => {
  const p = DB.getOne('pacientes', id);
  if (!p) return;
  const atends = DB.get('atendimentos').filter(a=>a.pacienteId===id).sort((a,b)=>b.data.localeCompare(a.data)).slice(0,10);
  Modal.open(`🧑 ${p.nome}`, `
    <div style="display:grid;gap:14px">
      <div class="form-grid">
        <div><label style="font-size:11px;color:var(--text-muted)">CPF</label><div>${U.escHtml(p.cpf||'—')}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">WhatsApp</label><div>${U.escHtml(p.whatsapp||'—')}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">Profissional</label><div>${U.escHtml(U.profNome(p.profissionalPrincipal)||'—')}</div></div>
        <div><label style="font-size:11px;color:var(--text-muted)">Início</label><div>${U.date(p.dataInicio)||'—'}</div></div>
      </div>
      ${atends.length ? `<div><div class="section-title">Últimos atendimentos</div>
        <table style="width:100%;font-size:12px;border-collapse:collapse">
          <thead><tr><th style="text-align:left;padding:6px;background:var(--surface-2)">Data</th><th style="padding:6px;background:var(--surface-2)">Profissional</th><th style="text-align:right;padding:6px;background:var(--surface-2)">Valor</th></tr></thead>
          <tbody>${atends.map(a=>`<tr><td style="padding:6px;border-bottom:1px solid var(--border)">${U.date(a.data)}</td><td style="padding:6px;border-bottom:1px solid var(--border)">${U.escHtml(U.profNome(a.profissionalId))}</td><td style="text-align:right;padding:6px;border-bottom:1px solid var(--border)">${U.fmt(a.valor)}</td></tr>`).join('')}
          </tbody></table></div>` : ''}
    </div>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Fechar</button><button class="btn btn-primary" onclick="Modal.close();editPac('${id}')">Editar</button>`);
};

window.editPac = (id) => {
  const p = id ? DB.getOne('pacientes', id) : null;
  const v = (f,d='') => p ? (p[f]??d) : d;
  const profs = DB.get('profissionais').filter(x=>x.ativo);
  Modal.open(p ? 'Editar Paciente' : 'Novo Paciente', `
    <form id="pac-form"><div class="form-grid">
      <div class="form-group form-full"><label>Nome Completo *</label><input id="fp-nome" value="${U.escHtml(v('nome'))}" required></div>
      <div class="form-group"><label>CPF</label><input id="fp-cpf" value="${U.escHtml(v('cpf'))}"></div>
      <div class="form-group"><label>WhatsApp</label><input id="fp-whatsapp" value="${U.escHtml(v('whatsapp'))}"></div>
      <div class="form-group"><label>Data de Nascimento</label><input id="fp-dataNasc" type="date" value="${v('dataNascimento')}"></div>
      <div class="form-group"><label>Data de Início</label><input id="fp-dataInicio" type="date" value="${v('dataInicio')}"></div>
      <div class="form-group"><label>Profissional Principal</label>
        <select id="fp-prof"><option value="">Selecione...</option>${profs.map(p=>`<option value="${p.id}" ${v('profissionalPrincipal')===p.id?'selected':''}>${U.escHtml(p.nome)}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label>Indicado por</label>
        <select id="fp-indicado"><option value="clinica" ${v('indicadoPor','clinica')==='clinica'?'selected':''}>Clínica</option>${profs.map(p=>`<option value="${p.id}" ${v('indicadoPor')===p.id?'selected':''}>${U.escHtml(p.nome)}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label>E-mail</label><input id="fp-email" type="email" value="${U.escHtml(v('email'))}"></div>
      <div class="form-group form-full"><label>Observações</label><textarea id="fp-obs">${U.escHtml(v('obs'))}</textarea></div>
      <div class="form-group form-full"><label class="form-check"><input type="checkbox" id="fp-ativo" ${v('ativo',true)?'checked':''}> Paciente ativo</label></div>
    </div></form>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button><button class="btn btn-primary" onclick="savePac('${id||''}')">💾 Salvar</button>`);
};

window.savePac = (id) => {
  const g = i => document.getElementById(i);
  const nome = g('fp-nome')?.value?.trim();
  if (!nome) { toast('Nome é obrigatório','error'); return; }
  const p = { id:id||U.id(), nome, cpf:g('fp-cpf').value.trim(), whatsapp:g('fp-whatsapp').value.trim(),
    dataNascimento:g('fp-dataNasc').value, dataInicio:g('fp-dataInicio').value,
    profissionalPrincipal:g('fp-prof').value, indicadoPor:g('fp-indicado').value,
    email:g('fp-email').value.trim(), obs:g('fp-obs').value.trim(), ativo:g('fp-ativo').checked,
    createdAt: id?(DB.getOne('pacientes',id)||{}).createdAt:new Date().toISOString() };
  DB.save('pacientes', p);
  Modal.close();
  toast(id?'Paciente atualizado!':'Paciente cadastrado!','success');
  renderPacientes();
};

window.delPac = (id) => {
  const p = DB.getOne('pacientes', id);
  Modal.confirm(`Excluir paciente <strong>${U.escHtml(p?.nome)}</strong>?`, () => {
    DB.remove('pacientes', id);
    toast('Paciente excluído','warning');
    renderPacientes();
  });
};

/* ===== ATENDIMENTOS ===== */
function renderAtendimentos() {
  const now = new Date();
  let y = now.getFullYear(), m = now.getMonth()+1;
  let filterProf = '';

  function draw() {
    const list = DB.get('atendimentos').filter(a => {
      const d = new Date(a.data);
      return d.getFullYear()===y && d.getMonth()+1===m && (!filterProf || a.profissionalId===filterProf);
    }).sort((a,b)=>b.data.localeCompare(a.data));

    const totalVal = list.reduce((s,a)=>s+(a.valor||0),0);
    const totalRep = list.reduce((s,a)=>s+U.calcRepasse(a),0);

    document.getElementById('at-list').innerHTML = `
      <div class="stat-row">
        <div class="stat-chip">Atendimentos: <strong>${list.length}</strong></div>
        <div class="stat-chip">Total atendido: <strong>${U.fmt(totalVal)}</strong></div>
        <div class="stat-chip">Repasse clínica: <strong style="color:var(--success)">${U.fmt(totalRep)}</strong></div>
      </div>
      ${list.length ? `
      <div class="table-wrap"><table>
        <thead><tr><th>Data</th><th>Profissional</th><th>Paciente</th><th>Origem</th><th>Valor</th><th>Repasse</th><th>Vistos</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>${list.map(a=>`
          <tr>
            <td>${U.date(a.data)}</td>
            <td>${U.escHtml(U.profNome(a.profissionalId))}</td>
            <td>${U.escHtml(a.pacienteNome||U.pacNome(a.pacienteId))}</td>
            <td><span class="badge ${a.origemPaciente==='clinica'?'badge-info':'badge-warning'}">${a.origemPaciente==='clinica'?'Clínica':'Profissional'}</span></td>
            <td style="font-weight:600">${U.fmt(a.valor)}</td>
            <td style="color:var(--success);font-weight:600">${U.fmt(U.calcRepasse(a))}</td>
            <td style="font-size:18px">${a.vistoCliente?'✅':'⬜'}${a.vistoProfissional?'✅':'⬜'}${a.vistoNosi?'✅':'⬜'}</td>
            <td><div class="td-actions">
              <button class="action-btn edit" onclick='editAtend("${a.id}")'>✏️</button>
              <button class="action-btn delete" onclick='delAtend("${a.id}")'>🗑</button>
            </div></td>
          </tr>`).join('')}
        </tbody></table></div>` : '<div class="empty-state"><div class="empty-icon">📋</div><h3>Nenhum atendimento neste mês</h3></div>'}`;
  }

  const profs = DB.get('profissionais').filter(p=>p.ativo);
  document.getElementById('content').innerHTML = `
    <div class="page-header"><h2>Atendimentos</h2>
      <div class="page-actions"><button class="btn btn-primary" onclick="editAtend()">＋ Registrar Atendimento</button></div>
    </div>
    <div class="filters-bar">
      <div class="month-nav">
        <button onclick="atNavMes(-1)">‹</button>
        <div class="month-label" id="at-month-label"></div>
        <button onclick="atNavMes(1)">›</button>
      </div>
      <select class="filter-select" id="at-prof-filter">
        <option value="">Todos os profissionais</option>
        ${profs.map(p=>`<option value="${p.id}">${U.escHtml(p.nome)}</option>`).join('')}
      </select>
    </div>
    <div id="at-list"></div>`;

  window.atNavMes = (d) => { m+=d; if(m>12){m=1;y++;}if(m<1){m=12;y--;} document.getElementById('at-month-label').textContent=`${MESES[m-1]} ${y}`; draw(); };
  document.getElementById('at-prof-filter').onchange = e => { filterProf=e.target.value; draw(); };
  document.getElementById('at-month-label').textContent = `${MESES[m-1]} ${y}`;
  draw();
}

window.editAtend = (id) => {
  const a = id ? DB.getOne('atendimentos', id) : null;
  const v = (f,d='') => a ? (a[f]??d) : d;
  const profs = DB.get('profissionais').filter(p=>p.ativo);
  const pacs = DB.get('pacientes').filter(p=>p.ativo!==false);

  Modal.open(a ? 'Editar Atendimento' : 'Registrar Atendimento', `
    <form id="at-form"><div class="form-grid">
      <div class="form-group"><label>Data *</label><input id="fa-data" type="date" value="${v('data',U.isoToday())}" required></div>
      <div class="form-group"><label>Profissional *</label>
        <select id="fa-prof" required onchange="atUpdatePercent()">
          <option value="">Selecione...</option>${profs.map(p=>`<option value="${p.id}" ${v('profissionalId')===p.id?'selected':''}>${U.escHtml(p.nome)}</option>`).join('')}
        </select>
      </div>
      <div class="form-group"><label>Paciente</label>
        <select id="fa-pac">
          <option value="">Selecione ou digite abaixo...</option>${pacs.map(p=>`<option value="${p.id}" ${v('pacienteId')===p.id?'selected':''}>${U.escHtml(p.nome)}</option>`).join('')}
        </select>
      </div>
      <div class="form-group"><label>Nome Paciente (se novo)</label><input id="fa-pacNome" value="${U.escHtml(v('pacienteNome'))}" placeholder="Nome avulso..."></div>
      <div class="form-group"><label>Valor da Consulta (R$) *</label><input id="fa-valor" type="number" step="0.01" value="${v('valor',0)}" required oninput="atUpdatePercent()"></div>
      <div class="form-group"><label>Origem do Paciente</label>
        <select id="fa-origem" onchange="atUpdatePercent()">
          <option value="clinica" ${v('origemPaciente','clinica')==='clinica'?'selected':''}>Indicação da Clínica</option>
          <option value="profissional" ${v('origemPaciente')==='profissional'?'selected':''}>Indicação do Profissional</option>
        </select>
      </div>
      <div class="form-group"><label>% Clínica (negociado)</label><input id="fa-pctOverride" type="number" step="1" min="0" max="100" value="${v('percentualOverride','')?v('percentualOverride',''):''}" placeholder="Padrão do contrato"></div>
      <div class="form-group"><label>Qtd. Horas (regime hora)</label><input id="fa-horas" type="number" step="0.5" min="0.5" value="${v('horasQtd',1)}"></div>
      <div id="fa-repasse-preview" class="form-full" style="background:var(--success-light);color:var(--success);padding:8px 12px;border-radius:var(--radius-sm);font-weight:700;font-size:13px"></div>
      <div class="form-section-title">Vistos / Assinaturas</div>
      <div class="form-group form-full" style="display:flex;gap:24px;flex-wrap:wrap">
        <label class="form-check"><input type="checkbox" id="fa-vistoC" ${v('vistoCliente')?'checked':''}> Visto Cliente/Responsável</label>
        <label class="form-check"><input type="checkbox" id="fa-vistoP" ${v('vistoProfissional')?'checked':''}> Visto Profissional</label>
        <label class="form-check"><input type="checkbox" id="fa-vistoN" ${v('vistoNosi')?'checked':''}> Visto NOSI</label>
      </div>
      <div class="form-group form-full"><label>Observações</label><textarea id="fa-obs">${U.escHtml(v('obs'))}</textarea></div>
    </div></form>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button><button class="btn btn-primary" onclick="saveAtend('${id||''}')">💾 Salvar</button>`);

  window.atUpdatePercent = () => {
    const profId = document.getElementById('fa-prof').value;
    const p = DB.getOne('profissionais', profId);
    const val = U.parseNum(document.getElementById('fa-valor').value);
    const origem = document.getElementById('fa-origem').value;
    const prev = document.getElementById('fa-repasse-preview');
    if (!p || !val) { prev.textContent=''; return; }
    const mockAt = { profissionalId:profId, valor:val, origemPaciente:origem,
      percentualOverride:document.getElementById('fa-pctOverride').value?parseFloat(document.getElementById('fa-pctOverride').value):null, horasQtd:parseFloat(document.getElementById('fa-horas').value)||1 };
    prev.textContent = `Repasse estimado para a clínica: ${U.fmt(U.calcRepasse(mockAt))}`;
  };
  setTimeout(() => window.atUpdatePercent && window.atUpdatePercent(), 100);
};

window.saveAtend = (id) => {
  const g = i => document.getElementById(i);
  const profId = g('fa-prof').value;
  const data = g('fa-data').value;
  if (!profId || !data) { toast('Profissional e data são obrigatórios','error'); return; }
  const valor = U.parseNum(g('fa-valor').value);
  const pacId = g('fa-pac').value;
  const pacNome = g('fa-pacNome').value.trim() || (pacId ? U.pacNome(pacId) : '');
  const pctStr = g('fa-pctOverride').value.trim();
  const rec = { id:id||U.id(), data, profissionalId:profId, pacienteId:pacId, pacienteNome:pacNome,
    valor, origemPaciente:g('fa-origem').value,
    percentualOverride: pctStr ? parseFloat(pctStr) : null,
    horasQtd: parseFloat(g('fa-horas').value)||1,
    vistoCliente:g('fa-vistoC').checked, vistoProfissional:g('fa-vistoP').checked, vistoNosi:g('fa-vistoN').checked,
    obs:g('fa-obs').value.trim(),
    createdAt: id?(DB.getOne('atendimentos',id)||{}).createdAt:new Date().toISOString() };
  DB.save('atendimentos', rec);
  Modal.close();
  toast(id?'Atendimento atualizado!':'Atendimento registrado!','success');
  renderAtendimentos();
};

window.delAtend = (id) => Modal.confirm('Excluir este atendimento?', () => { DB.remove('atendimentos',id); toast('Atendimento excluído','warning'); renderAtendimentos(); });

/* ===== COBRANÇA ===== */
function renderCobranca() {
  const now = new Date();
  let y = now.getFullYear(), m = now.getMonth()+1;

  function calcCobranca(p) {
    const mk = U.monthKey(y,m);
    let existing = DB.get('cobrancas').find(c=>c.profissionalId===p.id && c.mes===m && c.ano===y);
    if (!existing) return { profissionalId:p.id, mes:m, ano:y, boletoEmitido:null, boletoPago:null, banco:'', obs:'' };
    return existing;
  }

  function autoCalc(p) {
    const atends = DB.get('atendimentos').filter(a=>{ const d=new Date(a.data); return a.profissionalId===p.id && d.getFullYear()===y && d.getMonth()+1===m; });
    const c = calcCobranca(p);
    if (['sublocacao','turno'].includes(p.regime)) {
      const base = p.regime==='sublocacao' ? (p.valorMensal||0) : (p.valorTurno||0);
      const estac = p.usaEstacionamento ? (p.valorEstacionamento||0) : 0;
      const he = (c.qtdHorasExtras||0) * (p.valorHoraExtra||50);
      return { ...c, valorBase:base, valorEstacionamento:estac, qtdHorasExtras:c.qtdHorasExtras||0, valorHorasExtras:he,
        totalAtendimentos:0, totalRepasse:0, totalPagar:base+estac+he };
    } else {
      const totalAtend = atends.reduce((s,a)=>s+(a.valor||0),0);
      const totalRep = atends.reduce((s,a)=>s+U.calcRepasse(a),0);
      return { ...c, valorBase:0, valorEstacionamento:0, qtdHorasExtras:0, valorHorasExtras:0,
        totalAtendimentos:totalAtend, totalRepasse:totalRep, totalPagar:totalRep };
    }
  }

  function draw() {
    const profs = DB.get('profissionais').filter(p=>p.ativo);
    const cobrs = profs.map(p=>({prof:p, calc:autoCalc(p)}));
    const totalPend = cobrs.filter(x=>!x.calc.boletoPago).reduce((s,x)=>s+(x.calc.totalPagar||0),0);
    const totalPago = cobrs.filter(x=>x.calc.boletoPago).reduce((s,x)=>s+(x.calc.totalPagar||0),0);

    document.getElementById('cobr-list').innerHTML = `
      <div class="stat-row">
        <div class="stat-chip">Pendentes: <strong style="color:var(--warning)">${U.fmt(totalPend)}</strong></div>
        <div class="stat-chip">Pagos: <strong style="color:var(--success)">${U.fmt(totalPago)}</strong></div>
        <div class="stat-chip">Total: <strong>${U.fmt(totalPend+totalPago)}</strong></div>
      </div>
      <div style="display:grid;gap:14px">
      ${cobrs.map(({prof:p, calc:c})=>`
        <div class="billing-card" style="border-left:4px solid ${c.boletoPago?'var(--success)':c.boletoEmitido?'var(--warning)':'var(--border-2)'}">
          <div class="billing-header">
            <div class="avatar">${U.initials(p.nome)}</div>
            <div style="flex:1">
              <div class="billing-name">${U.escHtml(p.nome)}</div>
              <div class="billing-prof">${U.escHtml(p.profissao)} • ${U.regimeBadge(p.regime)}</div>
            </div>
            <span class="badge ${c.boletoPago?'badge-success':c.boletoEmitido?'badge-warning':'badge-gray'}">
              ${c.boletoPago?'✅ Pago':c.boletoEmitido?'🔄 Emitido':'⏳ Pendente'}
            </span>
          </div>
          <div class="billing-amounts">
            ${['sublocacao','turno'].includes(p.regime) ? `
              <div class="billing-amount"><div class="billing-amount-label">Sublocação</div><div class="billing-amount-value">${U.fmt(c.valorBase)}</div></div>
              <div class="billing-amount"><div class="billing-amount-label">Estacionamento</div><div class="billing-amount-value">${U.fmt(c.valorEstacionamento)}</div></div>
              <div class="billing-amount"><div class="billing-amount-label">Horas Extras (${c.qtdHorasExtras||0})</div><div class="billing-amount-value">${U.fmt(c.valorHorasExtras)}</div></div>
            ` : `
              <div class="billing-amount"><div class="billing-amount-label">Total Atendimentos</div><div class="billing-amount-value">${U.fmt(c.totalAtendimentos)}</div></div>
              <div class="billing-amount"><div class="billing-amount-label">Repasse Clínica</div><div class="billing-amount-value">${U.fmt(c.totalRepasse)}</div></div>
              <div class="billing-amount"><div class="billing-amount-label">&nbsp;</div><div class="billing-amount-value">&nbsp;</div></div>
            `}
          </div>
          <div class="billing-footer">
            <div style="font-size:18px;font-weight:800;color:var(--primary)">Total: ${U.fmt(c.totalPagar)}</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${['sublocacao','turno'].includes(p.regime)?`<button class="btn btn-sm btn-secondary" onclick='editHorasExtras("${p.id}",${y},${m})'>⏰ H.Extra: ${c.qtdHorasExtras||0}h</button>`:''}
              ${!c.boletoEmitido?`<button class="btn btn-sm btn-outline" onclick='emitirBoleto("${p.id}",${y},${m})'>📄 Emitir Boleto</button>`:''}
              ${c.boletoEmitido&&!c.boletoPago?`<button class="btn btn-sm btn-success" onclick='marcarPago("${p.id}",${y},${m})'>✅ Marcar Pago</button>`:''}
              ${c.boletoPago?`<span style="font-size:12px;color:var(--text-muted)">Pago em ${U.date(c.boletoPago)}</span>`:''}
              <button class="btn btn-sm btn-secondary" onclick='editCobr("${p.id}",${y},${m})'>✏️</button>
            </div>
          </div>
        </div>`).join('')}
      </div>`;
  }

  document.getElementById('content').innerHTML = `
    <div class="page-header"><h2>Cobrança Mensal</h2></div>
    <div class="filters-bar">
      <div class="month-nav">
        <button onclick="cobrNavMes(-1)">‹</button>
        <div class="month-label" id="cobr-month-label"></div>
        <button onclick="cobrNavMes(1)">›</button>
      </div>
    </div>
    <div id="cobr-list"></div>`;

  window.cobrNavMes = (d) => { m+=d; if(m>12){m=1;y++;}if(m<1){m=12;y--;} document.getElementById('cobr-month-label').textContent=`${MESES[m-1]} ${y}`; draw(); };
  document.getElementById('cobr-month-label').textContent = `${MESES[m-1]} ${y}`;

  window.editHorasExtras = (profId, ano, mes) => {
    const p = DB.getOne('profissionais', profId);
    const existing = DB.get('cobrancas').find(c=>c.profissionalId===profId&&c.ano===ano&&c.mes===mes)||{};
    Modal.open(`⏰ Horas Extras — ${p?.nome}`, `
      <div class="form-group"><label>Quantidade de Horas Extras</label>
        <input id="he-qtd" type="number" step="1" min="0" value="${existing.qtdHorasExtras||0}">
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:8px">Valor por hora: ${U.fmt(p?.valorHoraExtra||50)}</div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-primary" onclick="saveHorasExtras('${profId}',${ano},${mes})">Salvar</button>`, 'sm');
  };
  window.saveHorasExtras = (profId, ano, mes) => {
    const qtd = parseInt(document.getElementById('he-qtd').value)||0;
    const list = DB.get('cobrancas');
    const idx = list.findIndex(c=>c.profissionalId===profId&&c.ano===ano&&c.mes===mes);
    const p = DB.getOne('profissionais', profId);
    const he = { id:idx>=0?list[idx].id:U.id(), profissionalId:profId, ano, mes, qtdHorasExtras:qtd, valorHorasExtras:qtd*(p?.valorHoraExtra||50), ...(idx>=0?list[idx]:{}) };
    if (idx>=0) list[idx]=he; else list.push(he);
    DB.set('cobrancas', list);
    Modal.close(); toast('Horas extras salvas!','success'); draw();
  };
  window.emitirBoleto = (profId, ano, mes) => {
    saveCobrancaField(profId, ano, mes, { boletoEmitido: U.isoToday() });
    toast('Boleto marcado como emitido!','success'); draw();
  };
  window.marcarPago = (profId, ano, mes) => {
    Modal.open('Marcar Pagamento', `
      <div class="form-group"><label>Data do Pagamento</label><input id="mp-data" type="date" value="${U.isoToday()}"></div>
      <div class="form-group"><label>Banco / Forma</label><input id="mp-banco" placeholder="Ex: Pix Nubank, Boleto BB..."></div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button>
     <button class="btn btn-success" onclick="confirmPago('${profId}',${ano},${mes})">✅ Confirmar</button>`, 'sm');
  };
  window.confirmPago = (profId, ano, mes) => {
    const dt = document.getElementById('mp-data').value;
    const banco = document.getElementById('mp-banco').value;
    saveCobrancaField(profId, ano, mes, { boletoPago:dt, banco });
    Modal.close(); toast('Pagamento registrado!','success'); draw();
  };
  window.editCobr = (profId, ano, mes) => {
    const existing = DB.get('cobrancas').find(c=>c.profissionalId===profId&&c.ano===ano&&c.mes===mes)||{};
    Modal.open('Editar Cobrança', `
      <div class="form-grid">
        <div class="form-group"><label>Boleto Emitido (data)</label><input id="ec-emitido" type="date" value="${existing.boletoEmitido||''}"></div>
        <div class="form-group"><label>Boleto Pago (data)</label><input id="ec-pago" type="date" value="${existing.boletoPago||''}"></div>
        <div class="form-group"><label>Banco / Forma de Pagamento</label><input id="ec-banco" value="${existing.banco||''}"></div>
        <div class="form-group"><label>Observações</label><input id="ec-obs" value="${existing.obs||''}"></div>
      </div>`,
    `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button><button class="btn btn-primary" onclick="saveEditCobr('${profId}',${ano},${mes})">Salvar</button>`);
  };
  window.saveEditCobr = (profId, ano, mes) => {
    saveCobrancaField(profId, ano, mes, {
      boletoEmitido: document.getElementById('ec-emitido').value||null,
      boletoPago: document.getElementById('ec-pago').value||null,
      banco: document.getElementById('ec-banco').value,
      obs: document.getElementById('ec-obs').value
    });
    Modal.close(); toast('Cobrança atualizada!','success'); draw();
  };

  function saveCobrancaField(profId, ano, mes, fields) {
    const list = DB.get('cobrancas');
    const idx = list.findIndex(c=>c.profissionalId===profId&&c.ano===ano&&c.mes===mes);
    const base = idx>=0 ? list[idx] : { id:U.id(), profissionalId:profId, ano, mes };
    const updated = { ...base, ...fields };
    if (idx>=0) list[idx]=updated; else list.push(updated);
    DB.set('cobrancas', list);
  }
  draw();
}

/* ===== DESPESAS ===== */
function renderDespesas() {
  const now = new Date();
  let y = now.getFullYear(), m = now.getMonth()+1;
  let filterCat = '';

  function draw() {
    const list = DB.get('despesas').filter(d => {
      const dt = new Date(d.data);
      return dt.getFullYear()===y && dt.getMonth()+1===m && (!filterCat || d.categoria===filterCat);
    }).sort((a,b)=>b.data.localeCompare(a.data));
    const total = list.reduce((s,d)=>s+(d.valor||0),0);

    // Group by category
    const groups = {};
    list.forEach(d => { if(!groups[d.categoria]) groups[d.categoria]=[]; groups[d.categoria].push(d); });

    document.getElementById('desp-list').innerHTML = `
      <div class="stat-row">
        <div class="stat-chip">Total de despesas: <strong style="color:var(--danger)">${U.fmt(total)}</strong></div>
        <div class="stat-chip">Registros: <strong>${list.length}</strong></div>
      </div>
      ${list.length ? `<div class="table-wrap"><table>
        <thead><tr><th>Data</th><th>Categoria</th><th>Descrição</th><th style="text-align:right">Valor</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>${list.map(d=>`
          <tr>
            <td>${U.date(d.data)}</td>
            <td><span class="badge badge-gray" style="font-size:11px">${U.escHtml(CATS_DESPESA[d.categoria]||d.categoria)}</span></td>
            <td>${U.escHtml(d.descricao||d.subcategoria)}</td>
            <td style="text-align:right;font-weight:600;color:var(--danger)">${U.fmt(d.valor)}</td>
            <td><div class="td-actions"><button class="action-btn edit" onclick='editDesp("${d.id}")'>✏️</button><button class="action-btn delete" onclick='delDesp("${d.id}")'>🗑</button></div></td>
          </tr>`).join('')}
          <tr style="background:var(--surface-2)"><td colspan="3" style="font-weight:700;padding:10px 14px">TOTAL</td><td style="text-align:right;font-weight:800;color:var(--danger);padding:10px 14px">${U.fmt(total)}</td><td></td></tr>
        </tbody></table></div>` : '<div class="empty-state"><div class="empty-icon">📉</div><h3>Nenhuma despesa registrada</h3></div>'}`;
  }

  const catGroups = ['2','3','4'];
  document.getElementById('content').innerHTML = `
    <div class="page-header"><h2>Despesas</h2>
      <div class="page-actions">
        <button class="btn btn-secondary" onclick="gerenciarCategorias()">⚙️ Categorias</button>
        <button class="btn btn-primary" onclick="editDesp()">＋ Nova Despesa</button>
      </div>
    </div>
    <div class="filters-bar">
      <div class="month-nav">
        <button onclick="despNavMes(-1)">‹</button>
        <div class="month-label" id="desp-month-label"></div>
        <button onclick="despNavMes(1)">›</button>
      </div>
      <select class="filter-select" id="desp-cat-filter">
        <option value="">Todas as categorias</option>
        <option value="2">Despesas com Pessoal</option>
        <option value="3">Despesas Fixas</option>
        <option value="4">Despesas Variáveis</option>
      </select>
    </div>
    <div id="desp-list"></div>`;

  window.despNavMes = (d) => { m+=d; if(m>12){m=1;y++;}if(m<1){m=12;y--;} document.getElementById('desp-month-label').textContent=`${MESES[m-1]} ${y}`; draw(); };
  document.getElementById('desp-cat-filter').onchange = e => { filterCat=e.target.value; draw(); };
  document.getElementById('desp-month-label').textContent = `${MESES[m-1]} ${y}`;
  draw();
}

window.editDesp = (id) => {
  const d = id ? DB.getOne('despesas', id) : null;
  const v = (f,def='') => d?(d[f]??def):def;
  const subcatOptions = (selCat) => getAllSubcats().filter(s=>s.g===selCat).map(s=>`<option value="${s.k}" ${v('subcategoria')===s.k?'selected':''}>${s.l}</option>`).join('');
  Modal.open(d?'Editar Despesa':'Nova Despesa', `
    <form id="desp-form"><div class="form-grid">
      <div class="form-group"><label>Data *</label><input id="fd-data" type="date" value="${v('data',U.isoToday())}" required></div>
      <div class="form-group"><label>Valor (R$) *</label><input id="fd-valor" type="number" step="0.01" value="${v('valor',0)}" required></div>
      <div class="form-group"><label>Grupo *</label>
        <select id="fd-cat" required onchange="window._dCatChange()">
          <option value="">Selecione...</option>
          <option value="2" ${v('categoria')==='2'?'selected':''}>Despesas com Pessoal</option>
          <option value="3" ${v('categoria')==='3'?'selected':''}>Despesas Fixas</option>
          <option value="4" ${v('categoria')==='4'?'selected':''}>Despesas Variáveis</option>
        </select>
      </div>
      <div class="form-group"><label>Subcategoria *</label>
        <select id="fd-subcat" required>${v('categoria') ? subcatOptions(v('categoria')) : ''}</select>
      </div>
      <div class="form-group form-full"><label>Descrição</label><input id="fd-desc" value="${U.escHtml(v('descricao'))}" placeholder="Detalhes..."></div>
      <div class="form-group"><label>Forma de Pagamento</label>
        <select id="fd-forma">
          ${['Pix','Boleto','Cartão de Débito','Cartão de Crédito','Dinheiro','Transferência'].map(f=>`<option ${v('formaPagamento')===f?'selected':''}>${f}</option>`).join('')}
        </select>
      </div>
      <div class="form-group form-full"><label>Observações</label><textarea id="fd-obs">${U.escHtml(v('obs'))}</textarea></div>
    </div></form>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button><button class="btn btn-primary" onclick="saveDesp('${id||''}')">💾 Salvar</button>`);

  window._dCatChange = window.dCatChange = () => {
    const cat = document.getElementById('fd-cat').value;
    document.getElementById('fd-subcat').innerHTML = cat ? subcatOptions(cat) : '';
  };
};

window.saveDesp = (id) => {
  const g = i => document.getElementById(i);
  const data = g('fd-data').value, valor = U.parseNum(g('fd-valor').value), cat = g('fd-cat').value;
  if (!data || !valor || !cat) { toast('Preencha todos os campos obrigatórios','error'); return; }
  const rec = { id:id||U.id(), data, valor, categoria:cat, subcategoria:g('fd-subcat').value,
    descricao:g('fd-desc').value.trim(), formaPagamento:g('fd-forma').value, obs:g('fd-obs').value.trim(),
    createdAt: id?(DB.getOne('despesas',id)||{}).createdAt:new Date().toISOString() };
  DB.save('despesas', rec);
  Modal.close();
  toast(id?'Despesa atualizada!':'Despesa registrada!','success');
  renderDespesas();
};

window.delDesp = (id) => Modal.confirm('Excluir esta despesa?', () => { DB.remove('despesas',id); toast('Despesa excluída','warning'); renderDespesas(); });

window.gerenciarCategorias = () => {
  function drawCatList() {
    const custom = DB.get('custom_subcats');
    const grpLabel = { '2':'Despesas com Pessoal', '3':'Despesas Fixas', '4':'Despesas Variáveis' };
    document.getElementById('cat-list').innerHTML = custom.length ? `
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead><tr>
          <th style="padding:8px;background:var(--surface-2);border-bottom:2px solid var(--border)">Grupo</th>
          <th style="padding:8px;background:var(--surface-2);border-bottom:2px solid var(--border)">Nome da Categoria</th>
          <th style="padding:8px;background:var(--surface-2);border-bottom:2px solid var(--border)">Código</th>
          <th></th>
        </tr></thead>
        <tbody>${custom.map(c=>`<tr>
          <td style="padding:8px;border-bottom:1px solid var(--border)">${grpLabel[c.g]||c.g}</td>
          <td style="padding:8px;border-bottom:1px solid var(--border);font-weight:600">${U.escHtml(c.l)}</td>
          <td style="padding:8px;border-bottom:1px solid var(--border)"><span class="badge badge-gray">${c.k}</span></td>
          <td style="padding:8px;border-bottom:1px solid var(--border)"><button class="action-btn delete" onclick="delCat('${c.id}')">🗑</button></td>
        </tr>`).join('')}
        </tbody></table>` : '<p style="color:var(--text-muted);font-size:13px;padding:12px 0">Nenhuma categoria customizada ainda.</p>';
  }

  Modal.open('⚙️ Gerenciar Categorias de Despesas', `
    <p style="color:var(--text-muted);font-size:12.5px;margin-bottom:16px">Adicione subcategorias além das pré-definidas. Elas aparecerão automaticamente no formulário de despesas e no balancete.</p>
    <div class="form-grid" style="margin-bottom:16px">
      <div class="form-group"><label>Grupo *</label>
        <select id="nc-grupo">
          <option value="2">Despesas com Pessoal</option>
          <option value="3">Despesas Fixas</option>
          <option value="4">Despesas Variáveis</option>
        </select>
      </div>
      <div class="form-group"><label>Nome da Categoria *</label><input id="nc-nome" placeholder="Ex: Honorários Contador..."></div>
    </div>
    <button class="btn btn-primary btn-sm" onclick="addCat()">＋ Adicionar</button>
    <div class="section-title" style="margin-top:16px">Categorias customizadas</div>
    <div id="cat-list"></div>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Fechar</button>`, 'lg');

  drawCatList();

  window.addCat = () => {
    const grupo = document.getElementById('nc-grupo').value;
    const nome = document.getElementById('nc-nome').value.trim();
    if (!nome) { toast('Nome é obrigatório','error'); return; }
    const custom = DB.get('custom_subcats');
    const groupCodes = getAllSubcats().filter(s=>s.g===grupo).map(s=>s.k);
    const maxN = groupCodes.reduce((mx,k) => {
      const num = parseFloat(k.split('.').slice(0,2).join('.'));
      return isNaN(num) ? mx : Math.max(mx, num);
    }, parseFloat(grupo)+0.9);
    const newKey = (Math.round((maxN + 0.1) * 10) / 10).toFixed(1).replace(/\.0$/,'');
    custom.push({ id:U.id(), k:newKey+'c', l:nome, g:grupo });
    DB.set('custom_subcats', custom);
    document.getElementById('nc-nome').value = '';
    toast('Categoria adicionada!','success');
    drawCatList();
  };

  window.delCat = (id) => {
    DB.remove('custom_subcats', id);
    toast('Categoria removida','warning');
    drawCatList();
  };
};

window.gerenciarCategoriasReceita = () => {
  function drawRecCatList() {
    const custom = DB.get('custom_rec_cats');
    document.getElementById('rcat-list').innerHTML = custom.length ? `
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead><tr>
          <th style="padding:8px;background:var(--surface-2);border-bottom:2px solid var(--border)">Nome da Categoria</th>
          <th style="padding:8px;background:var(--surface-2);border-bottom:2px solid var(--border)">Código</th>
          <th></th>
        </tr></thead>
        <tbody>${custom.map(c=>`<tr>
          <td style="padding:8px;border-bottom:1px solid var(--border);font-weight:600">${U.escHtml(c.l)}</td>
          <td style="padding:8px;border-bottom:1px solid var(--border)"><span class="badge badge-gray">${c.k}</span></td>
          <td style="padding:8px;border-bottom:1px solid var(--border)"><button class="action-btn delete" onclick="delRecCat('${c.id}')">🗑</button></td>
        </tr>`).join('')}
        </tbody></table>` : '<p style="color:var(--text-muted);font-size:13px;padding:12px 0">Nenhuma categoria customizada ainda.</p>';
  }

  Modal.open('⚙️ Gerenciar Categorias de Receitas', `
    <p style="color:var(--text-muted);font-size:12.5px;margin-bottom:16px">Adicione categorias além das pré-definidas. Elas aparecerão no formulário de receitas e no balancete.</p>
    <div class="form-grid" style="margin-bottom:16px">
      <div class="form-group form-full"><label>Nome da Categoria *</label><input id="nrc-nome" placeholder="Ex: Venda de Produtos..."></div>
    </div>
    <button class="btn btn-primary btn-sm" onclick="addRecCat()">＋ Adicionar</button>
    <div class="section-title" style="margin-top:16px">Categorias customizadas</div>
    <div id="rcat-list"></div>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Fechar</button>`, 'lg');

  drawRecCatList();

  window.addRecCat = () => {
    const nome = document.getElementById('nrc-nome').value.trim();
    if (!nome) { toast('Nome é obrigatório','error'); return; }
    const custom = DB.get('custom_rec_cats');
    const allKeys = getAllRecCats().map(c => c.k);
    let n = custom.length + 1;
    while (allKeys.includes('rec_' + String(n).padStart(3,'0'))) n++;
    custom.push({ id:U.id(), k:'rec_'+String(n).padStart(3,'0'), l:nome });
    DB.set('custom_rec_cats', custom);
    document.getElementById('nrc-nome').value = '';
    toast('Categoria adicionada!','success');
    drawRecCatList();
  };

  window.delRecCat = (id) => {
    DB.remove('custom_rec_cats', id);
    toast('Categoria removida','warning');
    drawRecCatList();
  };
};

/* ===== RECEITAS ===== */
function renderReceitas() {
  const now = new Date();
  let y = now.getFullYear(), m = now.getMonth()+1;

  function draw() {
    const list = getReceitasMonth(y, m).sort((a,b)=>b.data.localeCompare(a.data));
    const total = list.reduce((s,r)=>s+(r.valor||0),0);
    document.getElementById('rec-list').innerHTML = `
      <div class="stat-row">
        <div class="stat-chip">Total outras receitas: <strong style="color:var(--success)">${U.fmt(total)}</strong></div>
        <div class="stat-chip">Registros: <strong>${list.length}</strong></div>
      </div>
      ${list.length ? `<div class="table-wrap"><table>
        <thead><tr><th>Data</th><th>Categoria</th><th>Descrição</th><th>Forma Pag.</th><th style="text-align:right">Valor</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>${list.map(r=>`
          <tr>
            <td>${U.date(r.data)}</td>
            <td><span class="badge badge-success" style="font-size:11px">${U.escHtml(getAllRecCats().find(c=>c.k===r.categoria)?.l||r.categoria)}</span></td>
            <td>${U.escHtml(r.descricao||'—')}</td>
            <td>${U.escHtml(r.formaPagamento||'—')}</td>
            <td style="text-align:right;font-weight:600;color:var(--success)">${U.fmt(r.valor)}</td>
            <td><div class="td-actions"><button class="action-btn edit" onclick='editReceita("${r.id}")'>✏️</button><button class="action-btn delete" onclick='delReceita("${r.id}")'>🗑</button></div></td>
          </tr>`).join('')}
          <tr style="background:var(--surface-2)"><td colspan="4" style="font-weight:700;padding:10px 14px">TOTAL</td><td style="text-align:right;font-weight:800;color:var(--success);padding:10px 14px">${U.fmt(total)}</td><td></td></tr>
        </tbody></table></div>` : '<div class="empty-state"><div class="empty-icon">💵</div><h3>Nenhuma receita registrada neste mês</h3><p>Registre entradas como aluguel de auditório, garagens, saldo anterior etc.</p></div>'}`;
  }

  document.getElementById('content').innerHTML = `
    <div class="page-header"><h2>Receitas</h2>
      <div class="page-actions">
        <button class="btn btn-secondary" onclick="gerenciarCategoriasReceita()">⚙️ Categorias</button>
        <button class="btn btn-primary" onclick="editReceita()">＋ Nova Receita</button>
      </div>
    </div>
    <div class="filters-bar">
      <div class="month-nav">
        <button onclick="recNavMes(-1)">‹</button>
        <div class="month-label" id="rec-month-label"></div>
        <button onclick="recNavMes(1)">›</button>
      </div>
    </div>
    <div id="rec-list"></div>`;

  window.recNavMes = (d) => { m+=d; if(m>12){m=1;y++;}if(m<1){m=12;y--;} document.getElementById('rec-month-label').textContent=`${MESES[m-1]} ${y}`; draw(); };
  document.getElementById('rec-month-label').textContent = `${MESES[m-1]} ${y}`;
  draw();
}

window.editReceita = (id) => {
  const r = id ? DB.getOne('receitas', id) : null;
  const v = (f,d='') => r?(r[f]??d):d;
  Modal.open(r?'Editar Receita':'Nova Receita', `
    <form id="rec-form"><div class="form-grid">
      <div class="form-group"><label>Data *</label><input id="fr-data" type="date" value="${v('data',U.isoToday())}" required></div>
      <div class="form-group"><label>Valor (R$) *</label><input id="fr-valor" type="number" step="0.01" value="${v('valor',0)}" required></div>
      <div class="form-group form-full"><label>Categoria *</label>
        <select id="fr-cat" required>
          <option value="">Selecione...</option>
          ${getAllRecCats().map(c=>`<option value="${c.k}" ${v('categoria')===c.k?'selected':''}>${c.l}</option>`).join('')}
        </select>
      </div>
      <div class="form-group form-full"><label>Descrição</label><input id="fr-desc" value="${U.escHtml(v('descricao'))}" placeholder="Detalhes..."></div>
      <div class="form-group"><label>Forma de Pagamento</label>
        <select id="fr-forma">
          ${['Pix','Boleto','Cartão de Débito','Cartão de Crédito','Dinheiro','Transferência'].map(f=>`<option ${v('formaPagamento')===f?'selected':''}>${f}</option>`).join('')}
        </select>
      </div>
      <div class="form-group form-full"><label>Observações</label><textarea id="fr-obs">${U.escHtml(v('obs'))}</textarea></div>
    </div></form>`,
  `<button class="btn btn-secondary" onclick="Modal.close()">Cancelar</button><button class="btn btn-primary" onclick="saveReceita('${id||''}')">💾 Salvar</button>`);
};

window.saveReceita = (id) => {
  const g = i => document.getElementById(i);
  const data = g('fr-data').value, valor = U.parseNum(g('fr-valor').value), cat = g('fr-cat').value;
  if (!data || !valor || !cat) { toast('Preencha todos os campos obrigatórios','error'); return; }
  const rec = { id:id||U.id(), data, valor, categoria:cat, descricao:g('fr-desc').value.trim(),
    formaPagamento:g('fr-forma').value, obs:g('fr-obs').value.trim(),
    createdAt: id?(DB.getOne('receitas',id)||{}).createdAt:new Date().toISOString() };
  DB.save('receitas', rec);
  Modal.close();
  toast(id?'Receita atualizada!':'Receita registrada!','success');
  renderReceitas();
};

window.delReceita = (id) => Modal.confirm('Excluir esta receita?', () => { DB.remove('receitas',id); toast('Receita excluída','warning'); renderReceitas(); });

/* ===== BALANCETE ===== */
function renderBalancete() {
  const now = new Date();
  let viewYear = now.getFullYear();
  let viewType = 'mensal';
  let viewMonth = now.getMonth()+1;

  function calcMonth(yr, mo) {
    const atends = DB.get('atendimentos').filter(a=>{ const d=new Date(a.data); return d.getFullYear()===yr&&d.getMonth()+1===mo; });
    const desps = DB.get('despesas').filter(d=>{ const dt=new Date(d.data); return dt.getFullYear()===yr&&dt.getMonth()+1===mo; });

    let rSubl=0, rPorcentagem=0, rCliente=0, rHora=0, rOutras=0;
    rSubl = getSublocacaoRevenue(yr, mo);
    atends.forEach(a => {
      const p = DB.getOne('profissionais', a.profissionalId);
      if (!p) return;
      const rep = U.calcRepasse(a);
      if (p.regime==='porcentagem') rPorcentagem += rep;
      else if (p.regime==='cliente') rCliente += rep;
      else if (p.regime==='hora') rHora += rep;
    });
    rOutras = getReceitasMonth(yr, mo).reduce((s,r)=>s+(r.valor||0),0);
    const totalReceita = rSubl + rPorcentagem + rCliente + rHora + rOutras;

    const dPessoal = desps.filter(d=>d.categoria==='2').reduce((s,d)=>s+(d.valor||0),0);
    const dFixas = desps.filter(d=>d.categoria==='3').reduce((s,d)=>s+(d.valor||0),0);
    const dVariaveis = desps.filter(d=>d.categoria==='4').reduce((s,d)=>s+(d.valor||0),0);
    const totalDespesa = dPessoal + dFixas + dVariaveis;
    return { rSubl, rPorcentagem, rCliente, rHora, rOutras, totalReceita, dPessoal, dFixas, dVariaveis, totalDespesa, resultado:totalReceita-totalDespesa };
  }

  function drawMensal() {
    const c = calcMonth(viewYear, viewMonth);
    const recExtras = getReceitasMonth(viewYear, viewMonth);
    const recBycat = {};
    getAllRecCats().forEach(cat => { recBycat[cat.k] = recExtras.filter(r=>r.categoria===cat.k).reduce((s,r)=>s+(r.valor||0),0); });
    const customRecCats = DB.get('custom_rec_cats');
    const rows = [
      ['1 — RECEITAS', null, true],
      ['1.1 Saldo Anterior — Banco', recBycat['saldo_banco']||0],
      ['1.2 Saldo Anterior — Caixa', recBycat['saldo_caixa']||0],
      ['1.3 Saldo Anterior — Aplicações', recBycat['saldo_aplic']||0],
      ['1.4 Aluguel de Salas (Sublocação)', c.rSubl],
      ['1.5 Aluguel por Porcentagem', c.rPorcentagem],
      ['1.6 Repasse por Cliente (Fixo)', c.rCliente],
      ['1.7 Repasse por Hora', c.rHora],
      ['1.8 Aluguel de Auditório', recBycat['aluguel_auditorio']||0],
      ['1.9 Garagens', recBycat['garagem']||0],
      ['1.10 Outros', recBycat['outros_rec']||0],
      ...customRecCats.map((cat, i) => [`1.${11+i} ${cat.l}`, recBycat[cat.k]||0]),
      ['TOTAL RECEITAS', c.totalReceita, true, 'var(--success)'],
      ['', null],
      ['2 — DESPESAS COM PESSOAL', null, true],
      ...getAllSubcats().filter(s=>s.g==='2').map(s=>{
        const v = DB.get('despesas').filter(d=>{ const dt=new Date(d.data); return dt.getFullYear()===viewYear&&dt.getMonth()+1===viewMonth&&d.subcategoria===s.k; }).reduce((sum,d)=>sum+(d.valor||0),0);
        return [s.l, v];
      }),
      ['Subtotal Pessoal', c.dPessoal, false, null, true],
      ['', null],
      ['3 — DESPESAS FIXAS', null, true],
      ...getAllSubcats().filter(s=>s.g==='3').map(s=>{
        const v = DB.get('despesas').filter(d=>{ const dt=new Date(d.data); return dt.getFullYear()===viewYear&&dt.getMonth()+1===viewMonth&&d.subcategoria===s.k; }).reduce((sum,d)=>sum+(d.valor||0),0);
        return [s.l, v];
      }),
      ['Subtotal Fixas', c.dFixas, false, null, true],
      ['', null],
      ['4 — DESPESAS VARIÁVEIS', null, true],
      ...getAllSubcats().filter(s=>s.g==='4').map(s=>{
        const v = DB.get('despesas').filter(d=>{ const dt=new Date(d.data); return dt.getFullYear()===viewYear&&dt.getMonth()+1===viewMonth&&d.subcategoria===s.k; }).reduce((sum,d)=>sum+(d.valor||0),0);
        return [s.l, v];
      }),
      ['Subtotal Variáveis', c.dVariaveis, false, null, true],
      ['', null],
      ['TOTAL DESPESAS', c.totalDespesa, true, 'var(--danger)'],
      ['RESULTADO DO MÊS', c.resultado, true, c.resultado>=0?'var(--success)':'var(--danger)'],
    ];

    document.getElementById('balancete-content').innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3>Balancete — ${MESES[viewMonth-1]} / ${viewYear}</h3>
        <button class="btn btn-secondary btn-sm" onclick="window.print()">🖨️ Imprimir</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Categoria</th><th style="text-align:right">Valor (R$)</th></tr></thead>
        <tbody>${rows.map(([label, valor, bold, color, italic])=>{
          if (!label) return '<tr><td colspan="2" style="height:8px;background:var(--surface-2)"></td></tr>';
          const s = bold ? 'font-weight:700;' : '';
          const c2 = color ? `color:${color};` : '';
          const it = italic ? 'font-style:italic;' : '';
          return `<tr>
            <td style="${s}${it}padding:9px 14px;border-bottom:1px solid var(--border)">${U.escHtml(label)}</td>
            <td style="text-align:right;${s}${c2}${it}padding:9px 14px;border-bottom:1px solid var(--border)">${valor!=null?U.fmt(valor):''}</td>
          </tr>`;
        }).join('')}</tbody>
      </table></div>`;
  }

  function drawAnual() {
    const months = Array.from({length:12},(_,i)=>i+1);
    const data = months.map(mo=>calcMonth(viewYear, mo));
    document.getElementById('balancete-content').innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3>Resumo Anual — ${viewYear}</h3>
        <button class="btn btn-secondary btn-sm" onclick="window.print()">🖨️ Imprimir</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Mês</th><th style="text-align:right">Receitas</th><th style="text-align:right">Despesas</th><th style="text-align:right">Resultado</th></tr></thead>
        <tbody>${months.map((mo,i)=>`
          <tr>
            <td style="font-weight:600;padding:9px 14px;border-bottom:1px solid var(--border)">${MESES[i]}</td>
            <td style="text-align:right;color:var(--success);padding:9px 14px;border-bottom:1px solid var(--border)">${U.fmt(data[i].totalReceita)}</td>
            <td style="text-align:right;color:var(--danger);padding:9px 14px;border-bottom:1px solid var(--border)">${U.fmt(data[i].totalDespesa)}</td>
            <td style="text-align:right;font-weight:700;color:${data[i].resultado>=0?'var(--success)':'var(--danger)'};padding:9px 14px;border-bottom:1px solid var(--border)">${U.fmt(data[i].resultado)}</td>
          </tr>`).join('')}
          <tr style="background:var(--surface-2)">
            <td style="font-weight:800;padding:10px 14px">TOTAL ANUAL</td>
            <td style="text-align:right;font-weight:800;color:var(--success);padding:10px 14px">${U.fmt(data.reduce((s,d)=>s+d.totalReceita,0))}</td>
            <td style="text-align:right;font-weight:800;color:var(--danger);padding:10px 14px">${U.fmt(data.reduce((s,d)=>s+d.totalDespesa,0))}</td>
            <td style="text-align:right;font-weight:800;padding:10px 14px;color:${data.reduce((s,d)=>s+d.resultado,0)>=0?'var(--success)':'var(--danger)'}">${U.fmt(data.reduce((s,d)=>s+d.resultado,0))}</td>
          </tr>
        </tbody>
      </table></div>`;
  }

  function draw() { viewType==='mensal' ? drawMensal() : drawAnual(); }

  document.getElementById('content').innerHTML = `
    <div class="page-header"><h2>Balancete</h2></div>
    <div class="filters-bar" style="align-items:center;justify-content:space-between;flex-wrap:wrap">
      <div style="display:flex;gap:10px;align-items:center">
        <div class="tabs" style="margin:0;width:220px">
          <div class="tab active" id="tab-mensal" onclick="balSetView('mensal')">Mensal</div>
          <div class="tab" id="tab-anual" onclick="balSetView('anual')">Anual</div>
        </div>
        <div class="month-nav" id="bal-month-nav">
          <button onclick="balNavMes(-1)">‹</button>
          <div class="month-label" id="bal-month-label"></div>
          <button onclick="balNavMes(1)">›</button>
        </div>
        <div class="month-nav" id="bal-year-nav" style="display:none">
          <button onclick="balNavAno(-1)">‹</button>
          <div class="month-label" id="bal-year-label"></div>
          <button onclick="balNavAno(1)">›</button>
        </div>
      </div>
    </div>
    <div id="balancete-content" class="card"></div>`;

  window.balSetView = (t) => {
    viewType=t;
    document.getElementById('tab-mensal').classList.toggle('active', t==='mensal');
    document.getElementById('tab-anual').classList.toggle('active', t==='anual');
    document.getElementById('bal-month-nav').style.display = t==='mensal' ? 'flex' : 'none';
    document.getElementById('bal-year-nav').style.display = t==='anual' ? 'flex' : 'none';
    draw();
  };
  window.balNavMes = (d) => { viewMonth+=d; if(viewMonth>12){viewMonth=1;viewYear++;}if(viewMonth<1){viewMonth=12;viewYear--;} document.getElementById('bal-month-label').textContent=`${MESES[viewMonth-1]} ${viewYear}`; draw(); };
  window.balNavAno = (d) => { viewYear+=d; document.getElementById('bal-year-label').textContent=String(viewYear); draw(); };
  document.getElementById('bal-month-label').textContent = `${MESES[viewMonth-1]} ${viewYear}`;
  document.getElementById('bal-year-label').textContent = String(viewYear);
  draw();
}

/* ===== INIT ===== */
function updateThemeBtn(theme) {
  document.getElementById('theme-icon').textContent = theme==='dark' ? '☀️' : '🌙';
  document.getElementById('theme-label').textContent = theme==='dark' ? 'Modo Claro' : 'Modo Escuro';
}

function showLoginOverlay(resolve) {
  const overlay = document.getElementById('login-overlay');
  overlay.style.display = 'flex';
  window.doLogin = async () => {
    const email = document.getElementById('login-email').value.trim();
    const pwd = document.getElementById('login-pwd').value;
    const errEl = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');
    if (!email || !pwd) { errEl.textContent = 'Preencha e-mail e senha.'; return; }
    btn.disabled = true; btn.textContent = 'Entrando…';
    try {
      const cred = await firebase.auth().signInWithEmailAndPassword(email, pwd);
      overlay.style.display = 'none';
      resolve(cred.user);
    } catch(e) {
      const msgs = {
        'auth/wrong-password': 'Senha incorreta.',
        'auth/invalid-credential': 'E-mail ou senha incorretos.',
        'auth/user-not-found': 'Usuário não encontrado.',
        'auth/invalid-email': 'E-mail inválido.',
        'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos.'
      };
      errEl.textContent = msgs[e.code] || 'Erro: ' + e.message;
      btn.disabled = false; btn.textContent = 'Entrar';
    }
  };
  document.getElementById('login-pwd').onkeydown = (e) => { if (e.key === 'Enter') window.doLogin(); };
}

async function init() {
  Modal.init();

  const savedTheme = localStorage.getItem('clinica_theme') || 'light';
  document.documentElement.dataset.theme = savedTheme;
  updateThemeBtn(savedTheme);

  document.getElementById('theme-toggle').onclick = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('clinica_theme', next);
    updateThemeBtn(next);
    if (Router.current === 'dashboard') renderDashboard();
  };

  document.querySelectorAll('.nav-item').forEach(el => {
    el.onclick = () => Router.go(el.dataset.page);
  });

  document.getElementById('menu-toggle').onclick = () => {
    const s = document.getElementById('sidebar');
    s.classList.toggle('mobile-open');
    s.classList.toggle('collapsed');
  };

  const now = new Date();
  document.getElementById('current-date').textContent = now.toLocaleDateString('pt-BR', { weekday:'long', day:'2-digit', month:'long', year:'numeric' });

  // Firebase setup (only if credentials are filled in)
  const configured = FIREBASE_CONFIG.apiKey !== 'PREENCHER';
  if (configured && typeof firebase !== 'undefined') {
    try {
      if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      DB._fs = firebase.firestore();
      DB._useFirebase = true;
      // Wait for auth state (prompts login if not authenticated)
      await new Promise(resolve => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) resolve(user);
          else showLoginOverlay(resolve);
        });
      });
      // Show logout button
      const logoutBtn = document.getElementById('btn-logout');
      logoutBtn.style.display = 'flex';
      logoutBtn.onclick = () => Modal.confirm('Sair do sistema?', () => {
        firebase.auth().signOut().then(() => location.reload());
      });
    } catch(e) {
      console.warn('Firebase indisponível, usando armazenamento local:', e);
      DB._useFirebase = false;
    }
  }

  // Show loading while data is fetched
  const loading = document.getElementById('app-loading');
  const appEl = document.getElementById('app');
  loading.style.display = 'flex';
  appEl.style.visibility = 'hidden';

  await DB.init();

  loading.style.display = 'none';
  appEl.style.visibility = 'visible';

  Router.go('dashboard');
}

document.addEventListener('DOMContentLoaded', init);
