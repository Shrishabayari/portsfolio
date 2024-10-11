document.addEventListener('DOMContentLoaded', function () {
    // Open the modal when "Know More" button is clicked
    const knowMoreButtons = document.querySelectorAll('.know-more');

    knowMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal-target');
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.classList.add('stop-scrolling');
            }
        });
    });

    // Close the modal when the close button is clicked
    const closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.Modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.classList.remove('stop-scrolling');
            }
        });
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function (e) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.classList.remove('stop-scrolling');
            }
        });
    });

    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide img');
        let currentIndex = 0;

        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        // Show the first slide
        slides[currentIndex].style.display = 'block';

        // Show the next slide
        nextButton.addEventListener('click', () => {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].style.display = 'block';
        });

        // Show the previous slide
        prevButton.addEventListener('click', () => {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            slides[currentIndex].style.display = 'block';
        });
    });
});

