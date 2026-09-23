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
let collapsing = false;

button.addEventListener('click', () => {
  if (collapsing) return;

  sanity = Math.max(0, sanity - 20);

  bar.style.width = `${sanity}%`;
  value.textContent = `${sanity}%`;
  progress.setAttribute('aria-valuenow', String(sanity));

  if (sanity > 0) {
    message.textContent = signals[(100 - sanity) / 20];

    if (sanity <= 40) {
      progress.closest('.signal-panel').classList.add('signal-corrupted');
    }

    return;
  }

  /* =======================================================
     COLAPSO — LA SEÑAL RESPONDE
     ======================================================= */

  collapsing = true;

  const panel = progress.closest('.signal-panel');

  panel.classList.remove('signal-corrupted');
  panel.classList.add('signal-collapse');

  value.textContent = 'Ø';
  message.textContent = 'NO ERA UNA SEÑAL. ERA UNA RESPUESTA.';
  button.disabled = true;
  button.textContent = 'SEÑAL PERDIDA';

  /* =======================================================
     REINICIO DEL EXPEDIENTE
     ======================================================= */

  setTimeout(() => {
    panel.classList.remove('signal-collapse');

    sanity = 100;
    collapsing = false;

    bar.style.width = '100%';
    value.textContent = '100%';
    message.textContent = signals[0];

    progress.setAttribute('aria-valuenow', '100');

    button.disabled = false;
    button.innerHTML = 'Investigar la señal <span>↗</span>';
  }, 2200);
});
});
