var d = new Date();
document.write(d)

document.write("<br>")
document.write("<br>")

var firstname = prompt("Enter Your First name")
var lastname = prompt("Enter Your last name")
document.write("Hello" + " "+ firstname + lastname)

document.write("<br>")
document.write("<br>")

var val1 = prompt("Enter a fisrt value");
var sign = prompt("Enter a operator");
var val2 = prompt("Enter a second value");
 
if (sign === "+") {
    document.write((+val1)+(+val2))
}
else if (sign === "-") {
    document.write(val1 - val2);
}
else if (sign === "*") {
    document.write(val1 * val2);
}
else if (sign === "/") {
    document.write(val1 / val2);
}
else if (sign === "%") {
    document.write(val1 / val2 * 100 + "%");

}
