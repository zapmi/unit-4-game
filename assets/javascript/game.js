$(function() {

var randomNumber = "";

// When page is loaded random number is generated 19-120
document.getElementById("numberBox").innerHTML =
Math.floor(Math.random() * (120 - 19)) + 19;
 
//Generate random numbers for each gem 1-12-2ndL- WORKS******
var redGem = Math.floor(Math.random() * 12 + 1);
console.log(redGem);

var blueGem = Math.floor(Math.random() * 12 + 1);
console.log(blueGem);

var goldGem = Math.floor(Math.random() * 12 + 1);
console.log(goldGem);

var greenGem = Math.floor(Math.random() * 12 + 1);
console.log(greenGem);





// document.getElementById("blueGemButton").innerHTML =
// Math.floor(Math.random() * (13 - 1)) + 1;

// document.getElementById("goldGemButton").innerHTML =
// Math.floor(Math.random() * (13 - 1)) + 1;

// document.getElementById("greenGemButton").innerHTML =
// Math.floor(Math.random() * (13 - 1)) + 1;

//************************************************************************** */


// var firstNumber = "";
// var secondNumber = "";
// var operator = "";
// // var result = "";
// var gemVal1 = Math.floor(Math.random() * (12 - 1)) + 1;


// $(".number").on("click", function(){
//   console.log($(this).val());
//   if(!operator){
//     firstNumber += $(this).val();
//     console.log("First Number: ", firstNumber)
//     $("#first-number").text(firstNumber);
//   }else {
//     secondNumber += $(this).val();
//     console.log("second Number: ", secondNumber)
//     $("#second-number").text(secondNumber);

//   }
// })







//****************************************************************************** */
// function randomNumber() {
//     var min = 1;
//     var max = 12;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// document.getElementById("redGemButton").value = randomNumber();




// console.log($(this).val());












});