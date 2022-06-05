
var num = [1,2,3,4,5,6,7,8,9,10];
for(n = 0;n < num.length; n++) {
    document.write(num[n] + "  ");

}
document.write("<br>")
var num2 = [1,2,3,4,5,6,7,8,9,10];
for(d = num2.length -1;d >= 0; d--)  {
    document.write(num2[d] + "  ");

}
var item = ["cake","apple pie","cookie","chips","patties","ice cream"];
var want = prompt("ente bakery item");
if(want === "cake"){
    alert("cake is available at index 0 in our bakery")
}
else{
    alert("this item is not available here");
}
if(want === "apple pie"){
    alert("apple pie is available at index 1 in our bakery")
}
else{
    alert("this item is not available here");
}
if(want === "cookie"){
    alert("cookie is available at index 2 in our bakery")
}
else{
    alert("this item is not available here");
}
if(want === "chips"){
    alert("chips is available at index 3 in our bakery")
}
else{
    alert("this item is not available here");
}
if(want === "patties"){
    alert("patties is available at index 4 in our bakery")
}
else{
    alert("this item is not available here");
}
if(want === "ice cream"){
    alert("ice cream is available at index 5 in our bakery")
}
else{
    alert("this item is not available here");
}