// JavaScript to handle the hamburger menu functionality

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger'); // Get the hamburger button
    const navLinks = document.getElementById('nav-links'); // Get the navigation links

    // Add click event listener to the hamburger button
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle the 'show' class to display/hide the navigation links
    });
});
