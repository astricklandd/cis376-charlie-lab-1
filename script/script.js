$(document).ready(function(){
  // click on an image to get a message 
  $("#ElonDoge").click(function(){
     $("#outputDiv").hide();
    console.log("You clicked ElonDoge. This is a nice Doge, but not the right doge.")
    $("#outputMsg").text("You Lose, Elon Doge is not correct");  
    $("#outputDiv").toggle();
 
    $( "#ElonDoge" ).click(function() {
      $( "#ElonDoge" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      });
      });
    });
 
$("#DogeMeme").click(function(){
      $("#outputDiv").hide();
      console.log("You clicked DogeMeme. This is the best Doge. You selected the correct Doge")
        $("#outputMsg").text("You win, Meme Doge is correct");  
        $("#outputDiv").toggle();

  $( "#DogeMeme" ).click(function() {
      $( "#DogeMeme" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      });
    });

  });
  });

