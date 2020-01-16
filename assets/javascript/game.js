//Variables to hold the amount of wins and losses
var wins = 0;
var losses = 0;

//Variables for the HTML to display the text with results
var mainNumberText = document.getElementById("main-number-text"); 
var youWinText = document.getElementById("you-win-text");
var youLostText = document.getElementById("you-lost-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

function mainNumber() {
  document.getElementById("mainNumber").innerHTML =
    Math.floor(Math.random() * 120) + 19;
}
console.log(mainNumber);
