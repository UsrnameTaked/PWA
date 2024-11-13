document.addEventListener("DOMContentLoaded", () => {
    const palabraCorrecta = "TRAPO "; // Palabra objetivo
    const intentos = document.querySelectorAll(".intento");
    const teclado = document.querySelector(".teclado");
    let intentoActual = 0;
    let letraActual = 0;

    teclado.addEventListener("click", (event) => {
        if(event.target.tagName ==="BUTTON" && event.target.value === "Enter"){
            verificarIntento();
        }
        else if (event.target.tagName === "BUTTON" && letraActual < 5) {
            const letra = event.target.value;
            const inputActual = intentos[intentoActual].querySelectorAll("input")[letraActual];
            inputActual.value = letra;
            letraActual++;
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && letraActual > 0) {
            // Eliminar la última letra con "Backspace"
            letraActual--;
            intentos[intentoActual].querySelectorAll("input")[letraActual].value = "";
        }
    });

    function verificarIntento() {
        const intentoInputs = intentos[intentoActual].querySelectorAll("input");
        let intentoPalabra = "";
        
        intentoInputs.forEach((input, index) => {
            intentoPalabra += input.value;
        });

        console.log(intentoPalabra)
        console.log(palabraCorrecta)
        console.log(intentoPalabra.trim() === palabraCorrecta.trim())
        if (intentoPalabra.trim() === palabraCorrecta.trim()) {
            intentoInputs.forEach(input => input.style.backgroundColor = "#9dbd85");
            alert("Felicidades, adivinaste la palabra c:");
            console.log("Felicidades, adivinaste la palabra c:");
        } else {
            intentoPalabra.split("").forEach((letra, index) => {
                if (letra === palabraCorrecta[index]) {
                    intentoInputs[index].style.backgroundColor = "#9dbd85";
                } else if (palabraCorrecta.includes(letra)) {
                    intentoInputs[index].style.backgroundColor = "#edefb4";
                } else {
                    intentoInputs[index].style.backgroundColor = "gray";
                }
            });

            intentoActual++;
            letraActual = 0;

            if (intentoActual >= intentos.length) {
                alert("Lo siento, no adivinaste la palabra. La respuesta era: " + palabraCorrecta);
            }
        }
    }
});
