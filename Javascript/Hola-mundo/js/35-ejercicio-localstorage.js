'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    console.log("Entra");
    var titulo = document.querySelector('#addpelicula').value
    localStorage.setItem(titulo, titulo);
});

for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
    }
    
}