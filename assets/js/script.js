let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function moveSlide(step) {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';
    
    // Update the current slide index
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    
    // Show the new slide
    slides[currentSlide].style.display = 'block';
}

// Initialize: Show the first image
slides[currentSlide].style.display = 'block';
