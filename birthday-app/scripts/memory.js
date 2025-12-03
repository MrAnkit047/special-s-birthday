// Memory page script

document.addEventListener('DOMContentLoaded', function() {
    const showPhotosBtn = document.getElementById('show-photos');
    const showVideosBtn = document.getElementById('show-videos');
    const photosSection = document.getElementById('photos-section');
    const videosSection = document.getElementById('videos-section');

    showPhotosBtn.addEventListener('click', function() {
        photosSection.style.display = 'block';
        videosSection.style.display = 'none';
        showPhotosBtn.classList.add('active');
        showVideosBtn.classList.remove('active');
    });

    showVideosBtn.addEventListener('click', function() {
        photosSection.style.display = 'none';
        videosSection.style.display = 'block';
        showVideosBtn.classList.add('active');
        showPhotosBtn.classList.remove('active');
    });

    // Slideshow functionality
    const images = [
        { src: "D:\\Iru's Birthday\\iri 5.jpg", title: "Our First Date" },
        { src: "public/iri2.jpg", title: "Anniversary Trip" },
        { src: "public/iri3.jpg", title: "Preety Little Baby😍" },
        { src: "public/iri4.jpg", title: "Prupose🌹" }
    ];
    let currentIndex = 0;
    const slideshowImage = document.getElementById('slideshow-image');
    const photoTitle = document.getElementById('photo-title');

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        slideshowImage.src = images[currentIndex].src;
        photoTitle.textContent = images[currentIndex].title;
    }

    // Start slideshow when photos section is shown
    showPhotosBtn.addEventListener('click', function() {
        photosSection.style.display = 'block';
        videosSection.style.display = 'none';
        showPhotosBtn.classList.add('active');
        showVideosBtn.classList.remove('active');
        // Reset to first image
        currentIndex = 0;
        slideshowImage.src = images[currentIndex].src;
        photoTitle.textContent = images[currentIndex].title;
        // Start interval
        if (window.slideshowInterval) clearInterval(window.slideshowInterval);
        window.slideshowInterval = setInterval(showNextImage, 3000); // Change image every 3 seconds
    });

    // Stop slideshow when switching to videos
    showVideosBtn.addEventListener('click', function() {
        if (window.slideshowInterval) clearInterval(window.slideshowInterval);
    });

    // Initialize slideshow on page load if photos are active
    if (photosSection.style.display !== 'none') {
        window.slideshowInterval = setInterval(showNextImage, 3000);
    }

});
