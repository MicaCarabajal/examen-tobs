$(document).ready(function() {
    $('.precio-anio').hide();
    $('.anio').hide();
    $('.boton-anio').on('click',function() {
        $('.precio-anio').show('fazt');
        $('.anio').show('fazt');
        $('.precio').hide();
        $('.mes').hide();
    });
    $('.boton-mes').on('click',function() {
        $('.precio-anio').hide();
        $('.anio').hide();
        $('.precio').show('fazt');
        $('.mes').show('fazt');
    });
})