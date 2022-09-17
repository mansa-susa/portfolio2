// variable declarations to get nodes//
const menuBox = document.getElementById('menuBox');
const menuDialog = menuBox.querySelector('#menuDialog');
const menuBtn = menuDialog.querySelector('.hamburger');
const closeBtn = menuDialog.querySelector('.times');
const menuLinks = menuDialog.querySelector('.nav-links');

const mainSection = document.querySelector('.main-section');
const workSection = document.createElement('section');
const workSectionTitle = document.createElement('h2');
const workSectionRule = document.createElement('hr');

// Representing each cards with an object stored in an array //
const portfolioCards = [{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  cardDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project',
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project',
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project',
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project',
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project',
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project',
},
];

// displayMenu function declaration //
function displayMenu() {
  menuBox.classList.toggle('menuDialog');
}

function displayPopup() {
  const popupWindow = document.createElement('div');
  popupWindow.className = 'project-popup';
  popupWindow.innerHTML += `
                <img src="imgs/popup-mobile.png" alt="">
                <h2 class="popup-title"> Keeping track of hundreds of components </h2>
                <ul class="popup-technologies">
                  <li>Ruby on rails</li>
                  <li>css</li>
                  <li>Javascript</li>
                </ul>
                <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
                <div>
                  <button>See Live  <img src="imgs/live_icon.png" id="live-icon"></button>
                  <button>See Source <i class="fab fa-github"></i></button>
                </div>
           `;
  document.body.appendChild(popupWindow);
}

// closeMenu function declaration //
function closeMenu() {
  menuBox.classList.toggle('menuDialog');
}

workSection.className = 'work-section'; // Add class to the work section //
workSectionTitle.className = 'work-section-title'; // Add class to work sectoin title //
workSectionTitle.id = 'Portfolio'; // Add an id to the work section //
workSectionTitle.innerText = 'My Recent Works';
workSection.append(workSectionTitle, workSectionRule);

portfolioCards.forEach((card) => {
  workSection.innerHTML += `
          <article class="card-portfolio">
          <div class="img-placeholder"></div>
          <div class="project-description">
            <h3>${card.cardTitile}</h3>
            <ul class="tech-skills">
              <li>${card.technologies[0]}</li>
              <li>${card.technologies[1]}</li>
              <li>${card.technologies[2]}</li>
              <li>${card.technologies[3]}</li>
            </ul>
            <button type="button" class="project-button">${card.button}</button>
          </div>
        </article>`;
});

mainSection.after(workSection);

const projectButtons = document.querySelectorAll('.work-section .project-button');
projectButtons.forEach((button) => button.addEventListener('click', displayPopup));

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const error = document.querySelector('#error');

menuBtn.addEventListener('click', displayMenu); // hamburger event listener //

closeBtn.addEventListener('click', closeMenu); // times event listener //

// Event listener for each menu link //
Array.from(menuLinks.children).forEach((child) => child.addEventListener('click', closeMenu));

function validateEmail(emailchecker) {
  if (emailchecker.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  if (validateEmail(email.value)) {
    error.textContent = '';
  } else {
    e.preventDefault();
    error.style.display = 'flex';
    error.textContent = 'Please enter a valid email address in lowercase';
  }
});