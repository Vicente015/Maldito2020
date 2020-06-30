var play = document.querySelectorAll('.svg-play');
var notyf = new Notyf();


play.forEach(elem => {
    elem.addEventListener("click", () => {
        notyf.error('No hay ningún video disponible, esto es solo una idea.');
    });
});


var pelicula = document.querySelectorAll('.pelicula');
pelicula.forEach(peli => {
    if (peli[0]) return
    peli.addEventListener("click", () => {
        notyf.error('No existe ninguna serie, esto es solo una idea');
    });
});
