$(document).ready(function(){
   
    //MouseOver y MouseOut

    var caja = $('#caja');

    /*
    caja.mouseover(function(){
        $(this).css("background", "red");

    });

    caja.mouseout(function(){
        $(this).css("background", "green");

    });
    */

    //Hover

    function cambiaRojo(){
        $(this).css("background", "red");
    }

    function cambiaVerde(){
        $(this).css("background", "green");
    }

    caja.hover(cambiaRojo, cambiaVerde);

    //Click, doble click

    caja.click(function(){
        $(this).css("background", "blue")
               .css("color","white"); 
    });

    caja.dblclick(function(){
        $(this).css("background","pink")
               .css("color","yellow"); 
    });

    //Focus y Blur

    $("#nombre").focus(function(){
        $(this).css("border","2px solid green");
    });

    $("#nombre").blur(function(){
        $(this).css("border","1px solid grey");
        
        $("#datos").text($(this).val()).show();
    });


    //Mousedown y mouseup

    var datos = $("#datos");
    var nombre = $("#nombre");

    datos.mousedown(function(){
        $(this).css("border-color","grey");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });

    //Mousemove

    $(document).mousemove(function(){
        $("#sigueme").css("left",event.clientX);
        $("#sigueme").css("top",event.clientY);
    });



});