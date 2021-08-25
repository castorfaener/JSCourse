$(document).ready(function(){

    //load
    $("#datos").load("https://www.meneame.es/");

    //get

    $.get("https://reqres.in/api/users?page=2", function(response){
        response.data.forEach((element, index)=>{
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    }); 

    //post

    $("#formulario").submit(function(){

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()        };

        $.post($(this), usuario, function(response){
        console.log(response);
        });

    });

    

    





});