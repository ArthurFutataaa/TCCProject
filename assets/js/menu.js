$(document).ready(function() {
    $('#content').load('tela_inicial.html');

    $('.item').click(function(e) {
    e.preventDefault();
    let url = $(this).attr('href');
    console.log(url)
    $('#content').empty();
    $('#content').load(url);
    });
});