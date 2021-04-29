'use strict'


/*
	Calculadora:
	1. Pida dos numeros por pantalla
	2. Si metemos uno mal que nos lo vuelva a pedir
	3. muestra en el body, en una alerta y en la consola el resultado de sumar,
	restar, multiplicar y dividir las dos cifras.
*/
do{
	var numero1 = parseInt(prompt("Introduce el primer número"));
	if(isNaN(numero1)){
		alert("Dato no válido");
	}
}while(isNaN(numero1))

do{
	var numero2 = parseInt(prompt("Introduce el segundo número"));
	if(isNaN(numero2)){
		alert("Dato no válido");
	}
}while(isNaN(numero2))


//Mostramos en el body del documento

document.write("<h2>Las operaciones con los numeros " + numero1 + " y " + numero2 + " son:</h2>");
document.write("<h3>Suma = " + (numero1 + numero2) + "</h3>");
document.write("<h3>Resta = " + (numero1 - numero2) + "</h3>");
document.write("<h3>Multiplicacion = " + (numero1 * numero2) + "</h3>");
document.write("<h3>División = " + (numero1 / numero2) + "</h3>");

//Mostramos en el console log

console.log("Las operaciones con los numeros " + numero1 + " y " + numero2 + " son:");
console.log("Suma = " + (numero1 + numero2));
console.log("Resta = " + (numero1 - numero2));
console.log("Multiplicacion = " + (numero1 * numero2));
console.log("División = " + (numero1 / numero2));

//Mostramos como alert

alert("Las operaciones con los numeros " + numero1 + " y " + numero2 + " son:");
alert("Suma = " + (numero1 + numero2)  );
alert("Resta = " + (numero1 - numero2) );
alert("Multiplicacion = " + (numero1 * numero2) );
alert("División = " + (numero1 / numero2) );