alert("24,53,78,91,12" + "\n" + "for detect a largest number enter a 'largest number'");
var ask = prompt("enter a question");
if(ask === "largest number") {
    alert("largest number is 91")

}else{
    alert("enter a correct word");
}
alert("24,53,78,91,12" + "\n" + "for detect a smallest number enter a 'smallest number'");
var ask = prompt("enter a question");
if(ask === "smallest number") {
    alert("smallest number is 12")

}else{
    alert("enter a correct word");
}
var number = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
for(i = 0;i < number.length;i++) {
   document.write(number[i] + "  ");
}
var students = ["Ali","Sami","Taha","Hassan"];
var scores = [58,73,89,90];
for(t = 0;t < 4;t++){
   document.write("<br>")
   for(s = 0;s < 4  ;s++){
      document.write(students[t] + " " + scores[s] + "<br>")
   }
}
var star = ["*","*","*","*","*","*","*","*"]
for(d = 0;d < star.length;d++){
   for(m = star.length -1; m < star.length;m++){
      document.write(star[d] + " " + star[m] + "<br>")
   }

}