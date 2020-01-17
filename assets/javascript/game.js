$(document).ready(function(){

//Variables to hold the amount of wins and losses
var wins = 0;
var losses = 0;
var randomNumber=Math.floor(Math.random() * 120) + 19; 
var purpleNumber = Math.floor(Math.random()*12)+1;
var whiteNumber =Math.floor(Math.random()*12)+1;
var blueNumber =Math.floor(Math.random()*12)+1;
var greenNumber =Math.floor(Math.random()*12)+1;

console.log("Purple " + purpleNumber);
console.log("White " + whiteNumber);
console.log("Blue " + blueNumber);
console.log("Green " + greenNumber);

//Variables for the HTML to display the text with results
$("#main-number-text").text(randomNumber);
var mainNumberText = document.getElementById("main-number-text"); 
var youWinText = document.getElementById("you-win-text");
var youLostText = document.getElementById("you-lost-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

//Generate a random number between 19 and 120 and display it in the blue box

//Assign a random number between 1 and 12 to each crystal

//NOT On click, but on document. ready. so it stays the same. have the value of the crystal clicked, the number is displayed on the bottom square and it is added on with each click
// $(".purple").click(function () {
//     purpleNumber=Math.floor(Math.random() * 12) + 1
    
// })
// $(".white").click(function () {
//     whiteNumber=Math.floor(Math.random() * 12) + 1
    
// })
// $(".blue").click(function () {
//     blueNumber=Math.floor(Math.random() * 12) + 1
    
// })
// $(".green").click(function () {
//     greenNumber=Math.floor(Math.random() * 12) + 1
    
// })
//If the number is smaller than above, continue, if it matches, you win, if it goes over, you lose and the computer generates a new random number

});