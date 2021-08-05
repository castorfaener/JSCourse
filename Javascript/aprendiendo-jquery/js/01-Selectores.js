$(document).ready(function(){
    console.log("Estamos listos");

    //Selector de ID

    var rojo = $("#rojo");
    rojo.css("background", "red")
        .css("color","white");

    var amarillo = $("#amarillo");
    amarillo.css("background", "yellow")
        .css("color","green");
        
    
    $("#verde").css("background", "green")
               .css("color","white");


    //Selectores de clase

    var mi_clase = $(".zebra");
    mi_clase.css("border", "5px dashed black");
    

    //Seleccion de etiquetas

    var parrafos = $('p');
    parrafos.click(function(){
        $(this).addClass('zebra');
        console.log("Cliqueado!!");


    });
    //Seleccion de atributos

    $('[title="Google"]').css('background','#ccc');
    $('[title="Meneame"]').css('background','orange');


    //Otros

        //$('p,a').addClass("margen-superior");

        var busqueda = $("#caja").find('.resaltado');
        console.log(busqueda);
    

});