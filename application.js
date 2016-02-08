$(document).ready(function() {
  var bankroll = 100;
  $("form").submit(function(event) {
    
    event.preventDefault();
    
    var bet = parseInt($("#bet").val());

    var numguess = parseInt($("#number").val());

    var randnum = Math.floor(Math.random() * 10) + 1;

    if (bankroll > 0) { 

      if (numguess === randnum) {
        bankroll += bet;
        if (bankroll === 0) bankroll = 0;
        $("span").text("You won your bet! Your bankroll is now " + bankroll + ".");
      } else if ((numguess === (randnum - 1)) || (numguess === (randnum + 1))) {
        $("span").text("You were only one number off. Your bankroll is still " + bankroll + ".");
      } else if ((numguess < (randnum - 1)) || (numguess > (randnum + 1))) {
        bankroll -= bet;
        if (bankroll < 0) bankroll = 0;
        $("span").text("You lost your bet! Your bankroll is now " + bankroll + ".");
      };

    } else if (bankroll <=0) {

      $("span").text("Your bankroll is 0. Game Over.");
      
    };

  });

});

