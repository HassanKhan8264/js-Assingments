var date = new Date();
document.write(date)
document.write("<br>")

var secs = date.getTime();
document.write("Elapes millionseconds since January"+" "+secs)
document.write("<br>")
document.write("<br>")


var dates = new Date("thu DEC 31")
document.write(dates)
document.write("<br>")
var rDate = new Date("June 18, 2015")
var cdate = rDate.getTime();
document.write("Seconds since june 18, 2015 "+" "+cdate)