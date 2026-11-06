// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('menu');
const setMenu = open => {
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('open', open);
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Animações de entrada
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Lightbox da galeria (<dialog> já cuida do foco e do Esc)
const dlg = document.getElementById('lightbox');
const big = dlg.querySelector('img');
const cap = dlg.querySelector('figcaption');
document.querySelectorAll('.gallery a').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  const img = a.querySelector('img');
  big.src = a.href; big.alt = img.alt; cap.textContent = img.alt;
  dlg.showModal();
}));
dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('.lb-close')) dlg.close(); });

document.getElementById('ano').textContent = new Date().getFullYear();
