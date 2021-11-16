var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


var HackslideIndex = 1;
HackshowSlides(HackslideIndex);

function HackplusSlides(n) {
    showSlides(HackslideIndex += n);
}

function HackcurrentSlide(n) {
    showSlides(HackslideIndex = n);
}

function HackshowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("HackmySlides");
    var dots = document.getElementsByClassName("Hackdot");

    if (n > slides.length) {HackslideIndex = 1}
    if (n < 1) {HackslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[HackslideIndex-1].style.display = "block";
    dots[HackslideIndex-1].className += " active";
}
