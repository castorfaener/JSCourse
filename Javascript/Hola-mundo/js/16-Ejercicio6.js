'use strict'


/*
Indicar si un numero  es par o impar

1. Ventana prompt
2. Comprobar si un numero es valido y si no, volver a pedirlo
*/


do{
	var numero = parseInt(prompt("Introduce un numero"));

}while(isNaN(numero))

if(numero%2==0){
	alert("El número " + numero + " es par");
}else{
	alert("El número " + numero + " es impar");
}
