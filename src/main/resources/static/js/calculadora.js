// Función que agrega dígitos al display
function setDigito(digito) {
    let display = document.getElementById('display');

    if (display.value === "0") {
        display.value = digito;
    } else {
        display.value = display.value + digito;
    }
}

function setOperador(operador) {
    let display = document.getElementById('display');
    if (operador === "x") {
        operador = "*";
    }
    display.value = display.value + operador;
}

function borrar() {
    let display = document.getElementById('display');
    display.value = "0";
}

function obtenerResultado() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function raizCuadrada() {
    let display = document.getElementById('display');

    try {
        let numero = eval(display.value);
        display.value = Math.sqrt(numero);
    } catch (error) {
        display.value = "Error";
    }
}

function calcularLog() {
    let display = document.getElementById('display');

    try {
        let numero = eval(display.value);
        display.value = Math.log10(numero);
    } catch (error) {
        display.value = "Error";
    }
}

function potencia() {
    let display = document.getElementById('display');
    display.value = display.value + "**";
}