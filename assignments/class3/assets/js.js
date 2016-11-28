$(function(){

    var myFooter = $("#fade");

    myFooter.on("mouseenter", function(){
        myFooter.fadeIn();
        }).on("mouseleave", function(){
        myFooter.fadeOut();
    });
});
