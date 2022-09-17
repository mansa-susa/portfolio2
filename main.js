// variable declarations to get nodes//
const menuBox = document.getElementById('menuBox');
const menuDialog = menuBox.querySelector('#menuDialog');
const menuBtn = menuDialog.querySelector('.hamburger');
const closeBtn = menuDialog.querySelector('.times');
const menuLinks = menuDialog.querySelector('.nav-links');

// displayMenu function declaration //
function displayMenu() {
  menuBox.classList.toggle('menuDialog');
}

// closeMenu function declaration //
function closeMenu() {
  menuBox.classList.toggle('menuDialog');
}

menuBtn.addEventListener('click', displayMenu); // hamburger event listener //

closeBtn.addEventListener('click', closeMenu); // times event listener //

// Event listener for each menu link //
Array.from(menuLinks.children).forEach((child) => child.addEventListener('click', closeMenu));
