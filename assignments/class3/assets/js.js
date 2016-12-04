$(function(){

    var myFooter = $("#fade");

    $("footer").on("mouseover", function(){
        myFooter.fadeIn();
        }).on("mouseleave", function(){
        myFooter.fadeOut();
    });
});
