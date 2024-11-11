function openLightbox(imageSrc) {
    // Set the image source of the lightbox to the clicked image
    document.getElementById('lightbox-img').src = imageSrc;
    // Display the lightbox
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    // Hide the lightbox when clicked
    document.getElementById('lightbox').style.display = 'none';
}
