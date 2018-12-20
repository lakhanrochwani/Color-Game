var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons= document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquares()
  reset();
}

function setUpModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy"? numSquares = 3: numSquares= 6;
      reset();
    });
  }
}
function setUpSquares(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click",function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent="Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "PLAY AGAIN";
      }
      else{
       this.style.backgroundColor = "#232323";
       messageDisplay.textContent="Bad luck!";
      }
    });
  }
}


function reset(){
  //Generate new Colors
  colors = generateRandomColors(numSquares);
  // Pick a random color from array
  pickedColor= pickColor();
  //Change color dispaly to picked colors
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent="NEW COLORS";
  //Change all 6 Colors
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
         squares[i].style.backgroundColor = colors[i];
         squares[i].style.display = "block";
       }
       else{
         squares[i].style.display = "none";
       }
  }
  //reset the color of h1 as background of body
  h1.style.backgroundColor = "steelblue";
}
// easy.addEventListener("click",function(){
//   hard.classList.remove("selected");
//   easy.classList.toggle("selected");
//   //Generate new Colors
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   // Pick a random color from array
//   pickedColor= pickColor();
//   //Change color dispaly to picked colors
//   colorDisplay.textContent = pickedColor;
//   //Change all 6 Colors
//   for (var i = 0; i < squares.length; i++) {
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
//   }
// });
// hard.addEventListener("click",function(){
//   easy.classList.remove("selected");
//   hard.classList.toggle("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   // Pick a random color from array
//   pickedColor= pickColor();
//   //Change color dispaly to picked colors
//   colorDisplay.textContent = pickedColor;
//   //Change all 6 Colors
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click",function(){
 reset();
});
function changeColors(color){
   for (var i = 0; i < squares.length; i++) {
     squares[i].style.backgroundColor = color;
   }
 }
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr =[]
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  // Slect a red from "0-255"
  var r = Math.floor(Math.random() * 256);
  // Slect a blue from "0-255"
  var g = Math.floor(Math.random() * 256);
  // Slect a green from "0-255"
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
