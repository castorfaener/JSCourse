'use strict'

/*	
	Introducir dos números y mostrar por pantalla los numeros que hay entre ellos
*/

var numero1 = 0;
var numero2 = 0;

do{
	numero1 = parseInt(prompt("Introduce el primer número"));
}while(isNaN(numero1))

do{
	numero1 = parseInt(prompt("Introduce el segundo número"));
}while(isNaN(numero2))

