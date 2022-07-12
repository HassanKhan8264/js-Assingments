
var num = prompt("Guess the number");
var rand = Math.random() * 10;
var guessFloor = Math.floor(rand);
if (num === guessFloor){
  alert("You are correct")
}else if(num >= 11){
  alert("Not allow")
}else{
  alert("That was close")
}
// document.write(guessFloor)