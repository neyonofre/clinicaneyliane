export const Router = {
  current: 'dashboard',
  pages: {},
  init(pagesConfig) {
    this.pages = pagesConfig;
    document.querySelectorAll('.nav-item').forEach(el => {
      el.onclick = () => this.go(el.dataset.page);
    });
  },
  go(page) {
    if (!this.pages[page]) return;
    this.current = page;
    document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page === page));
    document.getElementById('topbar-title').textContent = this.pages[page].title;
    this.pages[page].render();
  }
};
