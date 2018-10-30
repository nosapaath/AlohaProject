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

  let emailCheck = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
$("button, input[type='submit']").on("click", function(event){   
    event.preventDefault();
    let $Input = $(this).siblings().val();
    let emailTest = emailCheck.test($Input);
    console.log($Input);

    if ($Input === "") {
      alert("Please enter your email.") 
        } else if (emailTest ) {alert("Thank you for subscribing!")
        } else { alert("Please check your spelling and try again") }
});
});



