document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('fa-moon'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('light-mode'); // Change icon color
    });
});
changeAboutMeText();