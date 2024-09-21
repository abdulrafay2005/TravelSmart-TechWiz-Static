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


// SORTING SYSTEM
document.getElementById('sorting-options').addEventListener('change', function () {
  const selectedOption = this.value;
  const destinationSection = document.getElementById('destinations-section');
  const containers = destinationSection.querySelectorAll('.destinations-container');

  containers.forEach(container => {
    const cards = Array.from(container.querySelectorAll('.destination-card'));

    // Sort cards based on the selected option
    const sortedCards = sortCards(cards, selectedOption);

    // Append sorted cards back to the container
    sortedCards.forEach(card => container.appendChild(card));
  });
});

// Function to sort cards based on the selected option
function sortCards(cards, option) {
  switch (option) {
    case 'name':
      return cards.sort((a, b) => compareCountry(a, b));
    case 'reverse':
      return cards.sort((a, b) => compareCountry(b, a));
    case 'popularity':
      return cards.sort((a, b) => comparePopularity(a, b));
    case 'reviews':
      return cards.sort((a, b) => compareReviews(a, b));
    case 'default':
      return resetToDefaultOrder(cards);
    default:
      return cards;
  }
}

// Comparison functions
function compareCountry(a, b) {
  return a.getAttribute('data-country').toLowerCase().localeCompare(b.getAttribute('data-country').toLowerCase());
}

function comparePopularity(a, b) {
  return parseInt(b.getAttribute('data-popularity'), 10) - parseInt(a.getAttribute('data-popularity'), 10);
}

function compareReviews(a, b) {
  return parseFloat(b.getAttribute('data-reviews')) - parseFloat(a.getAttribute('data-reviews'));
}

// Function to reset to default order
function resetToDefaultOrder(cards) {
  return cards.sort((a, b) => {
    return parseInt(a.getAttribute('data-index')) - parseInt(b.getAttribute('data-index'));
  });
}


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