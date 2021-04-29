'use strict'


//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Victor Robles";
var texto2 = "Es muy buen curso"


var dato = numero.toString(); 	//Convertimos el numero a String
console.log(typeof(dato));


var dato2 = texto1.toUpperCase();		//Texto a mayusculas
console.log(dato2);

var dato3 = texto1.toLowerCase();			//Texto a minusculas
console.log(dato3);


var dato4 = texto1.length;			//Longitud de un String
console.log(dato4);

var textoTotal = texto1.concat(" " + texto2);		//Concatenacion de Strings
console.log(textoTotal);

var busqueda = texto1.indexOf("curso");			//Devuelve la posicion en la que inicia la palabra buscada
console.log(busqueda);

var busqueda = texto1.search("curso");			//Devuelve la posicion en la que inicia la palabra buscada
console.log(busqueda);

