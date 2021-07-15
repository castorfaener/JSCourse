'use strict'

// Local Storage

//Guardar datos en el navegador

localStorage.setItem("titulo", "Curso de JS");

//Recuperar elemento

console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos

var usuario = {
    nombre: "PacoAlacreu",
    email: "castorfaener@gmail.com",
    web: "miweb.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto

var user = JSON.parse(localStorage.getItem("usuario"));

console.log(user);
document.querySelector('#peliculas').append(" "+user.web+" ");


//Borrar objeto de local Storage

localStorage.removeItem("usuario");

//Borrar todos los datos del local Storage

localStorage.clear();