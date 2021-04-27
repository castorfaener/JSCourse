'use strict'

//Utilizando un bucle, mostrar la media y la suma de los numeros introducidos por el usuario 
//hasta que introduzcamos un numero negativo, que en ese caso mostrariamos el resultado


var numero = 0;
var contador = 0;
var suma = 0;

while(numero>=0){ 												//mientras el último numero sea positivo seguimos pidiendo numeros
	numero = parseInt(prompt("Introduce un numero"));
	if(numero<0){						//En caso de ser negativo salimos del bucle
		break;
	}
	contador++;
	suma = suma + numero;
}

var media = suma/contador;

alert("La suma de todos los numeros es " + suma + " y la media es "  + media);