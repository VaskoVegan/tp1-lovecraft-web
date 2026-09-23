document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#btn-oracle');
  const map = document.querySelector('.star-map');
  const message = document.querySelector('#oracle-message');

  if (!button || !map || !message) return;

  const observations = [
    'La primera nota del archivo habla de paciencia y método.',
    'Los datos forman un patrón cuando se los observa con atención.',
    'El mapa no predice el futuro: ayuda a formular mejores preguntas.',
    'La señal cambia, pero el trabajo en equipo mantiene el rumbo.',
    'El patrón se vuelve más claro. La observación empieza a generar nuevas preguntas.',
    'Registro final: los datos no entregan respuestas. Entregan mejores formas de buscarlas.'
  ];

  let observationIndex = 0;

  button.addEventListener('click', () => {
    message.textContent = observations[observationIndex];

    observationIndex =
      (observationIndex + 1) % observations.length;

    map.classList.remove('is-active');

    void map.offsetWidth;

    map.classList.add('is-active');

    if (observationIndex === 0) {
      button.innerHTML = 'Reiniciar observación <span>↻</span>';
    } else {
      button.innerHTML = 'Analizar otra señal <span>↗</span>';
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