$(function() {

var randomNumber = "";
var redNumber = "";

// When page is loaded random number is generated 19-120
document.getElementById("numberBox").innerHTML =
Math.floor(Math.random() * (120 - 19)) + 19;
 
//Generate random numbers for each gem 1-12-2ndL- WORKS******
// document.getElementById("redGemButton").click =
console.log(Math.floor(Math.random() * (12 - 1)) + 1);




// function randomNumber() {
//     var min = 1;
//     var max = 12;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// document.getElementById("redGemButton").value = randomNumber();




// console.log($(this).val());












});