document.addEventListener('DOMContentLoaded', () => {
 
const button = document.querySelector('#btn-oracle');
const message = document.querySelector('#oracle-message');
const consolePanel = document.querySelector('.oracle-console');
 
if (!button || !message || !consolePanel) return;
 
let consultationCount = 0;
 
const notes = [
'El vacío permanece inmóvil.',
'Mira con atención a la nada misma.',
'Los límites entre pensamiento y espacio comienzan a desdibujarse.',
'Empápate en los efluvios de tu mente, mientras tus sentidos no tienen de dónde agarrarse.',
'Déjate llevar por la oscuridad completa, indivisible e inconceptuable.',
'El vacío mismo te devuelve la mirada de forma penetrante.',
'En este momento eres un habitante de un mundo abstracto e indescriptible para las palabras mortales.',
'La inmensidad vuelve a quedar en silencio.'
];
 
button.addEventListener('click', () => {
 
consultationCount++;
 
consolePanel.classList.remove('is-active');
 
void consolePanel.offsetWidth;
 
consolePanel.classList.add('is-active');
 
const index = consultationCount % notes.length;
 
message.textContent = notes[index];
 
if (consultationCount >= notes.length - 1) {
button.innerHTML =
'Sumergirse nuevamente <span>↗</span>';
}
 
});
 
const contactForm = document.querySelector('#contact-form');
const contactName = document.querySelector('#contact-name');
const contactMessage = document.querySelector('#contact-message');
const contactStatus = document.querySelector('#contact-status');
 
if (
contactForm &&
contactName &&
contactMessage &&
contactStatus
) {
 
contactForm.addEventListener('submit', event => {
 
event.preventDefault();
 
const name = contactName.value.trim();
const message = contactMessage.value.trim();
 
if (!name || !message) {
 
contactStatus.textContent =
'La transmisión requiere un nombre y un mensaje.';
 
return;
}
 
contactStatus.textContent =
`Transmisión registrada, ${name}. El mensaje ha sido incorporado al archivo del vacío.`;
 
contactForm.reset();
 
});
 
}
 
});