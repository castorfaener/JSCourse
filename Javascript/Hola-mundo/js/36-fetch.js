'use strict';

// Fetch y peticiones a servicios api rest

var div_usuarios = document.querySelector("#usuarios");

var div_janet = document.querySelector("#janet");
var usuarios = [];

getUsuarios()
    .then(data => data.json())       //convertimos a Json
    .then(users => {
        console.log(usuarios);
        listadoUsuarios(users.data);


    });
    getJanet()
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data)
    });

    getInfo()
    .then(data =>{
        console.log(data);
    })

    //Capturamos el error
    .catch(error => {
        alert("Error en el fetch")
    });

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    //Creacion de promesa
    function getInfo(){
        
        var profesor = {
            nombre: 'Paco',
            apellidos: 'Alacreu',
            url:'https://www.pepeto.com'
        };
        return new Promise((resolve, reject)=> {
            var profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string') return reject('error');

            return resolve(profesor_string);
        });

        
    }

    function listadoUsuarios(usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');

            nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;

            div_usuarios.appendChild(nombre);
        });

    }

    function mostrarJanet(user){
        
            let nombre = document.createElement('h4');

            let avatar = document.createElement('img');

            avatar.src = user.avatar;

            nombre.innerHTML = user.first_name + " " + user.last_name;

            div_janet.appendChild(nombre);
            div_usuarios.appendChild(avatar);
        

    }