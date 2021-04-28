'use strict'

/*
	Muestra los numeros impares comprendidso entre dos numeros introducidos por el usuario
*/

var numero1 = 0;
var numero2 = 0;
var max;
var min;
var espar;

do{
	numero1 = parseInt(prompt("Introduce el primer número"));					//Verificamos que el dato introducido sea un numero
}while(isNaN(numero1))

do{
	numero2 = parseInt(prompt("Introduce el segundo número"));				//Verificamos que el dato introducido sea un numero
}while(isNaN(numero2))

if(numero1>numero2){
	max=numero1;
	min=numero2;


	document.write("<h1>Los numeros impares entre " + min + " y " + max + " son:</h1>"); 

	for(var i=min+1;i<max;i++){
		if(i%2 == 1){
			document.write(i);
			document.write("<br/>");
		}
	}
}else if(numero1<numero2){
	max=numero2;
	min=numero1;

	document.write("<h1>Los numeros impares entre " + min + " y " + max + " son:</h1>"); 

	for(var i=min+1;i<max;i++){
		if(i%2 == 1){
			document.write(i);
			document.write("<br/>");
		}
	}

}else{
	alert("Los numeros introducidos son iguales");
}


