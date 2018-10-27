$(function() {
  $("#cartCount").hide();
   
  $("a").on("click", function(event){
    var myClass = $(this).parent().attr('class');
    console.log(myClass);
    $("html, body").animate({ scrollTop: $('#' + myClass).offset().top-70 }, 1000);
  });

  $(".addToCart").on("click", function(event) {
    event.preventDefault();
    $("#cartCount").html(function(i, val) {
      return val * 1 + 1;
    });
    $("#cartCount").show();
  });

  $("button, input[type='submit']").on("click", function(event) {
    event.preventDefault();
    if (
      $(this)
        .siblings()
        .val() !== ""
    ) {
      var email = $(this)
        .siblings()
        .val();
      alert(
        "Thank you for subscribing, you will receive weekly newsletter at: " +
          email
      );
    }
  });
});