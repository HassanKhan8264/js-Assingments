//tab zero
var btn0 = document.getElementById("btn0")
var tab0 = document.getElementById("tab0");
var icons = document.getElementById("icon")
btn0.style.borderBottom = "2px solid royalblue";
tab0.style.display = "block";
icon.style.color = "roaylblue"
//tab one
var btn1 = document.getElementById("btn1");
var tab1 = document.getElementById("tab1");

//tab two
var btn2 = document.getElementById("btn2");
var tab2 = document.getElementById("tab2");

//tab three
var btn3 = document.getElementById("btn3");
var tab3 = document.getElementById("tab3");

function tabChange(arg){
    if(arg === "0"){
        // console.log("data", typeof (arg), arg)
        // icon.style.color = "royalblue"
        tab0.style.display = "block"; 
        btn0.style.borderBottom = "2px solid royalblue"; 
        tab1.style.display = "none"; 
        tab2.style.display = "none"; 
        tab3.style.display = "none"; 
    }else{
        btn0.style.borderBottom = "none"
        
    }
    if(arg === "1"){
        // icon.style.color = "royalblue" 
        tab1.style.display = "block"; 
        btn1.style.borderBottom = "2px solid royalblue";
        tab0.style.display = "none"; 
        tab2.style.display = "none"; 
        tab3.style.display = "none"; 
    }else{
        btn1.style.borderBottom = "none";
    }
    if(arg === "2"){
        // icon.style.color = "royalblue" 
        tab1.style.display = "none"; 
        btn2.style.borderBottom = "2px solid royalblue";
        tab0.style.display = "none"; 
        tab2.style.display = "block"; 
        tab3.style.display = "none"; 
    }else{
        btn2.style.borderBottom = "none";
    }
    if(arg === "3"){
        // icon.style.color = "royalblue" 
        tab1.style.display = "none"; 
        btn3.style.borderBottom = "2px solid royalblue";
        tab0.style.display = "none"; 
        tab2.style.display = "none"; 
        tab3.style.display = "block"; 
    }else{
        btn3.style.borderBottom = "none";
    }

}
var tabs = document.getElementById("tabs");
// var m = docuemnt.getElementById("men");
var none = document.getElementById("none");
function menu(arg){
    if(arg === "0"){
        // tab0.style.display = "block";
        tab0.style.display = "block";

    }
    btn0.style.display = "block"
    btn1.style.display = "block"
    btn2.style.display = "block"
    btn3.style.display = "block"
    // m.style.display = "none"
    // none.style.display = "block";
    if(none === "block"){
        none.style.display = "block";

    }else{
    // none.style.display = "block";

    }
}
// menu();

// modal

var modal = document.getElementById("modal1")
modal.style.display = "none"
function modal1() {
    if (modal.style.display === "none") {
        modal.style.display = 'flex'
    } else {
        modal.style.display = 'none'
    }
}