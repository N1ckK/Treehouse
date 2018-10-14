// changes quote on start
$.getJSON("https://talaikis.com/api/quotes/random/", function(a) {
    $("#id_quote").text(a.quote);
    $("#id_quote_author").text(a.author);
});

// changes quote on a fixed interval
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

// manages page resizing
window.addEventListener('resize', function(event){
    if ($(window).width() < 800){
        // SMALL
        // title fades out
        $("#title").fadeOut( "fast", function(a) {
            $('#title').css('display', 'None');
        });
        // navigator buttons less spaced
        $('.navigators').find('a').css('padding', '5px 1vw 5px 1vw');
        // navigator right space removed
        $('.navigators').css('right', '5px');
    }else{
        // NORMAL
        // title fades in
        $("#title").fadeIn( "fast", function(a) {
            $('#title').css('display', 'Block');
        });
        // navigator buttons are wider spaced
        $('.navigators').find('a').css('padding', '5px 2vw 5px 2vw');
        // navigator section gets right space
        $('.navigators').css('right', '50px');
    }
});
