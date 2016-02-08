var bankroll = 100; //player starts with $100

//use while loop to keep looping until bankroll is 0

while (bankroll > 0) {

  var bet = Number(prompt("Place a bet between $5 and $10 (integers only please)"));

  var numguess = Number(prompt("Choose a number between 1 and 10"));

  var randnum = Math.floor(Math.random() * 10) + 1;

  if (numguess === randnum) {
      bankroll += bet;
      alert("You won your bet! Your bankroll is now " + bankroll);
  } 
  else if ((numguess === (randnum - 1)) || (numguess === (randnum + 1))) {
      alert("You were only one number off. Your bankroll is still " + bankroll);
  } 
  else if ((numguess < (randnum - 1)) || (numguess > (randnum + 1))) {
      bankroll -= bet;
      alert("You lost your bet! Your bankroll is now " + bankroll);
  }

}