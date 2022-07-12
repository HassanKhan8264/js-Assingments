function save() {
    var number = document.getElementById("no");
    var value = no.value;
    if(value === "" || value === "  " || value.lenght <= 2){
        document.getElementById("para").innerText = "Correct the value";
        // document.getElementById("para2").innerText = "Type Correct password";
        // document.getElementById("para3").innerText = "Character Not Allow";
        // document.getElementById("para4").innerText = "Type Correct Password";
    } else {
        document.getElementById("para").innerText = "";
        
    }
    var number2 = document.getElementById("nto");
    var value2 = nto.value;
    if(value2 === "" || value2 === "  " || value2.lenght <= 2){
        document.getElementById("para2").innerText = "Type Correct password";
    } else {
        document.getElementById("para2").innerText = "";
        
    }
    var number = document.getElementById("nt");
        var value3 = nt.value;
        if(value3 === "" || value3 === "  " || value3.lenght <= 2){
            document.getElementById("para3").innerText = "Character Not Allow";
        } else {
            document.getElementById("para3").innerText = "";
            
        }
            var number = document.getElementById("nf");
        var value4 = nf.value;
        if(value4 === "" || value4 === "  " || value4.lenght <= 2){
        document.getElementById("para4").innerText = "Type Correct Password";
        } else {
        document.getElementById("para4").innerText = "";

        }
    }



//    

