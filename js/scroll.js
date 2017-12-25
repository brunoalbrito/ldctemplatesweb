$(document).ready(function (){
    $("#a-header").click(function (){
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 2000);
    });

    $("#a-team").click(function (){
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 2000);
    });


    $("#a-contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });
});