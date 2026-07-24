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

/* ===== SESSION (auditoria: quem está logado) ===== */
const Session = { email: null };
function currentUser() { return Session.email || 'Operador local'; }

/* ===== DATABASE ===== */
const DB_TABLES = ['profissionais','pacientes','atendimentos','despesas','cobrancas','cobrancas_excluidas','receitas','custom_subcats','custom_rec_cats'];

// pacientes e atendimentos vivem em coleções Firestore reais (1 documento por registro),
// compartilhadas com o Prontuário — em vez do padrão antigo de "array dentro de 1 doc"
// usado pelas demais tabelas. Isso permite escrita concorrente das duas aplicações
// sem uma sobrescrever a mudança da outra.
const SHARED_COLLECTIONS = ['pacientes', 'atendimentos'];

const DB = {
  _cache: {},
  _fs: null,
  _useFirebase: false,
  _unsubscribers: [],

  _isShared(t) { return SHARED_COLLECTIONS.includes(t); },

  _write(t) {
    if (this._isShared(t) && this._useFirebase) return; // já gravado por documento em save()/remove()
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
    if (this._isShared(t) && this._useFirebase && this._fs) {
      if (!item.id) item.id = U.id();
      this._fs.collection(t).doc(item.id).set(item)
        .catch(e => console.warn('Firebase write [' + t + ']:', e));
      const list = [...(this._cache[t] || [])];
      const idx = list.findIndex(x => x.id === item.id);
      if (idx >= 0) list[idx] = item; else list.push(item);
      this._cache[t] = list; // atualização otimista; o listener confirma em seguida
      return;
    }
    const list = [...(this._cache[t] || [])];
    const idx = list.findIndex(x => x.id === item.id);
    if (idx >= 0) list[idx] = item; else list.push(item);
    this.set(t, list);
  },
  remove(t, id) {
    if (this._isShared(t) && this._useFirebase && this._fs) {
      this._fs.collection(t).doc(id).delete()
        .catch(e => console.warn('Firebase delete [' + t + ']:', e));
      this._cache[t] = (this._cache[t] || []).filter(x => x.id !== id);
      return;
    }
    this.set(t, (this._cache[t] || []).filter(x => x.id !== id));
  },
  getConfig() { return JSON.parse(localStorage.getItem('clinica_config') || '{}'); },
  setConfig(d) { localStorage.setItem('clinica_config', JSON.stringify(d)); },

  async init() {
    if (this._useFirebase && this._fs) {
      await Promise.all(DB_TABLES.map(async t => {
        try {
          if (this._isShared(t)) {
            const snap = await this._fs.collection(t).get();
            this._cache[t] = snap.docs.map(d => d.data());
          } else {
            const snap = await this._fs.collection('clinica').doc(t).get();
            this._cache[t] = snap.exists ? (snap.data().items || []) : [];
          }
        } catch(e) { this._cache[t] = []; }
      }));
      if (!this._cache['profissionais'].length) {
        this._cache['profissionais'] = INITIAL_PROFISSIONAIS;
        this._write('profissionais');
      }
      this._watchShared();
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
  },

  // Escuta mudanças ao vivo em pacientes/atendimentos (ex: feitas pelo Prontuário)
  // e re-renderiza a página atual pra refletir sem precisar recarregar.
  _watchShared() {
    SHARED_COLLECTIONS.forEach(t => {
      const unsub = this._fs.collection(t).onSnapshot(snap => {
        this._cache[t] = snap.docs.map(d => d.data());
        if (typeof Router !== 'undefined' && Router.current && Router.pages[Router.current]) {
          Router.pages[Router.current].render();
        }
      }, e => console.warn('Listener [' + t + ']:', e));
      this._unsubscribers.push(unsub);
    });
  }
};
