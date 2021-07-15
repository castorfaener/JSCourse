'use strict'

window.addEventListener('load', function(){
    console.log("DOM cargado!");

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = "none";                          //Ocultamos el recuadro qu muestra los datos

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

       var nombre = document.querySelector("#nombre").value;
       var apellidos = document.querySelector("#apellidos").value;
       var edad = parseInt(document.querySelector("#edad").value);

       if(nombre.trim() == null || nombre.trim().length == 0){
           alert("El campo nombre no contiene datos");
           return false;
        }
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("El campo apellidos no contiene datos");
            return false;
         }
         if(edad == null || edad <= 0 || isNaN(edad) == true){
            alert("El campo edad no es valido");
            return false;
         }

       box_dashed.style.display = "block";

       console.log(nombre, apellidos, edad);
       var datos_usuario = [nombre, apellidos, edad];

       for(var indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
       }

       
      
    });
});