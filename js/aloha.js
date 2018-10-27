$(function() {
  $("#cartCount").hide();
  

  $("#shop").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $(".boxes").offset().top }, 1000);
  });

  $("#featured").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $(".product").offset().top }, 1000);
  });

  $("#updates").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $(".subscribe").offset().top }, 1000);
  });

  $("#about").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $(".banner").offset().top }, 1000);
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
