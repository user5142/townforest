// Display and hide hamburger menu on click
const burgerMenu = () => {
  const burgerMenu = document.querySelector("#burger-links");
  const xIcon = document.querySelector("#x-icon");
  const burgerIcon = document.querySelector("#burger-icon");

  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
    xIcon.style.display = "none";
    burgerIcon.style.display = "inline";
  } else {
    burgerMenu.style.display = "block";
    burgerIcon.style.display = "none";
    xIcon.style.display = "inline";
  }
};

// Event listeners
// Hamburger menu
const burgerIcon = document.querySelector("#hamburger-icon");
const projectsNav = document.querySelector("#burger-links");
if (burgerIcon != null) {
  burgerIcon.addEventListener("click", burgerMenu);
  projectsNav.addEventListener("click", burgerMenu);
};

// Random fun facts
const funButton = document.querySelector("#fun-button");
if (funButton != null) {
  funButton.addEventListener("click", randomFunFact);
};

// Nav bar drop shadow
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.fixed-header');
  const scrolled = window.scrollY;

  if (scrolled > 0) {
    navbar.classList.add('nav-scroll');
  } else {
    navbar.classList.remove('nav-scroll');
  }
});

// Copy email to clipboard
function copyEmail() {
  const contactButton = document.getElementById('quote-button');
  const email = "hatch2k3@proton.me";
  navigator.clipboard.writeText(email).then(() => {
    // Show notification;
    contactButton.innerHTML = `Email copied!`;
    // Hide the notification after 3 seconds
    setTimeout(() => {
      contactButton.innerHTML = `Request a quote`;
    }, 3000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}