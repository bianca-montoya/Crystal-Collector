$("document").ready(function(){


var randomNumber = [Math.floor(Math.random() * (120 - 19 + 1)) + 19];
 

$("#random-number").html("Random Number = " + randomNumber);


var sum = 0;
var wins = 0;
var losses = 0;


var pinkValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
console.log(pinkValue);

var greenValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
console.log(greenValue);

var yellowValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
console.log(yellowValue);

var purpleValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
console.log(purpleValue);

$("#jewel-pink").on("click", function(){
$("#wins").html("Wins = " + wins);
$("#losses").html("Losses = " + losses);

sum = parseInt(pinkValue) + parseInt(sum);
$("#total-score").html("Total Score = " + sum);
console.log(sum);
winsOrLosses();

  });

$("#jewel-green").on("click", function(){
$("#wins").html("Wins = " + wins);
$("#losses").html("Losses = " + losses);

sum = parseInt(greenValue) + parseInt(sum);
$("#total-score").html("Total Score = " + sum);
console.log(sum);
winsOrLosses();

  });

$("#jewel-yellow").on("click", function(){
$("#wins").html("Wins = " + wins);
$("#losses").html("Losses = " + losses);

sum = parseInt(yellowValue) + parseInt(sum);
$("#total-score").html("Total Score = " + sum);
console.log(sum);
winsOrLosses();

  });

$("#jewel-purple").on("click", function(){
$("#wins").html("Wins = " + wins);
$("#losses").html("Losses = " + losses);

sum = parseInt(purpleValue) + parseInt(sum);
$("#total-score").html("Total Score = " + sum);
console.log(sum);
winsOrLosses();

  });

function winsOrLosses(){
  if (sum == randomNumber){
    wins++;
    $("#wins").html("Wins = " + wins);
    $("#losses").html("Losses = " + losses);
    sum = 0;
    restart ();
  }


  if (sum > randomNumber){
    losses++;
    $("#losses").html("Losses = " + losses);
    $("#wins").html("Wins = " + wins);
    sum = 0;
    restart ();
  }

}

function restart(){

var randomNumber = [Math.floor(Math.random() * (120 - 19 + 1)) + 19];
 

$("#random-number").html("Random Number = " + randomNumber);


sum = 0;


pinkValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
 console.log(pinkValue);
greenValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
console.log(greenValue);

yellowValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
console.log(yellowValue);

purpleValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
console.log(purpleValue);




}


});
