$(document).ready(function() {

  //Use form to play betting game

  var bankroll = 100;
  $("form").submit(function(event) {
    
    event.preventDefault();
    
    var bet = parseInt($("#bet").val());

    var numguess = parseInt($("#number").val());

    var randnum = Math.floor(Math.random() * 10) + 1;

    if (bankroll > 0) { 

      if (numguess === randnum) {
        bankroll += bet;
        $("span").text("You won your bet! Your bankroll is now " + bankroll + ".");
        $("#dollarsign").effect("bounce", { times:3 }, 300);
      } else if ((numguess === (randnum - 1)) || (numguess === (randnum + 1))) {
        $("span").text("You were only one number off. Your bankroll is still " + bankroll + ".");
      } else if ((numguess < (randnum - 1)) || (numguess > (randnum + 1))) {
        bankroll -= bet;
        $("span").text("You lost your bet! Your bankroll is now " + bankroll + ".");
        $("#dollarsign").fadeOut("slow").fadeIn("slow");
      };

      $('form').trigger("reset");

    } else if (bankroll <=0) {

      $("span").text("Your bankroll is 0. Game Over.");
      
    };

  });

  //Restart game

  $("button").on("click", function() {
    bankroll = 100
    $("span").text("Game restarted. Your bankroll is back to 100.");
  });

});

