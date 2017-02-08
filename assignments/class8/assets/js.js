$(function(){


//var sat = $("#saturation");
//var light = $("#lightness");
//var circle = $("#cicle");


});
$("#saturation,#lightness").on("change mousemove", function(){
    "#circle".css("background","hsl(0,"+sat.val()+"%,"+light.val()+"%");
    "#circle".attr("data-color","hsl(0,"+sat.val()+"%,"+light.val()+"%");

});

