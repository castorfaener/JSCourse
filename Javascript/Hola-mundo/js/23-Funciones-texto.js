'use strict'


//Funciones

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

var busqueda2 = texto1.substr(14,4);					//Devuelve el total de los caracteres del segundo parametro empezando por la posicion del primer parametro y 


var busqueda3 = texto1.charAt(14);				//Indica el caracter de la posicion pasada por parametro
console.log(busqueda3);

var busqueda4 = texto1.startsWith("Bienv");			//booleano para conocer si la cadena empieza por el String pasado como parametro
console.log(busqueda4);

var busqueda5 = texto1.endsWith("Robles");			//booleano para conocer si la cadena termina por el String pasado como parametro
console.log(busqueda5);

var busqueda6 = texto1.includes("Javascript");			//booleano para conocer si en la cadena se encuentra el String pasado como parametro
console.log(busqueda5);

var remplazo = texto1.replace("Javascript", "Kotlin");			//Sustituye el primer String por el segundo dentro de la cadena
console.log(remplazo);

var corte = texto1.slice(14,22);			//Recorta la cadena entre las posiciones indicadas
console.log(corte);

var troceado = texto1.split(" ");			//Separa los conjuntos del array separados por el caracter pasado como parametro y los introduce en un Array
console.log(troceado);						//En este caso = ["Bienvenido" ,"al","curso" ,"de", "Javascript" ,"de" ,"Victor" ,"Robles"]

var trimeado = texto1.trim();			//Elimina los espacios iniciales y finales de la cadena
console.log(trimeado);						

