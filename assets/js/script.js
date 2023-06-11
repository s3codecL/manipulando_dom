/*
function mostrarTexto2() {
    document.getElementById("text2").style.display = "block";
}
function ocultarTexto2() {
    document.getElementById("text2").style.display = "none";
}
function agrandarImagen() {
    document.getElementById("img").style.width = "100%";
}
function encogerImagen() {
    document.getElementById("img").style.width = "20%";
}
function aumentarLetra() {
    document.getElementById("caja3").style.fontSize = "1.5em";
}
*/

// Se mantienen los mismos eventos, pero  realizados con Jquery
$('#text1').hover(function () {
    $('#text2').show();
}, function () {
    $('#text2').hide();
});


$('#caja2').click(function () {    // Al hacer clic en el div con id caja2
    $('#img').animate({ width: '100%' });  // Anima el ancho de la imagen a un 200%
});

$('#caja2').mouseleave(function () {   // Al salir del div con id caja2
    $('#img').animate({ width: '20%' });   // Anima el ancho de la imagen de vuelta a su tamaño original
});


$('#caja3').dblclick(function () {
    $(this).css('font-size', '24px');
});
