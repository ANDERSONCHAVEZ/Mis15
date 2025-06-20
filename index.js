document.addEventListener('DOMContentLoaded', () => {
    const botonInvisible = document.getElementById('boton-invisible');
    const contenedorHumo = document.getElementById('contenedor-humo');

    botonInvisible.addEventListener('click', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const cantidadHumo = 300;

        for (let i = 0; i < cantidadHumo; i++) {
            crearParticulaHumo(x, y);
        }

    });

    function crearParticulaHumo(x, y) {
        const particula = document.createElement('div');
        particula.classList.add('particula-humo');
        particula.style.left = `${x}px`;
        particula.style.top = `${y}px`;

        // Dirección aleatoria
        const angulo = Math.random() * 2 * Math.PI;
        const distancia = Math.random() * 10;
        particula.style.setProperty('--dx', Math.cos(angulo) * distancia);
        particula.style.setProperty('--dy', Math.sin(angulo) * distancia);

        contenedorHumo.appendChild(particula);

        particula.addEventListener('animationend', () => {
            particula.remove();
        });
    }


});

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton-invisible');
    const fondo = document.getElementById('fondo');
    const fondo2 = document.getElementById('fondo2');
    const fondoActivo = document.getElementById('fondo-activo');
    const audio = document.getElementById('musica-fondo');
    const video = document.getElementById('video-fondo');
    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const boton3 = document.getElementById('boton3');
    const boton4 = document.getElementById('boton4');
    let mostrado1 = false;
    let mostrado2 = false;

    boton.addEventListener('click', () => {
        fondo.classList.add('fondo-distorsion');
        fondo.classList.remove('fondo-visible');
        fondo2.classList.add('fondo-visible');
        boton.style.display = 'none';
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
            elem.webkitRequestFullscreen();
        }
        setTimeout(() => {
            fondo.classList.remove('fondo-distorsion');
        }, 1500);

        setTimeout(() => {
            audio.play().catch(() => {
                console.log("Se requiere interaccion del usuario para reproducir audio");
            });
        }, 2900);

        setTimeout(() => {
            fondoActivo.classList.add('zoom-activo');
        }, 3000);

        setTimeout(() => {
            fondo2.classList.remove('fondo-visible');
            video.style.opacity = 1;
            video.currentTime = 0;
            video.play().catch(() => {
                console.log("Se requiere interaccion para reproducir");
            });

        }, 28000);

        setTimeout(() => {
            video.addEventListener('timeupdate', () => {
                if (!mostrado1 && video.currentTime >= 21) {
                    boton1.style.display = 'block';
                    mostrado1 = true
                }

                if (mostrado1 && video.currentTime >= 26) {
                    boton1.style.display = 'none';
                    mostrado1 = false
                }

                if (!mostrado2 && video.currentTime >= 26) {
                    boton2.style.display = 'block';
                    boton3.style.display = 'block';
                    boton4.style.display = 'block';
                    mostrado2 = true;
                }

                if (mostrado2 && video.currentTime >= 32) {
                    boton2.style.display = 'none';
                    boton3.style.display = 'none';
                    boton4.style.display = 'none';
                    mostrado2 = false;
                }
            });
        }, 30000);

    });

});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video-fondo');
    const audio = document.getElementById('musica-fondo');

    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
    })

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            video.pause();
            audio.pause();
        } else {
            video.play().catch(() => { });
        }
    });

    document.body.addEventListener('click', () => {
        if (video.paused) {
            video.play().catch(() => { });
            audio.play();
        } else {
            video.pause();
            audio.pause();
        }
    });
});