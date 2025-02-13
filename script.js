document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            if (href.startsWith("#")) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission confirmation
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload

        // Show confirmation message
        confirmationMessage.classList.remove("hidden");

        // Clear form after submission
        form.reset();

        // Hide message after 3 seconds
        setTimeout(() => {
            confirmationMessage.classList.add("hidden");
        }, 3000);
    });
});