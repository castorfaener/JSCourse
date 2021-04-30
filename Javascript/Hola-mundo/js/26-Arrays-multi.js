'use strict'


var categorias = ['Accion','Terror','Cpmedia'];
var peliculas = ['La verdad duele','La vida es bella','Gran Torino'];

var cine = [categorias,peliculas];

console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][2]);

peliculas.push("Batman");				//Introducimos un nuevo elemento en el array
console.log(peliculas);


peliculas.sort();			//ordenamos los elementos alfabeticamente

peliculas.reverse();		//ordenamos los elementos a la inversa

peliculas.pop();			//Sacamos el ultimo elemento del array

var indice = peliculas.indexOf('La vida es bella');			//buscamos el indice del elemento pasado por parametro
console.log(indice);
if(indice>-1){							//Si lo hemos encontrado...
	peliculas.splice(indice,1);			//Eliminamos desde ese elemento los siguientes indicados 
}

console.log(peliculas);

var peliculasString = peliculas.join();		//unimos los elementos del array en un String separado por comas
console.log(peliculasString);


var cadena ="texto1, texto2, texto3";

var cadenaArray = cadena.split(", ");		//creamos un array definiendo el separador de los elementos de la cadena
console.log(cadenaArray);

//Busquedas


var busqueda = peliculas.find(function(peli){		//Buscamos un elemento del array
	return peli == 'Gran Torino';
});


console.log(busqueda);



var precios = [10,12,80,47];

var busquedaPrecios = precios.some(function(pr){		//Buscamos un elemento que cumpla una condicion concreta(Booleano)
	return pr>=20;
});

console.log(busquedaPrecios);