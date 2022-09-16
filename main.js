// variable declarations to get nodes//
const menuBox = document.getElementById('menuBox');
const menuDialog = menuBox.querySelector('#menuDialog');
const menuBtn = menuDialog.querySelector('.hamburger');
const closeBtn = menuDialog.querySelector('.times');
const menuLinks = menuDialog.querySelector('.nav-links');

let workSection = document.createElement('section');
let workSectionTitle = document.createElement('h2');
let workSectionRule = document.createElement('hr');
let cardNumbers = 6;
let portfolioCard = [{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project'
},
 
  {
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project'
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project'
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project'
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project'
},

{
  cardTitile: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  button: 'See Project'
}
];

// displayMenu function declaration //
function displayMenu() {
  menuBox.classList.toggle('menuDialog');
}

// closeMenu function declaration //
function closeMenu() {
  menuBox.classList.toggle('menuDialog');
}

workSection.className= 'work-section';
workSectionTitle.className= 'work-section-title'
workSection.appendChild(workSectionTitle,);
workSection.appendChild(workSectionRule);

portfolioCard.forEach(project => {
   workSection.innerHTML += `
          <article class="card-portfolio">
          <div class="img-placeholder"></div>
          <div class="project-description">
            <h3>${project['cardTitile']}</h3>
            <ul class="tech-skills">
              <li>${project['technologies'][0]}</li>
              <li>${project['technologies'][1]}</li>
              <li>${project['technologies'][2]}</li>
              <li>${project['technologies'][3]}</li>
            </ul>
            <button type="button" class="project-button">${project['button']}}</button>
          </div>
        </article>`;
})

document.body.appendChild(workSection);


menuBtn.addEventListener('click', displayMenu); // hamburger event listener //

closeBtn.addEventListener('click', closeMenu); // times event listener //

// Event listener for each menu link //
Array.from(menuLinks.children).forEach((child) => child.addEventListener('click', closeMenu));
