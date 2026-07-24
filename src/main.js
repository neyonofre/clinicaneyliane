import { DB } from './api/db.js';
import { setupAuth } from './auth/auth.js';
import { Router } from './router/index.js';
import { U, Modal, toast, getAllSubcats, getAllRecCats, REGIMES, TURNOS_LIST, MESES, MESES_SHORT, CATS_DESPESA, SUBCATS, SALAS, DIAS_SEMANA_WORK, TURNOS_NAMES, CATS_RECEITA } from './utils/helpers.js';
import './api/firebase.js';

// Expose new modules to window so legacy code can use them
window.DB = DB;
window.Router = Router;
window.U = U;
window.Modal = Modal;
window.toast = toast;
window.getAllSubcats = getAllSubcats;
window.getAllRecCats = getAllRecCats;
window.REGIMES = REGIMES;
window.TURNOS_LIST = TURNOS_LIST;
window.MESES = MESES;
window.MESES_SHORT = MESES_SHORT;
window.CATS_DESPESA = CATS_DESPESA;
window.SUBCATS = SUBCATS;
window.SALAS = SALAS;
window.DIAS_SEMANA_WORK = DIAS_SEMANA_WORK;
window.TURNOS_NAMES = TURNOS_NAMES;
window.CATS_RECEITA = CATS_RECEITA;
window.Session = { email: null };

// Import legacy UI renderers
import './legacy.js';

document.addEventListener('DOMContentLoaded', () => {
  Modal.init();
  
  const savedTheme = localStorage.getItem('clinica_theme') || 'light';
  document.documentElement.dataset.theme = savedTheme;
  document.getElementById('theme-icon').textContent = savedTheme==='dark' ? 'light_mode' : 'dark_mode';
  document.getElementById('theme-label').textContent = savedTheme==='dark' ? 'Modo Claro' : 'Modo Escuro';

  document.getElementById('theme-toggle').onclick = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('clinica_theme', next);
    document.getElementById('theme-icon').textContent = next==='dark' ? 'light_mode' : 'dark_mode';
    document.getElementById('theme-label').textContent = next==='dark' ? 'Modo Claro' : 'Modo Escuro';
    if (Router.current === 'dashboard' && window.renderDashboard) window.renderDashboard();
  };

  document.getElementById('menu-toggle').onclick = () => {
    const s = document.getElementById('sidebar');
    s.classList.toggle('mobile-open');
    s.classList.toggle('collapsed');
  };

  const now = new Date();
  document.getElementById('current-date').textContent = now.toLocaleDateString('pt-BR', { weekday:'long', day:'2-digit', month:'long', year:'numeric' });

  Router.init({
    dashboard: { title:'Dashboard', render: () => window.renderDashboard && window.renderDashboard() },
    profissionais: { title:'Profissionais', render: () => window.renderProfissionais && window.renderProfissionais() },
    pacientes: { title:'Pacientes', render: () => window.renderPacientes && window.renderPacientes() },
    atendimentos: { title:'Atendimentos', render: () => window.renderAtendimentos && window.renderAtendimentos() },
    receitas: { title:'Receitas', render: () => window.renderReceitas && window.renderReceitas() },
    cobranca: { title:'Cobrança Mensal', render: () => window.renderCobranca && window.renderCobranca() },
    despesas: { title:'Despesas', render: () => window.renderDespesas && window.renderDespesas() },
    balancete: { title:'Balancete', render: () => window.renderBalancete && window.renderBalancete() }
  });

  // Start Auth Flow
  const loading = document.getElementById('app-loading');
  const appEl = document.getElementById('app');
  loading.style.display = 'flex';
  appEl.style.visibility = 'hidden';

  setupAuth((user) => {
    if (user) {
      // User is logged in, init DB and render
      DB.init(() => {
        Router.go(Router.current);
      }).then(() => {
        loading.style.display = 'none';
        appEl.style.visibility = 'visible';
        Router.go('dashboard');
      });
    }
  });
});

// Expose migration tool
window.migrateData = () => DB.runMigration();
