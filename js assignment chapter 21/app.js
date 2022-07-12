var firstName = prompt("Enter your first Name");
var lastName = prompt("Enter your last Name");
document.write("Hello" + " "+ firstName +" "+ lastName)
document.write("<br>")
var fav = prompt("What is your favoruit Mobile");
alert("Length of input is" +" "+ fav.length);
var ques = prompt("Enter word pakistani for indexOf");
alert("index of n is" +" "+ ques.indexOf("n"))
var ques2 = prompt("Enter Word Hello World");
alert(ques2.lastIndexOf("l")) 
var ques3 = prompt("Enter a word Pakistani for charAt");
alert("chart at 3 in pakistani is" +" "+ ques3.charAt(3));
var city = "Hyderabad";
var rePlace = city.replace("Hyderabad","Islamabad")
document.write("City" +" "+ city)
document.write("<br>")
document.write("after Replacement" +" "+ rePlace)
document.write("<br>")
var messAge = "Ali and Sami are the best friends,They Play Cricket and football together";
document.write("<br>")
document.write(messAge);
var rePla = messAge.replace( "Ali and Sami are the best friends,They Play Cricket and football together", "Ali & sami are the best friends they play football together.")
document.write("<br>")
document.write("After Replacement" +" "+ rePla)
document.write("<br>")
var string = prompt("Enter any number")
document.write("value"+" "+ string);
document.write("<br>")
document.write("type"+" "+ "String");
document.write("<br>")
document.write("value"+" "+ string);
document.write("<br>");
var changeValue = parseInt(string)
document.write("type"+" "+ "number");



