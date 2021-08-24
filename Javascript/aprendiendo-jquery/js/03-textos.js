$(document).ready(function(){
reload_link();
boton = $("#add_button");
nuevo_link = $("#add_link");

boton.click(function(){
    
    $("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');          //Añadimos el nuevo link introducido en el input
    reload_link();
});

function reload_link(){
    $('a').each(function(index){                    //Recorremos todos los elementos 'a' del DOM 
        var enlace = $(this).attr("href");           //capturamos el enlace contenido en href
        
        $(this).text(enlace);                    //Lo añadimos al DOM para poder visualizarlo en la web
     });
}

});