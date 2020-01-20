$(document).ready(function() {
  //Variables to hold the amount of wins and losses
  var wins = 0;
  var losses = 0;
  //Generate a random number between 19 and 120 and display it in the blue box
  var randomNumber = Math.floor(Math.random() * 120) + 19;
  //Assign a random number between 1 and 12 to each crystal
  var purpleNumber = Math.floor(Math.random() * 12) + 1;
  var whiteNumber = Math.floor(Math.random() * 12) + 1;
  var blueNumber = Math.floor(Math.random() * 12) + 1;
  var greenNumber = Math.floor(Math.random() * 12) + 1;
  //Creating variable to hold amount of total score
  var totalScore = 0;

  console.log("Purple " + purpleNumber);
  console.log("White " + whiteNumber);
  console.log("Blue " + blueNumber);
  console.log("Green " + greenNumber);

  function gameReset(){
    wins = 0;
    losses = 0;
    //Generate a random number between 19 and 120 and display it in the blue box
    randomNumber = Math.floor(Math.random() * 120) + 19;
    //Assign a random number between 1 and 12 to each crystal
    purpleNumber = Math.floor(Math.random() * 12) + 1;
    whiteNumber = Math.floor(Math.random() * 12) + 1;
    blueNumber = Math.floor(Math.random() * 12) + 1;
    greenNumber = Math.floor(Math.random() * 12) + 1;
    //Creating variable to hold amount of total score
    totalScore = 0;
    $("#main-number-text").text(randomNumber);
   
    console.log("Purple " + purpleNumber);
    console.log("White " + whiteNumber);
    console.log("Blue " + blueNumber);
    console.log("Green " + greenNumber);
  }

  function testEndGame() {
    //If the number is smaller than above, continue, if it matches, you win, if it goes over, you lose and the computer generates a new random number
    if (totalScore === randomNumber) {
      wins++;
      $(".wins-text").text("Wins: " + wins);
      console.log("you win");
      gameReset();
      
    }
    if (totalScore > randomNumber) {
      losses++;
      $(".losses-text").text("Losses: " + losses);
      console.log("you went too far");
      gameReset();
     
    }
  }

  //Variables for the HTML to display the text with results
  $("#main-number-text").text(randomNumber);
  // var mainNumberText = document.getElementById("main-number-text");
  // var youWinText = document.getElementById("you-win-text");
  // var youLostText = document.getElementById("you-lost-text");
  // var winsText = document.getElementById("wins-text");
  // var lossesText = document.getElementById("losses-text");
  $("total-score-text").text(totalScore);
  $("");

  //NOT On click, but on document. ready. so it stays the same. have the value of the crystal clicked, the number is displayed on the bottom square and it is added on with each click
  $(".purple").click(function() {
    totalScore = totalScore + purpleNumber;
    $(".total-score-text").text("Your score is: " + totalScore);
    testEndGame()
  });

  $(".white").click(function() {
    totalScore = totalScore + whiteNumber;
    $(".total-score-text").text("Your score is: " + totalScore);
    testEndGame()
  });

  $(".blue").click(function() {
    totalScore = totalScore + blueNumber;
    $(".total-score-text").text("Your score is: " + totalScore);
    testEndGame()
  });
  $(".green").click(function() {
    totalScore = totalScore + greenNumber;
    $(".total-score-text").text("Your score is: " + totalScore);
    testEndGame()
  });
});
