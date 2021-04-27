'use strict'

/*
	Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales.
	PLUS: Si los numeros no son un numero o son menores o iguales a cero que nos vuelva a pedir introducir los datos.
*/
do{ 
	var numero1 = parseInt(prompt("Introduce el numero 1"));
	console.log(typeof(numero1));
	console.log(numero1);
}while(isNaN(numero1) || numero1<0)     //Verificamos que sea un numero y mayor que cero
	
do{ 
	var numero2 = parseInt(prompt("Introduce el numero 2"));
	console.log(typeof(numero2));
	console.log(numero2);
}while(isNaN(numero2) || numero2<0)			//Verificamos que sea un numero y mayor que cero


if(numero1>numero2){
	alert("El numero " + numero1 + " es mayor que "+ numero2);2
}else if(numero1<numero2){
	alert("El numero " + numero1 + " es menor que "+ numero2);
}else if(numero1==numero2){
	alert("Los dos números son iguales");
}else{
	alert("Introduce los numeros correctamente");
}