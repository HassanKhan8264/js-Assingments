var colorS = ["red","green","blue","pink"]
var colorName;
for(colorName = 0; colorName < colorS.length; colorName++) {
    document.write(colorS[colorName] + "<br>")
}
var askColor = prompt("Enter a color that you want for top placement");
var colorS = ["red","green","blue","pink"]
var colorName;
colorS.splice ( 0 , 1 , askColor);
for(colorName = 0; colorName < colorS.length; colorName++) {
    document.write("<h2>" + colorS[colorName] + "<br>" + "</h2>")
}
var askColor = prompt("enter a color that you want for end placehment");
var colorS = ["purple","yellow","black","white"]
var colorName;
colorS.splice ( 2 , 4 , askColor);
for(colorName = 0; colorName < colorS.length; colorName++) {
    document.write("<h2>" + colorS[colorName] + "<br>" + "</h2>")
}
var askColor = prompt("enter a color that you want for mid placehment");
var colorS = ["skyblue","seagreen","dark","aqua","sea"]
var colorName;
colorS.splice ( 2 ,1, askColor);
for(colorName = 0; colorName < colorS.length; colorName++) {
    document.write("<h2>" + colorS[colorName] + "<br>" + "</h2>")
}
var colorS = ["purple","pinkish","red","green","blue","pink"]
var colorName;
for(colorName = 0; colorName < colorS.length; colorName++) {
    document.write(colorS[colorName] + "<br>")
}
document.write("<br>")
var colorS = ["purple","first color deleted","red","green","blue","pink"]
var colorName;
colorS.shift()
for(colorName = 0; colorName < colorS.length; colorName++) {
    document.write(colorS[colorName] + "<br>")
}
document.write("<br>")
var colorS = ["purple","first color deleted","red","green","last color deleted","pink"]
var colorName;
colorS.pop()
for(colorName = 0; colorName < colorS.length; colorName++) {
    document.write(colorS[colorName] + "<br>")
}
// F and G for Later
// var enterColor = prompt("Enter the position and color nmae where your want to add color");
// var colorSs = ["skyblue","seagreen","dark","aqua","sea"]
// var colorNaam;
// colorS.splice ();
// for(colorNaam = 0; colorNaam < colorSs.length; colorNaam++) {
//     document.write("<h2>" + colorSs[colorNaam] + "<br>" + "</h2>")
// }
// var enterColor = prompt("Enter the position and color nmae where your want to add color");
// var colorSs = ["skyblue","seagreen","dark","aqua","sea"]
// var colorNaam;
// colorS.splice ();
// for(colorNaam = 0; colorNaam < colorSs.length; colorNaam++) {
//     document.write("<h2>" + colorSs[colorNaam] + "<br>" + "</h2>")
// }
var score = ["120","230","320","480"]
score.sort();
document.write(score);