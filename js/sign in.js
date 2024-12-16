document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        let valid = true;
        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.classList.add('error'); // Add error class for styling
            } else {
                input.classList.remove('error'); // Remove error class if valid
            }
        });

        if (valid) {
            alert("Form submitted successfully!");
            // Here you can add your AJAX request or further processing
            // For example: 
            // fetch('/submit', { method: 'POST', body: new FormData(form) });
        } else {
            alert("Please fill in all fields.");
        }
    });
});


