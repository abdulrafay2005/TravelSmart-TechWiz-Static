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
  document.getElementById("reviewForm").addEventListener("submit", function(event) {
    let name = document.getElementById("reviewName").value.trim();
    let destination = document.getElementById("reviewDestination").value.trim();
    let tourRating = document.getElementById("tourRating").value;
    let serviceRating = document.getElementById("serviceRating").value;
    let reviewMessage = document.getElementById("reviewMessage").value.trim();
    let errorMessage = document.getElementById("reviewErrorMessage");
    let valid = true; // Flag to track if the form is valid

    errorMessage.textContent = ''; // Clear previous error messages

    // Validation checks
    if (!name) {
        errorMessage.textContent = "Your name is required.";
        valid = false;
    } else if (!destination) {
        errorMessage.textContent = "Destination name is required.";
        valid = false;
    } else if (!tourRating) {
        errorMessage.textContent = "Please rate the tour.";
        valid = false;
    } else if (!serviceRating) {
        errorMessage.textContent = "Please rate the service.";
        valid = false;
    } else if (!reviewMessage) {
        errorMessage.textContent = "Please provide your review message.";
        valid = false;
    }

    // Prevent form submission if the form is invalid
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