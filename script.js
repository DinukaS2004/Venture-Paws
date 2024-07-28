// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Example of adding a script to handle interactions, if needed
    console.log('Header loaded and ready!');
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling when clicking the "Scroll Down" button
    const scrollButton = document.querySelector('.scroll-button');

    scrollButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.testimonials-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let index = 0;
    const items = container.querySelectorAll('.testimonial');
    const totalItems = items.length;

    function showItem(index) {
        const offset = -index * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        index = (index === 0) ? totalItems - 1 : index - 1;
        showItem(index);
    });

    nextButton.addEventListener('click', function() {
        index = (index === totalItems - 1) ? 0 : index + 1;
        showItem(index);
    });

    // Optional: Automatic slide change
    setInterval(function() {
        index = (index === totalItems - 1) ? 0 : index + 1;
        showItem(index);
    }, 5000); // Change slide every 5 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('News Section loaded!');
});

