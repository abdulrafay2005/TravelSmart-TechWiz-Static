// MOBILE MENU

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('active');
      });
    });
  });

  // Contact us form 
  document.getElementById("travelForm").addEventListener("submit", function(event) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let destination = document.getElementById("destination").value;
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = ''; // Clear previous error messages

        // Basic validation checks
        if (!name) {
            errorMessage.textContent = "Name is required.";
            event.preventDefault();
        } else if (!email.includes("@")) {
            errorMessage.textContent = "Valid email is required.";
            event.preventDefault();
        } else if (phone.length < 10) {
            errorMessage.textContent = "Phone number must be at least 10 digits.";
            event.preventDefault();
        } else if (!destination) {
            errorMessage.textContent = "Destination is required.";
            event.preventDefault();
        }
    });

// Smooth scroll

// Define a function to scroll to the top
function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

// Call the function when the window is loaded
window.onload = function () {
  scrollToTop();
};

// Call the function when the page is reloaded
window.addEventListener('beforeunload', function () {
  scrollToTop();
});