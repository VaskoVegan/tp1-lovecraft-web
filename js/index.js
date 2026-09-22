// Interacción Dinámica: El Medidor de Cordura de Arkham
document.addEventListener("DOMContentLoaded", () => {
    const btnInvestigate = document.getElementById("btn-investigate");
    const sanityBar = document.getElementById("sanity-bar");
    const sanityText = document.getElementById("sanity-text");
    
    let sanityLevel = 100;
    
    const messages = [
        "Cordura actual: 100% (Estable)",
        "Cordura actual: 75% (Escuchas susurros en el CSS...)",
        "Cordura actual: 50% (El HTML empieza a moverse...)",
        "Cordura actual: 25% (¡Un bucle infinito acecha!)",
        "Cordura actual: 0% (¡Cthulhu ha despertado en la consola!)"
    ];

    if (btnInvestigate) {
        btnInvestigate.addEventListener("click", () => {
            if (sanityLevel > 0) {
                sanityLevel -= 25;
                sanityBar.style.width = `${sanityLevel}%`;
                
                // Cambiar el mensaje según el índice
                const messageIndex = (100 - sanityLevel) / 25;
                sanityText.textContent = messages[messageIndex];
                
                // Si la cordura llega a 0, disparamos un efecto visual
                if (sanityLevel === 0) {
                    document.body.style.filter = "sepia(80%) contrast(120%)";
                    btnInvestigate.textContent = "Locura Absoluta";
                    btnInvestigate.disabled = true;
                    console.log("Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!");
                }
            }
        });
    }
});

