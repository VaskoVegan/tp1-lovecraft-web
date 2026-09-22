document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#btn-pulse');
  const orb = document.querySelector('#pulse-orb');
  const message = document.querySelector('#pulse-message');
  if (!button || !orb || !message) return;

  let pulseCount = 0;
  button.addEventListener('click', () => {
    pulseCount += 1;
    orb.classList.remove('is-active');
    void orb.offsetWidth;
    orb.classList.add('is-active');
    const notes = [
      'Primer pulso recibido. El archivo reconoce la señal.',
      'Segundo pulso registrado. El ritmo empieza a tomar forma.',
      'La señal resuena en el abismo. El equipo sigue en marcha.'
    ];
    message.textContent = notes[Math.min(pulseCount - 1, notes.length - 1)];
  });
});
