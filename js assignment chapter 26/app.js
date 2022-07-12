var number = prompt("Enter positive integer");
var num = "number" +" "+ number;
document.write(num)
document.write("<br>")

var number = prompt("Enter positive integer for round");
var round = "round off value"+ " " + Math.round(number);
document.write(round)
document.write("<br>")

var number = prompt("Enter positive integer for floor");
var floor = "floor value"+ " " + Math.floor(number);
document.write(floor)
document.write("<br>")

var number = prompt("Enter positive integer for ceil");
var ceil = "ceil value"+ " " + Math.ceil(number);
document.write(ceil)
document.write("<br>")

 var negative = prompt("Enter integer");
var numMinus = "number" +" "+ -negative;
document.write(numMinus)
document.write("<br>")

var negative = prompt("Enter integer for -round");
var roundMinus = "round off value"+ " " + Math.round(-negative);
document.write(roundMinus)
document.write("<br>")

var negative = prompt("Enter integer for -floor");
var floorMinus = "floor value"+ " " + Math.floor(-negative);
document.write(floorMinus)
document.write("<br>")

var negative = prompt("Enter integer for -ceil");
var ceilMinus = "ceil value"+ " " + Math.ceil(-negative);
document.write(ceilMinus)