// HAMBURGER BUTTON
const hamburger = document.querySelector('.container_menu');
const navMenu = document.querySelector('.li-desk');

const bars = () => {
  hamburger.classList.toggle('change');
  navMenu.classList.toggle('change');
};

hamburger.addEventListener('click', bars);

document.querySelectorAll('.nav-link').forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('change');
  navMenu.classList.remove('change');
}));

//  ------------------------------------------------------PROJECTS IN JS
const listProjects = [
  {
    name: 'PSS Digital',
    description: 'PSS Digital is an application for digital solutions in e-commerce and business management. It facilitates online shopping, maximizing sales, and helps achieve success through digital means.',
    skills: ['RoR', 'React.js', 'Redux', 'Tailwind'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-16.png')",
    listPopupProjects: {
      popName: 'PSS Digital',
      popButton: '&times;',
      popDescription: 'PSS Digital is an application for digital solutions in e-commerce and business management. It facilitates online shopping, maximizing sales, and helps achieve success through digital means.',
      popSkills: ['RoR', 'React.js', 'Redux', 'SCSS'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-16.png')",
      webSite: "window.open('https://pss-digital.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/pss-digital-backend', '_blank');",
    },
  },
  {
    name: 'Movies Catalogue',
    description: 'This application allows the user to search for their favorite movies classified by popularity with the possibility of filtering them by release year.',
    skills: ['React', 'Redux'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-11.png')",
    listPopupProjects: {
      popName: 'Movies Catalogue',
      popButton: '&times;',
      popDescription: 'This application allows the user to search for their favorite movies classified by popularity with the possibility of filtering them by release year.',
      popSkills: ['React', 'Redux'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-11.png')",
      webSite: "window.open('https://moviescatalogue-olivier.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/movies-catalogue', '_blank');",
    },
  },
  {
    name: 'C.F.C.M Church',
    description: "The 'C.F.C.M Website' is a website for the Revival Church C.F.C.M (Communauté de la Foi Chrétienne dans le Monde) located in the city of Goma in the D.R.C Goma.",
    skills: ['React', 'Redux'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-13.png')",
    listPopupProjects: {
      popName: 'C.F.C.M Church',
      popButton: '&times;',
      popDescription: "The 'C.F.C.M Website' is a website for the Revival Church C.F.C.M (Communauté de la Foi Chrétienne dans le Monde) located in the city of Goma in the D.R.C Goma.",
      popSkills: ['React', 'Redux'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-13.png')",
      webSite: "window.open('https://spacetravelersod.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/space-travelers-hub', '_blank');",
    },
  },
  {
    name: 'Majestic Earth',
    description: 'Majestic Earth is an application that celebrates the majesty and grandeur of our planet. Immerse yourself in the most breathtaking natural landscapes, from majestic mountains to vast oceans, lush forests, and celestial panoramas.',
    skills: ['jQuery', 'CSS'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-18.jpg')",
    listPopupProjects: {
      popName: 'Budget App',
      popButton: '&times;',
      popDescription: 'Majestic Earth is an application that celebrates the majesty and grandeur of our planet. Immerse yourself in the most breathtaking natural landscapes, from majestic mountains to vast oceans, lush forests, and celestial panoramas.',
      popSkills: ['jQuery', 'CSS'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/work-img-18.jpg')",
      webSite: "window.open('https://majestic-earth.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/majestic_earth', '_blank');",
    },
  },
];

const titleRecentWork = document.querySelector('#recent-work-a');
titleRecentWork.innerHTML = 'My recent works';

const findSkills = (skills) => {
  let list = '';
  skills.forEach((skill, i) => {
    list += `<li class=${i === 0 ? 'css' : 'rect'}>${skill}</li>`;
  });
  return list;
};

listProjects.forEach((project, index) => {
  const article = document.createElement('article');
  const secondClass = index % 2 === 0 ? 'second' : 'second reverse';
  article.setAttribute('class', secondClass);
  if (index === 0) article.setAttribute('id', 'multi');

  const projects = document.querySelector('.projects');
  projects.appendChild(article);

  const {
    name, description, skills, feature, bgDivOne,
  } = project;

  const divOne = document.createElement('div');
  divOne.setAttribute('class', 'div-one');
  divOne.setAttribute('data-modal-target', `#modal-${index}`);
  divOne.style.backgroundImage = bgDivOne;
  article.appendChild(divOne);

  const divTwo = document.createElement('div');
  divTwo.setAttribute('class', 'div-two');
  article.appendChild(divTwo);

  const h2 = document.createElement('h2');
  h2.textContent = name;
  h2.setAttribute('data-aos', 'fade-up');
  divTwo.appendChild(h2);

  const p = document.createElement('p');
  p.setAttribute('class', 'stories');
  p.textContent = description;
  p.setAttribute('data-aos', 'fade-up');
  divTwo.appendChild(p);

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'p2');
  const fade = index % 2 === 0 ? 'fade-left' : 'fade-right';
  div2.setAttribute('data-aos', fade);
  divTwo.appendChild(div2);

  const ul = document.createElement('ul');
  ul.innerHTML = findSkills(skills);
  div2.appendChild(ul);

  const features = document.createElement('div');
  features.setAttribute('class', 'see-project');
  features.setAttribute('data-aos', 'fade-up');
  divTwo.appendChild(features);

  const button = document.createElement('button');
  button.setAttribute('data-modal-target', `#modal-${index}`);
  button.textContent = feature;
  features.appendChild(button);

  const listPopupProject = project.listPopupProjects;

  const {
    popName, popButton, popDescription, popSkills, featureOne, featureTwo, bgpopup, webSite, gitHub,
  } = listPopupProject;

  const popup = document.createElement('div');
  popup.setAttribute('class', 'div-popup');
  const body = document.querySelector('body');

  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  modal.setAttribute('id', `modal-${index}`);
  projects.appendChild(modal);

  const modalHeader = document.createElement('div');
  modalHeader.setAttribute('class', 'modal-header');
  modal.appendChild(modalHeader);

  const title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.textContent = popName;
  modalHeader.appendChild(title);

  const closeButton = document.createElement('button');
  closeButton.setAttribute('data-close-button', '');
  closeButton.setAttribute('class', 'close-button');
  closeButton.innerHTML = popButton;
  modalHeader.appendChild(closeButton);

  const findPopSkills = (popSkills) => {
    let list = '';
    popSkills.forEach((popSkill, i) => {
      list += `<li class='rect' id=${(i + 1) === popSkills.length && 'github-none'}>${popSkill}</li>`;
    });
    return list;
  };

  const snapshoot = document.createElement('div');
  snapshoot.setAttribute('class', 'snapshoot');
  modal.appendChild(snapshoot);
  snapshoot.style.backgroundImage = bgpopup;

  const modalBody = document.createElement('div');
  modalBody.setAttribute('class', 'modal-body');
  modalBody.textContent = popDescription;
  modal.appendChild(modalBody);

  const poopP2 = document.createElement('div');
  poopP2.setAttribute('class', 'p2 poop-p2');
  modal.appendChild(poopP2);

  const popUl = document.createElement('ul');
  popUl.innerHTML = findPopSkills(popSkills);
  poopP2.appendChild(popUl);

  const poopProject = document.createElement('div');
  poopProject.setAttribute('class', 'see-project poop-project');
  modal.appendChild(poopProject);

  const buttonFtOne = document.createElement('button');
  buttonFtOne.innerHTML = featureOne;
  buttonFtOne.setAttribute('onclick', webSite);
  poopProject.appendChild(buttonFtOne);

  const buttonFtTwoo = document.createElement('button');
  buttonFtTwoo.innerHTML = featureTwo;
  poopProject.appendChild(buttonFtTwoo);
  buttonFtTwoo.setAttribute('onclick', gitHub);

  const overlayTwo = document.createElement('div');
  overlayTwo.setAttribute('id', 'overlay');
  body.appendChild(overlayTwo);

  // POPUP---------------------------------------------------------------------
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }
  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

  openModalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector(btn.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });
});

// INIMATION ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  function updateActiveLink() {
    const links = document.querySelectorAll('.nav-item a');
    const scrollPosition = window.scrollY;
    links.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= scrollPosition + 100
        && section.offsetTop + section.offsetHeight > scrollPosition + 100
      ) {
        link.classList.add('link');
      } else {
        link.classList.remove('link');
      }
    });
  }

  // Call the function initially to set the active link
  updateActiveLink();

  // Add an event listener to call the function on scroll
  window.addEventListener('scroll', updateActiveLink);
});

// Get the scroll top button element
const scrollTopButton = document.getElementById('scroll-top');

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollTopButton.style.display = 'block';
    scrollTopButton.classList.remove('hide');
  } else {
    scrollTopButton.classList.add('hide');
    scrollTopButton.addEventListener('transitionend', () => {
      if (scrollTopButton.classList.contains('hide')) {
        scrollTopButton.style.display = 'none';
      }
    }, { once: true });
  }
});

scrollTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
