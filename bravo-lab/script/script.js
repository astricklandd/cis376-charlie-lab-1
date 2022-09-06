$(document).ready(function(){
  // click on an image to get a message 
  $("#ElonDoge").click(function(){
     $("#outputDiv").hide();
    console.log("You clicked ElonDoge. This is a nice Doge, but not the right doge.")
    $("#outputMsg").text("You Lose, Elon Doge is not correct");  $("#outputDiv").toggle();
 
// wacked line to divide page  
  $("#DogeMeme").click(function(){
    console.log("You clicked DogeMeme. This is the best Doge. You selected the correct Doge")
        $("#outputMsg").text("You win, Meme Doge is correct");  $("#outputDiv").toggle();
});
   });
    });

// https://codepen.io/barrycumbie/pen/PoeoYxm?editors=1010 for what was done in class