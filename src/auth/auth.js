import { auth } from '../api/firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { Modal } from '../utils/helpers.js';

export const Session = { email: null };
export function currentUser() { return Session.email || 'Operador local'; }

export function showLoginOverlay(resolve) {
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
      const cred = await signInWithEmailAndPassword(auth, email, pwd);
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
  
  document.getElementById('login-pwd').onkeydown = (e) => { 
    if (e.key === 'Enter') window.doLogin(); 
  };
}

export function setupAuth(onReady) {
  onAuthStateChanged(auth, user => {
    if (user) {
      Session.email = user.email;
      setupLogoutBtn();
      onReady(user);
    } else {
      showLoginOverlay((u) => {
        Session.email = u.email;
        setupLogoutBtn();
        onReady(u);
      });
    }
  });
}

function setupLogoutBtn() {
  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) {
    logoutBtn.style.display = 'flex';
    logoutBtn.onclick = () => Modal.confirm('Sair do sistema?', () => {
      signOut(auth).then(() => location.reload());
    });
  }
}
