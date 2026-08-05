import { DB } from '../api/db.js';

export const REGIMES = {
  sublocacao: 'Sublocação Mensal',
  turno: 'Aluguel por Turno',
  hora: 'Aluguel por Hora',
  porcentagem: 'Porcentagem por Paciente',
  cliente: 'Valor por Cliente'
};
export const TURNOS_LIST = ['Manhã','Tarde','Noite'];
export const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
export const MESES_SHORT = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
export const CATS_DESPESA = {
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
export const SUBCATS = [
  { k:'2.1',l:'Salários mensal',g:'2' }, { k:'2.2',l:'13º salário',g:'2' }, { k:'2.3',l:'FGTS',g:'2' },
  { k:'2.4',l:'INSS',g:'2' }, { k:'2.5',l:'Contabilidade',g:'2' }, { k:'2.6',l:'Faxineiro',g:'2' }, { k:'2.7',l:'Outros (Pessoal)',g:'2' },
  { k:'3.1.1',l:'Condomínio Consultório',g:'3' }, { k:'3.1.2',l:'Condomínio Garagens',g:'3' }, { k:'3.2',l:'Aluguel',g:'3' },
  { k:'3.3',l:'Energia',g:'3' }, { k:'3.4',l:'Telefones Celulares',g:'3' }, { k:'3.5',l:'Internet',g:'3' },
  { k:'3.6',l:'IPTU',g:'3' }, { k:'3.7',l:'Seguro do Imóvel',g:'3' }, { k:'3.8',l:'Outros (Fixas)',g:'3' },
  { k:'4.1',l:'Material de Limpeza',g:'4' }, { k:'4.2',l:'Material de Escritório',g:'4' }, { k:'4.3',l:'Material Elétrico',g:'4' },
  { k:'4.4',l:'Lanches e Buffet',g:'4' }, { k:'4.5',l:'Manutenção (Mão de Obra)',g:'4' }, { k:'4.6',l:'Manutenção (Material)',g:'4' },
  { k:'4.7',l:'Descartáveis',g:'4' }, { k:'4.8',l:'Reformas',g:'4' }, { k:'4.9',l:'Propaganda e Marketing',g:'4' }, { k:'4.10',l:'Outros (Variáveis)',g:'4' }
];

// Sem o Mini Auditório: reserva avulsa por dia/hora, seção própria do Dashboard.
export const SALAS = ['Sala 1','Sala 2','Sala 3 (Infantil)','Sala 4','Sala 5'];
export const DIAS_SEMANA_WORK = ['Seg','Ter','Qua','Qui','Sex','Sáb'];
export const TURNOS_NAMES = ['Manhã','Tarde','Noite'];
export const CATS_RECEITA = [
  { k:'saldo_banco', l:'Saldo Anterior — Banco' },
  { k:'saldo_caixa', l:'Saldo Anterior — Caixa' },
  { k:'saldo_aplic', l:'Saldo Anterior — Aplicações Financeiras' },
  { k:'aluguel_auditorio', l:'Aluguel de Auditório' },
  { k:'garagem', l:'Garagens' },
  { k:'outros_rec', l:'Outros' }
];

export const U = {
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
  parseISODate: (iso) => {
    if (!iso) return null;
    const [y,m,d] = iso.split('-').map(Number);
    if (!y || !m) return null;
    return new Date(y, m-1, d||1);
  },
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

export function toast(msg, type='info') {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  const icons = { success:'<span class="msi">check_circle</span>', error:'<span class="msi">error</span>', warning:'<span class="msi">warning</span>', info:'<span class="msi">info</span>' };
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${icons[type]||'<span class="msi">info</span>'}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

export const Modal = {
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

export function getAllSubcats() {
  return [...SUBCATS, ...DB.get('custom_subcats')];
}
export function getAllRecCats() {
  return [...CATS_RECEITA, ...DB.get('custom_rec_cats')];
}
