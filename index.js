$(document).ready(function(){
    $("#triangleUp").click(function(){
        $('html, body').animate({scrollTop: '0px'}, 1000);
    });
    $("#triangleDown").click(function(){
        $('html, body').animate({scrollTop: $(document).height()}, 1000);
    })
    $(document).on('click', '.navlink', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });
});