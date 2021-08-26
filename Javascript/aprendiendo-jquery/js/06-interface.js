$(document).ready(function(){

    //Mover elementos por la pagina
    $(".elemento").draggable();

    //Redimensionar
    $(".elemento").resizable();

    //Seleccionar elementos
    //$(".lista_seleccionable").selectable();
    
    //Ordenar
    $(".lista_seleccionable").sortable({
            update: function(event, ui){
                console.log("Ha cambiado la lista");
            }
    });
    
    

});