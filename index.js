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
    const invitado = document.getElementById('nombre-invitado');
    let mostrado1 = false;
    let mostrado2 = false;
    let mostrado3 = false;

    boton.addEventListener('click', () => {
        fondo.classList.add('fondo-distorsion');
        fondo.classList.remove('fondo-visible');
        fondo2.classList.add('fondo-visible');
        boton.style.display = 'none';
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
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

                if(!mostrado3 && video.currentTime >= 15){
                    invitado.classList.add("visible");
                    mostrado3 = true;
                }

                if(mostrado3 && video.currentTime >= 19){
                    invitado.classList.remove("visible");
                    mostrado3 = false;
                }

                if (!mostrado1 && video.currentTime >= 40) {
                    boton1.style.display = 'block';
                    mostrado1 = true
                }

                if (mostrado1 && video.currentTime >= 46) {
                    boton1.style.display = 'none';
                    mostrado1 = false
                }

                if (!mostrado2 && video.currentTime >= 46) {
                    boton2.style.display = 'block';
                    mostrado2 = true;
                }

                if (mostrado2 && video.currentTime >= 50) {
                    boton2.style.display = 'none';
                    mostrado2 = false;
                }
            });
        }, 28000);

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


const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const invitados = {

    connie: {
        nombre: "Connie",
        acompañante: true,
    },

    omara:{
        nombre: "Omara",
        acompañante: false,
    },

    alexandra:{
        nombre: "Alexandra",
        acompañante: true,
    },

    adriana:{
        nombre: "Adriana",
        acompañante: true,
    },

    belen:{
        nombre: "Belen",
        acompañante: false,
    },

    maria:{
        nombre: "Maria",
        acompañante: false,
    },

    flavia:{
        nombre: "Flavia",
        acompañante: false,
    },

    elkin:{
        nombre: "Elkin",
        acompañante: false,
    },

    josue:{
        nombre: "Josue",
        acompañante: false,
    },

    haroltd:{
        nombre: "Haroltd",
        acompañante: false,
    },

    sharukh:{
        nombre: "Sharukh",
        acompañante: true,
    },

    sergio:{
        nombre: "Sergio",
        acompañante: false,
    },

    sebastian:{
        nombre: "Sebastian",
        acompañante: false,
    },

    ezequiel:{
        nombre: "Ezequiel",
        acompañante: false,
    },

    danilo:{
        nombre: "Danilo",
        acompañante: false,
    },

    facundo:{
        nombre: "Facundo",
        acompañante: false,
    },

    dylan:{
        nombre: "Dylan",
        acompañante: false,
    },

    jhon:{
        nombre: "Jhon",
        acompañante: false,
    },

    flavia2:{
        nombre: "Flavia",
        acompañante: true,
    },

    micaela:{
        nombre: "Micaela",
        acompañante: false,
    },

    ashley:{
        nombre: "Ashley",
        acompañante: false,
    },

    leo:{
        nombre: "Leo",
        acompañante: true,
    },

    edinson:{
        nombre: "Edinson",
        acompañante: true,
    },

    mis_maria:{
        nombre: "Mis Maria",
        acompañante: true,
    },

    mis_miriam:{
        nombre: "Mis Miriam",
        acompañante: false,
    },

    mis_liz:{
        nombre: "Mis Liz",
        acompañante: true,
    },

    mis_ursula:{
        nombre: "Mis Ursula",
        acompañante: true,
    },

    mis_doris:{
        nombre: "Mis Doris",
        acompañante: false,
    },

    tia_estefani:{
        nombre: "Tía Estefani",
        acompañante: true,
    },

    tia_elsa:{
        nombre: "Tía Elsa",
        acompañante: true,
    },

    frank:{
        nombre: "Frank",
        acompañante: true,
    },

    tio_orzon:{
        nombre: "Tío Orzon",
        acompañante: false,
    },

    tio_james:{
        nombre: "Tío James",
        acompañante: false,
    },

    tio_deivis:{
        nombre: "Tío Deivis",
        acompañante: true,
    },

    mamita_dela:{
        nombre: "Mamita Dela",
        acompañante: false,
    },

    papito_sixto:{
        nombre: "Papito Sixto",
        acompañante: false,
    },

    tia_yesenia:{
        nombre: "Tía Yesenia",
        acompañante: true,
    },

    yomira:{
        nombre: "Yomira",
        acompañante: true,
    },

};

const datos = invitados[id];

if(datos) {
    document.getElementById('nombre-invitado').textContent = datos.nombre;

    const boton = document.getElementById('boton2');
    if(datos.acompañante) {
        boton.href= "https://forms.gle/mko7TKSt2t3A8Wxb7";
    } else {
        boton.href = "https://forms.gle/s9BpnmmQKSxAVZoJ8";
    }
}