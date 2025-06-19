
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
function adivinarNumero(){
    const numeroUsuario = parseInt(document.getElementById("numero").value);
    intentos++;
    
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        alert("mete un numero del 1 al 100");
        return;
    }

    if (numeroUsuario === numeroSecreto) {
        alert(`es era el numero ${numeroSecreto} en ${intentos} intentos.`);
        document.getElementById("resultado").innerText = `Número secreto: ${numeroSecreto}`;
    } else if (numeroUsuario < numeroSecreto) {
        alert("es mayo intentalo de nuevo");
    } else {
        alert("es menor intentalo de nuevo");
    }
}

