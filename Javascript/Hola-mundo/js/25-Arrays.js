'use strict'

//Arrays

var nombres = ["Victor Robles","Paco Alacreu","Susi Mas",52,true];

console.log(nombres);				//Mostramos todo el Array



console.log(nombres[1]);		//Mostramos el segundo elemento del Array


console.log(nombres.length);			//Mostramos el numero de elementos

/*
var elemento = parseInt(prompt("¿Que elemento del array quieres?",0));

if(elemento>=nombres.length){
	alert("Introduce un numero inferior a " +nombres.length);
}else{
	alert(nombres[elemento]);

}

*/


document.write("<h1>Listado de nombres</h1>");					//recorremos el array y lo mostramos en una lista en la web
document.write("<ul>");
for(var i=0;i<nombres.length;i++){
	document.write("<li>"+nombres[i]+"</li>");
}
document.write("</ul>");


