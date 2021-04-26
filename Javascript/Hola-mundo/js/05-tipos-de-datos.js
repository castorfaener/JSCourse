'use strict'

//Operadores

var numero1 = 7;
var numero2 = 12;

var resultado = numero1 + numero2;

alert("El resultado es" + resultado);


//Tipos de datos

var numero_entero = 44;
var cadena_texto = "Hola mundo";
var booleano = true;

var numero_falso = "33";

console.log(numero_entero + numero_falso);

Number(numero_falso);			//convierte el caracter a numero

console.log(numero_entero + Number(numero_falso));

//detectar tipo de dato

console.log(typeof(booleano));
