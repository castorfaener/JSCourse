'use strict'

/*
	Tabla de multiplicar de un numero introducido por pantalla
*/


var numero = parseInt(prompt("Introduce un numero"));

document.write("<h2> La tabla de multiplicar de " + numero + " es:</h2>");
for(var i=1;i<=10;i++){
	document.write("<h5>"+numero+" x "+i+" = "+(numero * i)+"</h5>");
	//document.write("<br/>");
}