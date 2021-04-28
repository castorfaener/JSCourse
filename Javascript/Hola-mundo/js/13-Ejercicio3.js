'use strict'

/*	
	Introducir dos números y mostrar por pantalla los numeros que hay entre ellos
*/

var numero1 = 0;
var numero2 = 0;
var max;
var min;

do{
	numero1 = parseInt(prompt("Introduce el primer número"));					//Verificamos que el dato introducido sea un numero
}while(isNaN(numero1))

do{
	numero2 = parseInt(prompt("Introduce el segundo número"));				//Verificamos que el dato introducido sea un numero
}while(isNaN(numero2))

if(numero1>numero2){
	max=numero1;
	min=numero2;


	console.log("Los numeros comprendidos entre " + min + " y " + max + " son:"); 

	for(var i=min+1;i<max;i++){
		console.log(i);
	}
}else if(numero1<numero2){
	max=numero2;
	min=numero1;

	console.log("Los numeros comprendidos entre " + min + " y " + max + " son:"); 

	for(var i=min+1;i<max;i++){
		console.log(i);
	}

}else{
	alert("Los numeros introducidos son iguales");
}


