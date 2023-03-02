//================== Greet user ==================
var currentHour = new Date().getHours();
var greetMessage = "Good day";
var followUP = "Welcome to your guide to understanding Web 3.0"

//<!-- link that helped me figure out how to make button pop up and work https://stackoverflow.com/questions/5025941/is-there-a-way-to-get-a-button-element-to-link-to-a-location-without-wrapping -->
var redirect= '<button onclick="visitPage();">enter</button>';



if(currentHour >= 00 && currentHour < 12 ) {
    greetMessage = "Good Morning";
} else if (currentHour >= 12 && currentHour < 17) {
  greetMessage = "Good Afternoon";
} else if (currentHour >= 17 && currentHour < 24) {
  greetMessage = "Good Evening";
}

$(".greet__input").on("keydown",function name(e) {
    if(e.keyCode == 13) {
      var user = this.value;
      var button = this.value;
      $('.greet_name').fadeOut('normal', function() {
        $(".greet_name").css("font-style");
        $('.greet_name').html(greetMessage + ", " + user + "<br>" + "<br>" + followUP + "<br>" + redirect);
        $('.greet_name').fadeIn('normal');
      });


    }
});
