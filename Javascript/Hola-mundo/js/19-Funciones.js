'use strict'

//Funciones

function HolaMundo(){
	console.log("Hola Mundo");						//Funcion sin parámetros
}

HolaMundo();

function suma(numero1, numero2){					//Funcion con parámetros
	return (numero1 + numero2);
}

console.log(suma(2,3));


function operacion(numero1,numero2,sel=true){		//Funcion con parametro opcional
	if(sel==true){
		return(numero1 + numero2);
	}else{
		return(numero1-numero2);
	}
}

console.log(operacion(2,4));				//toma el parametro sel por defecto(true)
console.log(operacion(2,4,true));			//definimos todos los parametrs sel=true
console.log(operacion(2,4,false));			//definimos todos los parametrs sel=false