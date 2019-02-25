$(document).ready(function(){
    $('.search-btn button').click(function () {
        $('#searchbox').slideToggle(100);
    });
    $('.comments-display-btn button').click(function () {
        $('#comments-inf').slideToggle(500);
    });
    $('#resp').click(function () {
        $('#menuGizle').slideToggle(500);
    });
});

function yorumonay(){
    alert('Yorumunuz Başarıyla Gönderilmiştir');
}