'use strict'

//Browser Object Model

console.log(window.innerHeight);
console.log(window.innerWidth);             //Tamaño de navegador
console.log(screen.width);                  //Tamaño pantalla
console.log(screen.height);
console.log(window.location.href);          //pagina en la que nos encontramos


function abrirVentana(url){
    window.open(url);
}
