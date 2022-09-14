function displayMenu () {
  menuBox.classList.toggle('menuDialog');
}

const menuBox = document.getElementById('menuBox');       //variable declarations to get nodes//
const menuDialog = menuBox.querySelector('#menuDialog');
const menuBtn = menuDialog.querySelector(".hamburger");
const closeBtn = menuDialog.querySelector(".times");
const menuLinks = menuDialog.querySelector(".nav-links")

menuBtn.addEventListener('click', displayMenu);  // hamburger event listener //

closeBtn.addEventListener('click', closeMenu);   // times event listener //

// Event listener for each menu link //
Array.from(menuLinks.children).forEach((child) => child.addEventListener('click', closeMenu));
