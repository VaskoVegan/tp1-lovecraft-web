// Interacción del Perfil de Vasko: El Portal Dimensional
document.addEventListener("DOMContentLoaded", () => {
    const btnPortal = document.getElementById("btn-portal-vasko");
    const portalDisplay = document.getElementById("portal-display");
    const avatar = document.getElementById("vasko-avatar");

    if (btnPortal && portalDisplay) {
        btnPortal.addEventListener("click", () => {
            // Inyectar un portal estilizado en el HTML
            portalDisplay.innerHTML = `
                <div style="
                    margin: 20px auto;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: radial-gradient(circle, #39ff14 10%, #070b0e 70%);
                    box-shadow: 0 0 30px #39ff14;
                    animation: spinPortal 2s linear infinite;
                "></div>
                <p style="color: var(--primary-neon); font-weight: bold;">¡El portal se ha abierto! Cthulhu acecha desde el fondo del repositorio.</p>
            `;

            // Girar el avatar de Vasko como si fuera absorbido por el portal
            if (avatar) {
                avatar.style.transform = "rotate(360deg) scale(0.8)";
                avatar.style.transition = "transform 1.5s ease";
            }

            // Deshabilitar para evitar múltiples portales peligrosos
            btnPortal.textContent = "Portal Invocado";
            btnPortal.disabled = true;
            btnPortal.style.opacity = "0.5";
            btnPortal.style.cursor = "not-allowed";
        });
    }
});

// Agregar la animación de rotación dinámicamente al documento
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes spinPortal {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);
