var slideIndex = 1;

showSlide(slideIndex);

function plusSlides(n){
    showSlide(slideIndex += n )
}


function currentSlide(n){
    showSlide(slideIndex = n )
}

function showSlide(n){
    var  i;

    var slides = document.getElementsByClassName("mySlides");

    var dot = document.getElementsByClassName("dot");

    //var slides = document.getElementsByClassName("mySlides");
    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    for(i = 0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "block";

    dot[slideIndex - 1].className += " active";

}