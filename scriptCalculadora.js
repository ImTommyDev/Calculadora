// Selecciono la pantalla
const pantalla = document.querySelector('.pantalla');

// Selecciono los botones
const botones = document.querySelectorAll('.botonSimple');

// Defino el límite de caracteres en la pantalla
const LIMITE_CARACTERES = 15;

// Añado el evento de click a los botones
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.value;

        // Lógica para borrar
        if (valor === 'AC') {
            pantalla.innerText = '0';
        } else if (valor === 'DEL') {
            if (pantalla.innerText === 'Error') {
                pantalla.innerText = '0';
            } else {
                pantalla.innerText = pantalla.innerText.slice(0, -1) || '0';
            }
        } else if (valor === '=') {
            try {
                let resultado = eval(pantalla.innerText.replace('÷', '/').replace('x', '*'));
                if (resultado.toString().length > LIMITE_CARACTERES) {
                    pantalla.innerText = 'Error';
                } else {
                    pantalla.innerText = resultado;
                }
            } catch {
                pantalla.innerText = 'Error';
            }
        } else {
            // Verifico si ya hay un error mostrado
            if (pantalla.innerText === 'Error') {
                // Reemplazo "Error" con el número o signo presionado
                pantalla.innerText = valor;
            } else if (pantalla.innerText.length >= LIMITE_CARACTERES) {
                pantalla.innerText = 'Error';
            } else {
                // Añado el valor del botón a la pantalla
                if (pantalla.innerText === '0') {
                    pantalla.innerText = valor;
                } else {
                    pantalla.innerText += valor;
                }
            }
        }
    });
});
