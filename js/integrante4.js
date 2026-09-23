document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#btn-ritual");
  const portal = document.querySelector("#cosmic-portal");
  const message = document.querySelector("#portal-message");
  if (!button || !portal || !message) return;

  let summonCount = 0;
  const colors = [
    "#6f00ffed",
    "rgba(0, 255, 255, 0.95)",
    "#ff006feb",
    "#1e1e1e",
  ];
  const whispers = [
    "El vacío responde... un murmullo ancestral.",
    "Las estrellas tiemblan, el ritual avanza.",
    "Un eco interdimensional se abre paso.",
    "El abismo observa y sonríe en silencio.",
  ];

  button.addEventListener("click", () => {
    summonCount += 1;
    portal.classList.remove("is-awakened");
    void portal.offsetWidth; // reinicia animación
    portal.classList.add("is-awakened");

    const index = (summonCount - 1) % colors.length;
    portal.style.backgroundColor = colors[index];
    message.textContent =
      whispers[Math.min(summonCount - 1, whispers.length - 1)];
  });
});
