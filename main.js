const menuBox = document.getElementById('menuBox');
const menuDialog = menuBox.querySelector('#menuDialog');
const menuBtn = menuDialog.querySelector(".hamburger");
const closeBtn = menuDialog.querySelector(".times");
const menuLinks = menuDialog.querySelector(".nav-links")

menuBtn.addEventListener('click', displayMenu);

closeBtn.addEventListener('click', closeMenu);

Array.from(menuLinks.children).forEach((child) => child.addEventListener('click', closeMenu));
