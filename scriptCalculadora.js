// Selecciono la pantalla
const pantalla = document.querySelector('.pantalla');

// Selecciono los botones
const botones = document.querySelectorAll('.botonSimple');

// Añado el evento de click al botón
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.value;

        // Lógica para borrar
        if (valor === 'AC') {
            pantalla.innerText = '0';
        } else if (valor === 'DEL') {
            pantalla.innerText = pantalla.innerText.slice(0, -1) || '0';
        } else if (valor === '=') {
            try {
                pantalla.innerText = eval(pantalla.innerText.replace('÷', '/').replace('x', '*'));
            } catch {
                pantalla.innerText = 'Error';
            }
        } else {
            if (pantalla.innerText === '0') {
                pantalla.innerText = valor;
            } else {
                pantalla.innerText += valor;
            }
        }
    });
});