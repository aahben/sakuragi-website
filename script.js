const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let interval;

// Function to show the image at the specified index
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Event listeners for manual controls
nextButton.addEventListener('click', () => {
    nextImage();
    resetInterval();
});

prevButton.addEventListener('click', () => {
    prevImage();
    resetInterval();
});

// Function to reset the interval when a button is clicked
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextImage, 5000);
}

// Initialize the slider with the first image and start the automatic transition
showImage(currentIndex);
interval = setInterval(nextImage, 5000); // Change image every 5 seconds

document.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.dropdown').contains(event.target);

    if (!isClickInside) {
        document.querySelector('.dropdown-content').style.display = 'none';
    }
});

document.querySelector('.dropdown').addEventListener('click', function(event) {
    event.stopPropagation();
    var dropdownContent = this.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});
