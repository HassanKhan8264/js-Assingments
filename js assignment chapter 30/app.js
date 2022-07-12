var date = new Date();
document.write(date);
document.write("<br>")

var md = new Date();
var month = md.getMonth();
var months = ["January","february","MArch","APril","May","June","July","Augest","September","October","November","December"]
document.write("Current month is"+" "+months[month]);


document.write("<br>")

var day = new Date();
var cday = day.getDay();
var days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
alert("Today is"+" "+days[cday])
if(days[cday] === days[0]){
  alert("its Fun day")
}else if(days[cday] === days[6]){
  alert("its Fun day")
}else{
  document.write(" ")
}

document.write("<br>")

var checkDays = prompt("Enter a number  for days");
if(checkDays <= 15){
  alert("ITS First Fifteen days of the month")
}else if(checkDays >= 15){
  alert("Its Last Fifteen days of the month")
}else{
  document.write("")
}
