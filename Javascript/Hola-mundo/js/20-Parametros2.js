'use strict'

//Parametros REST y SPREAD


//Ejemplo Rest

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){     
	console.log("Fruta 1: " + fruta1);
	console.log("Fruta 2: " + fruta2);
	console.log(restoDeFrutas);							//mostramos el siguiente parámetro
	console.log(...restoDeFrutas);						//mostramos todos los parametros que se han pasado en la llamada a la funcion
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Coco");

//Ejemplo Spread

var frutas = ["Fresa","Piña"];

listadoFrutas(...frutas, "Pera", "Naranja", "Aguacate");