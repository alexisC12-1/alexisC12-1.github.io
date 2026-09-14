
const boton = document.getElementById("abrirBtn");

const inicio = document.getElementById("inicio");

const regalo = document.getElementById("regalo");

const luces = document.querySelector(".luces");

const petalos = document.querySelector(".petalos");

const cancion = document.getElementById("cancion");


// =====================================
// CREAR LUCIÉRNAGAS
// =====================================

for (let i = 0; i < 35; i++) {

    const luz = document.createElement("div");

    luz.classList.add("luz");

    luz.style.left = Math.random() * 100 + "%";

    luz.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    luz.style.animationDelay =
        Math.random() * 7 + "s";

    const tamaño = 2 + Math.random() * 4;

    luz.style.width = tamaño + "px";

    luz.style.height = tamaño + "px";

    luces.appendChild(luz);
}


// =====================================
// ABRIR EL REGALO
// =====================================

boton.addEventListener("click", () => {

    // Reproducir la canción
    cancion.play();

    // Ocultar pantalla inicial
    inicio.classList.add("ocultar");

    // Mostrar flores
    setTimeout(() => {

        regalo.classList.add("mostrar");

    }, 500);


    // Comenzar lluvia de pétalos
    comenzarPetalos();

});


// =====================================
// CREAR PÉTALOS
// =====================================

function crearPetalo() {

    const petalo = document.createElement("div");

    petalo.classList.add("petalo");

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petalo.style.animationDelay =
        Math.random() * 2 + "s";

    const tamaño =
        7 + Math.random() * 10;

    petalo.style.width = tamaño + "px";

    petalo.style.height =
        tamaño * 0.65 + "px";

    petalos.appendChild(petalo);


    // Eliminarlo después de caer

    setTimeout(() => {

        petalo.remove();

    }, 10000);

}


// =====================================
// LLUVIA SUAVE DE PÉTALOS
// =====================================

function comenzarPetalos() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            crearPetalo();

        }, i * 300);

    }


    setInterval(() => {

        crearPetalo();

    }, 900);

}
