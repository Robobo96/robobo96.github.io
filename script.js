// Get all elements with the class 'button_filter'
const buttons = document.querySelectorAll('.button_filter');

// Get all elements with the class 'logo'
const logos = document.querySelectorAll('.logo');

// Function to add 'is-hidden' class to elements with class 'logo'
function hideLogos() {
    logos.forEach(logo => {
        logo.classList.add('is-hidden');
    });
}

// Add click event to each button
buttons.forEach(button => {
    button.addEventListener('click', hideLogos);
});
