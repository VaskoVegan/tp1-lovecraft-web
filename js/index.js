document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      menuButton.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
      menu.classList.toggle('is-open', !expanded);
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      menu.classList.remove('is-open');
    }));
  }

  const button = document.querySelector('#btn-investigate');
  const bar = document.querySelector('#sanity-bar');
  const value = document.querySelector('#sanity-value');
  const message = document.querySelector('#sanity-text');
  const progress = document.querySelector('.sanity-track');

  // =========================================================
  // BITÁCORA — APARICIÓN AL HACER SCROLL
  // =========================================================

  const journalEntries = document.querySelectorAll('.journal-entry');

  if (journalEntries.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    journalEntries.forEach((entry) => observer.observe(entry));
  }

  if (!button || !bar || !value || !message || !progress) return;

  const signals = [
    'La señal es débil. Por ahora, todo está en calma.',
    'Un murmullo cruza el archivo. La tinta parece moverse.',
    'Las coordenadas ya no coinciden con ningún mapa conocido.',
    'Algo respondió desde el otro lado. Conviene mantener la calma.',
    'La señal se ha apagado. El expediente vuelve a quedar en silencio.'
  ];
  let sanity = 100;
  button.addEventListener('click', () => {
    sanity = Math.max(0, sanity - 20);
    bar.style.width = `${sanity}%`;
    value.textContent = `${sanity}%`;
    message.textContent = signals[(100 - sanity) / 20];
    progress.setAttribute('aria-valuenow', String(sanity));
    if (sanity === 0) {
      button.disabled = true;
      button.innerHTML = 'Señal registrada <span aria-hidden="true">✓</span>';
    }
  });
});
