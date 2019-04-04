$(function () {

  var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  var userScore = 0;
  var wins = 0;
  var loss = 0;

  // When page is loaded random number is generated 19-120
  $("#numberBox").text(randomNumber);

  // Displays current wins and losses
  $("#userScore").text(userScore);
  $("#wins").text("Wins: " + wins);
  $("#loss").text("Losses: " + loss);


  //Generate random numbers for each gem 1-12-2ndL- WORKS******
  var redGem = Math.floor(Math.random() * 12 + 1);
  console.log(redGem);

  var blueGem = Math.floor(Math.random() * 12 + 1);
  console.log(blueGem);

  var goldGem = Math.floor(Math.random() * 12 + 1);
  console.log(goldGem);

  var greenGem = Math.floor(Math.random() * 12 + 1);
  console.log(greenGem);


  // on click, sets userscore to gem that is cicked
  $("#redGemButton").click(function () {
    userScore += redGem;
    $("#userScore").text(userScore);
    startGame();
  });

  $("#blueGemButton").click(function () {
    userScore += blueGem;
    $("#userScore").text(userScore);
    startGame();
  });

  $("#goldGemButton").click(function () {
    userScore += goldGem;
    $("#userScore").text(userScore);
    startGame();
  });

  $("#greenGemButton").click(function () {
    userScore += greenGem;
    $("#userScore").text(userScore);
    startGame();
  });

  function startGame() {
    if (userScore === randomNumber) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    }
    else if (randomNumber < userScore) {
      loss++;
      $("#loss").text("Losses: " + loss);
      resetGame();
    }
  }

  function resetGame() {
    userScore = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    redGem = Math.floor(Math.random() * 12 + 1);
    blueGem = Math.floor(Math.random() * 12 + 1);
    goldGem = Math.floor(Math.random() * 12 + 1);
    greenGem = Math.floor(Math.random() * 12 + 1);


    $("#numberBox").text(randomNumber);
    $("#userScore").text(userScore);
    $("#wins").text("Wins: " + wins);
    $("#loss").text("Losses: " + loss);


  }


});