document.addEventListener('DOMContentLoaded', () => {
    const infoForm = document.getElementById('infoForm');
    const newsletterForm = document.getElementById('newsletterForm');

    infoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(infoForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        alert(`Thank you for submitting your information, ${name}!`);
        // Here you can add code to send the form data to your server
        infoForm.reset();
    });

    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(newsletterForm);
        const email = formData.get('newsletter-email');
        alert(`Thank you for subscribing with ${email}!`);
        // Here you can add code to send the form data to your server
        newsletterForm.reset();
    });
});
