'use strict'

// DOM - Document Object Model

function cambiaColor(color){
	caja.style.background = color;
}

//conseguir elementos con un ID concreto

var caja=document.getElementById("micaja");
console.log(caja);

caja.innerHTML = "He modificado el archivo";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";


//conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");

todosLosDivs[2].style.background="green";
todosLosDivs[1].style.background="yellow";

console.log(todosLosDivs);





//conseguir elementos por su clase






