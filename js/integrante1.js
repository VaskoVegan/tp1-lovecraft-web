document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#btn-oracle');
  const message = document.querySelector('#oracle-message');
  const consolePanel = document.querySelector('.oracle-console');

  if (!button || !message || !consolePanel) return;

  let consultationCount = 0;

  const notes = [
    'El observatorio permanece en silencio.',
    'Primer registro: una señal débil aparece entre los datos.',
    'Segundo registro: la señal responde al investigador.',
    'Tercer registro: algo está observando desde el otro lado.',
    'El registro comienza a mostrar datos que no deberían existir.',
    'La señal cambia de frecuencia. El archivo no reconoce el patrón.',
    'La observación ha sido devuelta. Ahora alguien está mirando.',
    'La señal desaparece. El observatorio vuelve al silencio.'
  ];

  button.addEventListener('click', () => {
    consultationCount += 1;

    consolePanel.classList.remove('is-active');

    void consolePanel.offsetWidth;

    consolePanel.classList.add('is-active');

    const index = consultationCount % notes.length;

    message.textContent = notes[index];

    if (consultationCount >= notes.length - 1) {
      button.innerHTML = 'Consultar nuevamente <span>↗</span>';
    }
  });

  const contactForm = document.querySelector('#contact-form');
  const contactName = document.querySelector('#contact-name');
  const contactMessage = document.querySelector('#contact-message');
  const contactStatus = document.querySelector('#contact-status');

  if (contactForm && contactName && contactMessage && contactStatus) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = contactName.value.trim();
      const message = contactMessage.value.trim();

      if (!name || !message) {
        contactStatus.textContent =
          'La transmisión requiere un nombre y un mensaje.';
        return;
      }

      contactStatus.textContent =
        `Transmisión registrada, ${name}. El mensaje ha sido incorporado al expediente.`;

      contactForm.reset();
    });
  }
});