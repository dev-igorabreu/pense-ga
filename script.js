// ---------- PENSE G.A · script.js ----------
// Pequenos comportamentos de interface: header com sombra ao rolar,
// link do menu ativo conforme a seção visível, e ano automático no rodapé.

document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section[id]');
  const yearEl = document.getElementById('ano');

  // Ano atual no rodapé (fica sempre certo, sem precisar editar todo ano)
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Sombra no header quando a página é rolada
  const onScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    // Destaca no menu o link correspondente à seção visível
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // roda uma vez ao carregar
});
