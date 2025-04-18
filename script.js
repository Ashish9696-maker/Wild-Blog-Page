// Get elements
const sidenav = document.querySelector('.sidenav');
const hamburgerIcon = document.querySelector('.fa-bars');
const backButton = document.getElementById('back-btn');

// Toggle side navigation when hamburger icon is clicked
hamburgerIcon.addEventListener('click', function() {
  if (sidenav.style.width === '250px') {
    sidenav.style.width = '0';
  } else {
    sidenav.style.width = '250px';
  }
});

// Close sidenav when "Back" is clicked
backButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent link from navigating
  sidenav.style.width = '0'; // Close the sidenav
});

// Add loaded class to body on window load
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});