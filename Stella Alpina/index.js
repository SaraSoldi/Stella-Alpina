//DATE
var d= new Date();
var day= d.getDate();
var month= d.getMonth()+1;
var year= d.getFullYear();
$("#date").html(day+"/"+month+"/"+year);

//CAROSELLO
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 3000
  })
});
