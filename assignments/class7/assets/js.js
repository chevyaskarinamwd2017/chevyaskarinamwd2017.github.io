$(document).ready(function(){

});
var sat = $("#saturation");
var light = $("#lightness");
var circle = $("#cicle");


$("sat,light").on("change mousemove", function(){
    circle.css("background","hsl(0,"+sat.val()+"%, "+light.val()+"%");
    circle.attr("color","hsl(0,"+sat.val()+"%, "+light.val()+"%");

});

});
