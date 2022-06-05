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
