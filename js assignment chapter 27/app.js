var number = prompt("Enter a number for example","3.452145");
var num = "Number" +" "+ number;
document.write(num);
document.write("<br>")


var numRound = prompt("Enter a number");
var round = "Round off value" +" "+ Math.round(numRound);
document.write(round);
document.write("<br>")


var numFloor = prompt("Enter a number");
var floor = "Round off value" +" "+ Math.floor(numFloor);
document.write(floor);
document.write("<br>")


var numCeil = prompt("Enter a number");
var ceil = "Round off value" +" "+ Math.floor(numCeil);
document.write(ceil);
document.write("<br>")
document.write("<br>")


var negative = prompt("Enter a number for example","3.452145");
var numNeg = "Number" +" "+ -negative;
document.write(numNeg);
document.write("<br>")


var negative = prompt("Enter a number");
var roundNeg = "Round off value" +" "+ Math.round(-negative);
document.write(roundNeg);
document.write("<br>")


var negative = prompt("Enter a number");
var floorNeg = "Round off value" +" "+ Math.floor(-negative);
document.write(floorNeg);
document.write("<br>")


var negative = prompt("Enter a number");
var ceilNeg = "Round off value" +" "+ Math.floor(negative);
document.write(ceilNeg);
document.write("<br>")

document.write("<br>")

var absolute = prompt("Absolute of");
var abs = "Absolute value of " +" "+ Math.abs(absolute);
document.write(abs);
document.write("<br>")
document.write("<br>")


var random = prompt("Ramdom value");
var dice = "Random value of " +" "+ Math.random(random) * 4;
document.write(dice);
if (random > 4){
    alert("number is not allow")
}
document.write("<br>")
document.write("<br>")



var head = prompt("enter name for heads");
var tails = prompt("enter name for tails");
var num = Math.random() * 2;
var floor = Math.floor(num);
if(floor === 0) {
  alert(tails + " " + "win");
}else if(floor === 1){
    alert(head + " " + "wins");
}else{
  document.write("");
}
