$(document).ready(function() {
    console.log("ready!");


    // Testimonial
    // Create an html class for all quotes
    // Hide the quotes with CSS
    // Create an interval to run function infinite
    // Use a fade in/delay/fadeout and come up with function to cycle through
   (function() {

  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(6000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();

})();
});