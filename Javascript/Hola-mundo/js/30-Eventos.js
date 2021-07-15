'use strict'

// Eventos del raton



function cambiarColor(){

    var bg=boton.style.background;
    if(bg =="green"){
        boton.style.background ="red";
        console.log("green");
    }else{
        boton.style.background ="green";
        console.log("red");
    }
    
    
}

var boton = document.querySelector("#boton");

//Click

boton.addEventListener('click', function(){cambiarColor();} );


//Mouse over

boton.addEventListener('mouseover', function(){
    boton.style.background="#ccc";
});

//Mouse out

boton.addEventListener('mouseout', function(){
    boton.style.background="yellow";
});

//Focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', function(){
    console.log("[Focus] Estas dentro del input");
});

//Blur
input.addEventListener('blur', function(){
    console.log("[Blur] Estas fuera del input");
});

//Keydown
input.addEventListener('keydown', function(){
    console.log("[keydown] Pulsando esta tecla" , String.fromCharCode(event.keyCode));
});

//Keypress
input.addEventListener('keypress', function(){
    console.log("[keypress] Tecla presionada" , String.fromCharCode(event.keyCode));
});


//Keyup
input.addEventListener('keyup', function(){
    console.log("[keyup] Tecla soltada" , String.fromCharCode(event.keyCode));
});
