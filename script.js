// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const galleryImages = document.querySelectorAll('.photo-scroll img');

// Open lightbox on image click
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src; // Set the lightbox image to the clicked image
        lightbox.classList.add('active'); // Show the lightbox
    });
});

// Close lightbox when 'close' button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close lightbox when the background is clicked (outside the image)
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && e.target !== closeBtn) {
        lightbox.classList.remove('active');
    }
});


const photoScroll = document.querySelector('.photo-scroll');

// Function to scroll the gallery
function scrollGallery() {
    const scrollAmount = 300; // Adjust the scroll amount as needed
    const maxScrollLeft = photoScroll.scrollWidth - photoScroll.clientWidth;

    // Check if we've reached the end
    if (photoScroll.scrollLeft >= maxScrollLeft) {
        photoScroll.scrollTo({ left: 0, behavior: 'smooth' }); // Go back to the beginning
    } else {
        photoScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Set an interval for auto-scrolling
let scrollInterval = setInterval(scrollGallery, 3000);

// Pause auto-scroll on hover
photoScroll.addEventListener('mouseover', () => {
    clearInterval(scrollInterval);
});

// Resume auto-scroll when the mouse leaves
photoScroll.addEventListener('mouseout', () => {
    scrollInterval = setInterval(scrollGallery, 3000);
});


const header = document.querySelector('#animated-header');
const waveEffect = document.querySelector('header::after');

// Mouse move effect
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate the position relative to the center of the screen
    const xOffset = (clientX / windowWidth - 0.5) * 20; // Adjust the multiplier for intensity
    const yOffset = (clientY / windowHeight - 0.5) * 20;

    // Move the header slightly based on mouse position
    header.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

// Multi-color wave hover effect
header.addEventListener('mouseenter', () => {
    header.style.backgroundPosition = '200%'; // Shift the gradient
    header.style.transition = 'background-position 1s linear'; // Smooth gradient animation
});

header.addEventListener('mouseleave', () => {
    header.style.backgroundPosition = '0%'; // Reset gradient
});



// Select all sections to observe
const sections = document.querySelectorAll('.fade-section');

// Set up the Intersection Observer
const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the section is in view
            entry.target.classList.add('visible');
        } else {
            // Remove the 'visible' class when the section is out of view (optional)
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Attach observer to each section
sections.forEach(section => observer.observe(section));

