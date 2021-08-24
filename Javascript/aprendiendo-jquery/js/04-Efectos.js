$(document).ready(function(){

    $('#caja').hide();
    $('#ocultar').hide();
    $("#mostrar").show();

    $("#mostrar").click(function(){
        $('#caja').show('normal');
        $(this).hide();
        $("#ocultar").show();
    });

    $("#ocultar").click(function(){
        $('#caja').hide('normal');
        $(this).hide();
        $("#mostrar").show();

    });


});