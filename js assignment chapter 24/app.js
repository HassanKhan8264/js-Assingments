var word = "University of Karachi";
for (var i = 0; i < word.length; i++ ){
    document.write(word[i] + "<br>")
}
var ques4 = prompt("Enter word");
var last = ques4.lastIndexOf();
document.write("User input" + " " + ques4);
document.write("<br>")
document.write("Last Index Of Input"+ " "+ last)
document.write("<br>");
var ques5 = prompt("Enter a word Pakistan");
if(ques5 === "pakistan"){
    alert("There are two vowels is the word pakistan");
}else{
    alert("Correct the word")
}