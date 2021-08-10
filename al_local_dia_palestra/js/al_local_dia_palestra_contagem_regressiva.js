jQuery(document).ready(function ($) {
    $('#evento').countdown(data, function(event){
        $('#dias').html(event.strftime('%D Dias'));
        $('#horas').html(event.strftime('%H Horas'));
        $('#minutos').html(event.strftime('%M Minutos'));
        $('#segundos').html(event.strftime('%S Segundos'));
    });
})