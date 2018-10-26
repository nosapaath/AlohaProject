$("#cartCount").hide();

$(function(){

$("#shop").on("click", function(event){
  event.preventDefault();
  $('html, body').animate({scrollTop: $(".boxes").offset().top}, 1000);
});


$("#featured").on("click", function(event){
  event.preventDefault();
  $('html, body').animate({scrollTop: $(".product").offset().top}, 1000);
});


$("#updates").on("click", function(event){
  event.preventDefault();
  $('html, body').animate({scrollTop: $(".subscribe").offset().top}, 1000);
});

  $("#about").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: $(".banner").offset().top}, 1000);
  });

 

  $( "button, input[type='button']" ).on("click", function(event){
    event.preventDefault();
    $('#cartCount').html(function(i, val) { return val*1+1 });
    $("#cartCount").show();


  });

});

