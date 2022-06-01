var score = ["120","230","320","480"]
score.sort();
document.write(score);
var friuts = ["Strawberry","apple","orange","bannana"]
document.write("<br>")
for(var f = 0; f < friuts.length; f++){
    document.write(friuts[f] + "<br>")
}
var friuts = ["Strawberry","apple","orange","bannana"]
document.write("<br>")
for(var f = 0; f < friuts.length; f++){
    document.write(friuts[f] + "<br>")
    friuts.unshift("apple")
    friuts.shift()
    friuts.pop();
    friuts.push("Strawberry");
    friuts.splice(1,2,"bananna","orange")
}
var citiesOriginal = ["Krachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list:")
document.write("<br>")
document.write(citiesOriginal)
document.write("<br>")
var cities = ["Krachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("Selected cities list:")
document.write("<br>")
document.write(cities.slice(2,4));
var cities = cities.slice (3,4);
document.write("<br>")
document.write("<br>")

var arr = ["This" , "is" , "my" , "cat"];
document.write(arr)
document.write("<br>");
document.write(arr.join("\n"))
document.write("Deveices");
document.write("<br>");
var devices = ["keyboard","mouse","printer","monitor"]
var out = ["out"]

document.write(devices)
document.write("<br>");
for(o = 0; o < devices.length; o++){
    for(d = 0; d < out.length; d++)
    document.write(out + "<br>");
    document.write(devices[o] + "<br>")
}
document.write("<br>");
 devices.slice(1,4)
var out = ["out"]

document.write(devices)
document.write("<br>");
for(o = 0 ; o < devices.length; o++){
    for(d = 0; d < out.length; d++)
    document.write(out + "<br>")
 document.write(devices[o] + "<br>");
}
