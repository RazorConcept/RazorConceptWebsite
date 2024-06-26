document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger'); // Get the hamburger button
    const navLinks = document.getElementById('nav-links'); // Get the navigation links

    // Add click event listener to the hamburger button
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle the 'show' class to display/hide the navigation links
    });

    // Intersection Observer for the sliding animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe each card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});
