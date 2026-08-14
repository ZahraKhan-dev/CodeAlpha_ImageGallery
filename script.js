// ===============================
// GET ALL GALLERY IMAGES
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");

let currentImage = 0;


// ===============================
// OPEN LIGHTBOX
// ===============================

function openLightbox(index) {

    currentImage = index;

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = galleryImages[currentImage].src;

    lightbox.style.display = "flex";
}


// ===============================
// CLOSE LIGHTBOX
// ===============================

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";

}


// ===============================
// NEXT IMAGE
// ===============================

function nextImage() {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage].src;
}


// ===============================
// PREVIOUS IMAGE
// ===============================

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage].src;
}

// ===============================
// FILTER IMAGES
// ===============================

function filterImages(category) {

    const items = document.querySelectorAll(".gallery-item");

    items.forEach(function(item) {

        if (category === "all") {
            item.style.display = "block";
        } 
        else if (item.classList.contains(category)) {
            item.style.display = "block";
        } 
        else {
            item.style.display = "none";
        }

    });
}


// ===============================
// KEYBOARD CONTROLS
// ===============================

document.addEventListener("keydown", function(event) {

    const lightbox = document.getElementById("lightbox");

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            nextImage();
        }

        if (event.key === "ArrowLeft") {
            previousImage();
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

    }

});