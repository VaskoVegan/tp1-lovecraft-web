// Interacción del Perfil de Sergio: El Oráculo de Arkham
document.addEventListener("DOMContentLoaded", () => {
    const btnReveal = document.getElementById("btn-reveal-sergio");
    const secretText = document.getElementById("secret-text-sergio");
    const avatar = document.getElementById("sergio-avatar");

    const secrets = [
        "📖 Archivo clasificado: Investigador Sergio ha descifrado que los breakpoints de CSS contienen geometría no euclidiana.",
        "🐙 Advertencia: Al inspeccionar el código, el inspector de elementos te devolvió la mirada.",
        "🔮 Revelación: Se rumorea que Álvaro y Juance cayeron en un bucle temporal infinito de JavaScript."
    ];

    if (btnReveal && secretText) {
        btnReveal.addEventListener("click", () => {
            // Seleccionar un secreto aleatorio
            const randomIndex = Math.floor(Math.random() * secrets.length);
            secretText.textContent = secrets[randomIndex];
            
            // Quitar clase oculta y dar efecto visual al avatar
            secretText.style.color = "var(--primary-neon)";
            
            if (avatar) {
                avatar.style.transform = "scale(1.2) rotate(10deg)";
                avatar.style.textShadow = "0 0 20px #39ff14";
                
                setTimeout(() => {
                    avatar.style.transform = "scale(1) rotate(0deg)";
                }, 300);
            }
        });
    }
});
