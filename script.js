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

// Search section

  // Create an object that maps destination values to URLs
  const destinationLinks = {
    'usa': '/Destinations-pages/usa.html',
    'brazil': '/Destinations-pages/brazil.html',
    'uruguay': '/Destinations-pages/uruguay.html',
    'peru': '/Destinations-pages/peru.html',
    'japan': '/Destinations-pages/japan.html',
    'china': '/Destinations-pages/china.html',
    'india': '/Destinations-pages/india.html',
    'pakistan': '/Destinations-pages/pakistan.html',
    'netherlands': '/Destinations-pages/netherlands.html',
    'italy': '/Destinations-pages/italy.html',
    'turkey': '/Destinations-pages/turkey.html',
    'spain': '/Destinations-pages/spain.html',
    'egypt': '/Destinations-pages/egypt.html',
    'saudi-arabia': '/Destinations-pages/saudi-arabia.html',
    'dubai': '/Destinations-pages/dubai.html',
    'australia': '/Destinations-pages/australia.html',
    'new-zealand': '/Destinations-pages/newzealand.html'
  };
  

  function navigateToCountry(event) {
    event.preventDefault(); // Prevent form submission

    const destination = document.getElementById('destination').value;

    // Check if the destination is selected and available in the destinationLinks object
    if (destination && destinationLinks[destination]) {
      window.location.href = destinationLinks[destination]; // Redirect to the respective country page
    } else {
      alert('Please select a valid destination.'); // Alert if no valid destination is selected
    }
  }