$(document).ready(function(){

    $("#hamburger").mouseenter(function(){
    $("menu").animate({right: '10px'});
    });

     $("#hamburger").mouseleave(function(){
    $("menu").animate({right: '-200px'});
    });

});

