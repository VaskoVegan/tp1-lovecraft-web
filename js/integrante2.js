document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#btn-oracle');
  const map = document.querySelector('.star-map');
  const message = document.querySelector('#oracle-message');
  if (!button || !map || !message) return;

  const observations = [
    'La primera nota del archivo habla de paciencia y método.',
    'Los datos forman un patrón cuando se los observa con atención.',
    'El mapa no predice el futuro: ayuda a formular mejores preguntas.',
    'La señal cambia, pero el trabajo en equipo mantiene el rumbo.'
  ];
  let observationIndex = 0;
  button.addEventListener('click', () => {
    message.textContent = observations[observationIndex];
    observationIndex = (observationIndex + 1) % observations.length;
    map.classList.remove('is-active');
    void map.offsetWidth;
    map.classList.add('is-active');
  });
});
