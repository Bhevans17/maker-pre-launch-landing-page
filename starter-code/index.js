const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');

let email = '';

// Checks email against regular expressions
function validateEmail(email) {
    return String(email).toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

// On keyup press add letter to email variable
emailInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    email = e.target.value;
});

// Handle form submission
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Alert user if form is empty
    if (emailInput === '') {
        alert('Oops! Please add your email');
        emailInput.value = '';
        return;
    }

    // Alert user if email is invalid
    if (!validateEmail(email)) {
        alert('Oops! That doesn’t look like an email address');
        emailInput.value = '';
        return;
    }

    // Alert user if email is sent
    alert(`Email sent from ${email}`);

    // Reset email
    email = '';
    emailInput.value = '';
});
