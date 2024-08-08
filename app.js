document.addEventListener('DOMContentLoaded', (event) => {
    const output = document.getElementById('output');
    const soundToggle = document.getElementById('sound-toggle');
    let soundEnabled = true;

    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundToggle.textContent = soundEnabled ? 'Silenciar Sonidos' : 'Activar Sonidos';
    });

    // Añadir event listeners a las teclas del teclado virtual
    const keys = document.querySelectorAll('.tecla');
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyText = key.textContent.trim();
            output.textContent = `Tecla presionada: ${keyText}`;
            key.classList.add('illuminated'); // Añadir la clase de iluminación

            if (soundEnabled) {
                // Aquí puedes agregar el sonido que deseas reproducir
                const audio = new Audio('sound.mp3'); // Asegúrate de tener un archivo de sonido en la ruta correcta
                audio.play();
            }

            // Remover la iluminación después de un corto tiempo
            setTimeout(() => {
                key.classList.remove('illuminated');
            }, 300);
        });
    });

    // Controlar teclas físicas
    document.addEventListener('keydown', (event) => {
        output.textContent = `Tecla presionada: ${event.key}`;
        const keyElement = Array.from(keys).find(key => key.textContent.trim().toUpperCase() === event.key.toUpperCase());
        if (keyElement) {
            keyElement.classList.add('illuminated');

            if (soundEnabled) {
                // Aquí puedes agregar el sonido que deseas reproducir
                const audio = new Audio('sound.mp3'); // Asegúrate de tener un archivo de sonido en la ruta correcta
                audio.play();
            }
        }
    });

    document.addEventListener('keyup', (event) => {
        const keyElement = Array.from(keys).find(key => key.textContent.trim().toUpperCase() === event.key.toUpperCase());
        if (keyElement) {
            keyElement.classList.remove('illuminated');
        }
    });
});
