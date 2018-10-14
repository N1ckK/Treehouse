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

function managePageResizing(){
    if ($(window).width() < 800){
        // SMALL
        // title fades out
        $("#title").fadeOut( "fast", function(a) {
            $('#title').css('display', 'None');
        });
        // navigator buttons less spaced
        $('.navigators').find('a').css('padding', '5px 10px 5px 10px');
        // navigator right space removed
        $('.navigators').css('right', '5px');
    }else{
        // NORMAL
        // title fades in
        $("#title").fadeIn( "fast", function(a) {
            $('#title').css('display', 'Block');
        });
        // navigator buttons are wider spaced
        $('.navigators').find('a').css('padding', '5px 30px 5px 30px');
        // navigator section gets right space
        $('.navigators').css('right', '50px');
    }
}

// manages page resizing
window.addEventListener('resize', function(event){
    managePageResizing();
});


// manages cycle throughs
next = false;
window.setInterval(function(){
    $(".cycle_through").each(function(){
        $(this).fadeOut( "slow", function(a) {
            elem = $(this).find(".cycle")
            elem.removeClass("cycle");
            index = elem.index();
            if (index < $(this).children().length -1){
                $(this).children()[index +1].classList.add("cycle");
            }else{
                $(this).children()[0].classList.add("cycle");
            }
        });
        $(this).fadeIn( "slow", function(a) {});
    })
}, 1000*10);
