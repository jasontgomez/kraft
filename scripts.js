let slideIndex = 0;
carousel();

function carousel() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade");
    }
    slides[slideIndex - 1].classList.add("fade");
    }, 100);
    setTimeout(carousel, 5000); // Change image every 5 seconds
}