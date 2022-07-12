var cD = new Date();
document.write("Current Date"+" "+cD);
document.write("<br>");
var ago = new Date("Jun 24, 1922");
document.write("100 Years Ago"+" "+ago);

var age = prompt("Enter your Date of birth", "Nov 21 2002")
var dob = new Date("Nov 21, 2002");
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var diffYear = diff/(1000*60*60*30*12*24);
var accuage = Math.floor(diffYear);
if( age === "Nov 21 2002"){
    alert(accuage);
}else{
    alert("Enter a correct age");
    
}
// document.write(accuage);
