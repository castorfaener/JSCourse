'use strict'

/*
	1. Pida 6 numeros por pantalla y los meta en un Array
	2. Mostrar todos los elementos del array en el cuerpo de la pagina y en la consola
	3. Ordenar el Array y mostrarlo
	4. Invertir su orden y mostrarlo
	5. Mostrar cuantos elementos tiene el array
	6. Busqueda de un valor introducido por el usuario y que nos diga si se encuentra en el array y su posicion

*/

var arrayNumeros = [];

function show(array,cabecera){
	console.log(array);

	document.write("<h1>"+cabecera+"</h1>");
	document.write("<ul>");
	for(var i=0;i<6;i++){
		document.write("<li>"+array[i]+"</li>");
	}
	document.write("</ul>");

}



for(var i =0; i<6;i++){
	arrayNumeros[i]=parseInt(prompt("Introduce numero"));
}

show(arrayNumeros,"Los numeros del Array son:");

arrayNumeros.sort();

show(arrayNumeros,"Los numeros del Array ordenados son:");

arrayNumeros.reverse();

show(arrayNumeros,"Los numeros del Array ordenados a la inversa son:");

alert("El array contiene "+arrayNumeros.length+" elementos");

var numeroBuscado=parseInt(prompt("Introduce un numero para buscar"));

var indiceBuscado = arrayNumeros.indexOf(numeroBuscado) 

if(indiceBuscado>=0){
	alert("El numero "+numeroBuscado+ " se encuentra en el indice " + indiceBuscado);
}else{
	alert("El numero introducido no se encuentra en el array");
}

console.log(indiceBuscado);

console.timeLog();


