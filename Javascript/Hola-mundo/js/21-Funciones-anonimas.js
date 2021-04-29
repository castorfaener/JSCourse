'use strict'

//Funciones anonimas
// Es una funcion que no tiene nombre



function sumame(numero1, numero2, sumaYMuestra, sumaPorDos){
	var sumar = numero1+numero2;
	

	sumaYMuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}


sumame(5,7,function(dato){									//Pasamos por parametro la definicion de una funcion anónima
	console.log("La suma es: " +dato);
}, function(dato){
	console.log("La suma por dos es: " +(dato*2));
});