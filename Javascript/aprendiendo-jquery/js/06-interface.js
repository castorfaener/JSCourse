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

    //Drop  
    $("#elemento_movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        $(".caja_efectos").toggle("fade");
    });
    
    //Tooltip
    $(document).tooltip();

    //Dialog
    
    $("#lanzar_popup").click(function(){
        $("#popup").dialog();
    });

    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();
    

});