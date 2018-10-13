
$.getJSON("https://talaikis.com/api/quotes/random/", function(a) {
    $("#id_quote").text(a.quote);
    $("#id_quote_author").text(a.author);
});

window.setInterval(function(){
    $.getJSON("https://talaikis.com/api/quotes/random/", function(a) {

        $("#id_quote_box").fadeOut( "slow", function() {
            $("#id_quote").text(a.quote);
            $("#id_quote_author").text(a.author);
        });
        setTimeout(function () {

        }, 150);
        $("#id_quote_box").fadeIn( "slow", function(a) {});
        $("#id_quote_box").fadeIn( "slow", function(a) {});
    });
}, 1000*15);

window.addEventListener('resize', function(event){
    if ($(window).width() < 800){
        $("#title").css('display', 'None');
    }else{
        $("#title").css('display', 'Block');
    }
});
