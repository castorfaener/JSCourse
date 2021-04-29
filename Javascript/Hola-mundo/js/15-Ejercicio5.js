'use strict'

//Muestra todos los numeros divisores de un numero introducidos por un prompt




var numero = parseInt(prompt("Introduce el numero"));


document.write("<h1>Los divisores del numero " + numero +" son:</h1>");
for(var i=1; i=numero; i++){
	if(numero%i == 0){
		console.log(i);
		console.log("<br/>");
	}
}