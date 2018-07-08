

$(document).ready(function(){
    $("#downscroll1").click(function(){
        $('html, body').animate({scrollTop: $("#page1").offset().top + 10}, 1000);
    });
    $("#downscroll2").click(function(){
        $('html, body').animate({scrollTop: $("#page3").offset().top}, 1000);
    });
});