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
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let destination = document.getElementById("destination").value.trim();
    let errorMessage = document.getElementById("errorMessage");
    let valid = true; // Flag to track if the form is valid

    errorMessage.textContent = ''; // Clear previous error messages

    // Basic validation checks
    if (!name) {
        errorMessage.textContent = "Name is required.";
        valid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        valid = false;
    } else if (!/^\d{10,}$/.test(phone)) {
        errorMessage.textContent = "Phone number must be at least 10 digits and contain only numbers.";
        valid = false;
    } else if (!destination) {
        errorMessage.textContent = "Destination is required.";
        valid = false;
    }

    // If the form is invalid, prevent submission
    if (!valid) {
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