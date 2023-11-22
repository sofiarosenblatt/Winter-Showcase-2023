let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("slide_dot");
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

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function loadProgram() {    
    // load prev and next buttons and slide number dots
    let prevBtn = document.getElementsByClassName("prev")[0];
    let nextBtn = document.getElementsByClassName("next")[0];
    let dots =  document.getElementsByClassName("slide_dot");
    
    // make them visible
    prevBtn.style.visibility = "visible";
    nextBtn.style.visibility = "visible";
    for (d = 0; d < dots.length; d++) { dots[d].style.visibility = "visible"; };

    // determine padding based on window size
    var paddingBottom = "pb-5";
    var paddingTop = "pt-5";
    if (window.innerWidth < 575) {
        btnPadding = "8px";
        prevBtn.style.padding = "8px";
        nextBtn.style.padding = "8px";
        paddingBottom = "pb-3";
        paddingTop = "pt-3";
    }

    // start slide div
    var text = `<div class="mySlides" name="${1} slide">`;
    text += `<div class="container justify-content-center align-items-center"><img class="program-img" src="./static/images/monday-page-1.png"></img></div></div></div></div>`
    text += `<div class="mySlides" name="${2} slide">`;
    text += `<div class="container justify-content-center align-items-center"><img class="program-img" src="./static/images/monday-page-2.png"></img></div></div>`
    text += `<div class="mySlides" name="${3} slide">`;
    text += `<div class="container justify-content-center align-items-center"><img class="program-img" src="./static/images/monday-page-3.png"></img></div></div>`

    performances_container.innerHTML += text;
    // add slide number dots based on total number of slides
    showSlides(slideIndex);
}