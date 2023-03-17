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
    name: 'Meal Master',
    description: 'Meal Master App is a web application for ordering food with user authentication and admin access. Users can select foods by theme, place orders, view their order history, and add or delete items (for admins only).',
    skills: ['RoR', 'React.js', 'Redux', 'Postgresql', 'SCSS', 'Boostrap'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-16.png')",
    listPopupProjects: {
      popName: 'Budget App',
      popButton: '&times;',
      popDescription: 'Meal Master App is a web application for ordering food with user authentication and admin access. Users can select foods by theme, place orders, view their order history, and add or delete items (for admins only).',
      popSkills: ['RoR', 'React.js', 'Redux', 'Postgresql', 'SCSS'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-16.png')",
      webSite: "window.open('https://master-meal.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/DaveZag/meal-master-backend', '_blank');",
    },
  },
  {
    name: 'Budget App',
    description: 'The Budget app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    skills: ['RoR', 'SQL', 'CSS'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-15.png')",
    listPopupProjects: {
      popName: 'Budget App',
      popButton: '&times;',
      popDescription: 'The Budget app is about building a mobile web application where you can manage your budget.',
      popSkills: ['RoR', 'SQL', 'CSS'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-15.png')",
      webSite: "window.open('https://kango-budget-app.onrender.com/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/rails_budget_app', '_blank');",
    },
  },
  {
    name: 'Catalog of my things',
    description: "A console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games. The data will be stored in JSON files but I also prepared a database with tables structure analogical to my program's class structure.",
    skills: ['Ruby', 'PostgreSQL'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-14.png')",
    listPopupProjects: {
      popName: 'Catalog of my things',
      popButton: '&times;',
      popDescription: "A console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games.",
      popSkills: ['Ruby', 'PostgreSQL'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-14.png')",
      webSite: "window.open('https://github.com/Olivier-Kango/catalog_of_my_things', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/catalog_of_my_things', '_blank');",
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
    name: "Notion-like Project",
    description: "Notion-like Project allows the user to take notes, make a to do list and organize the day in order to increase the productivity",
    skills: ['React', 'SCSS'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-12.png')",
    listPopupProjects: {
      popName: "Notion-like Project",
      popButton: '&times;',
      popDescription: "Notion-like Project allows the user to take notes, make a to do list and organize the day in order to increase the productivity",
      popSkills: ['React', 'SCSS'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-12.png')",
      webSite: "window.open('https://notion-like-project-olivier.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/notion_like_project', '_blank');",
    },
  },
  {
    name: "Space Travelers' Hub",
    description: "In this task, we will be working with the real live data from the SpaceX API. Our task is to build a web application for a company that provides commercial and scientific space travel services. Space Travelers' Hub is a an application which can allow users to book rockets and join selected space missions.",
    skills: ['React', 'Redux'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-9.png')",
    listPopupProjects: {
      popName: "Space Travelers' Hub",
      popButton: '&times;',
      popDescription: "Space Travelers' Hub is a an application which can allow users to book rockets and join selected space missions.",
      popSkills: ['React', 'Redux'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-9.png')",
      webSite: "window.open('https://spacetravelersod.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/space-travelers-hub', '_blank');",
    },
  },
  {
    name: 'Math magicians',
    description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations and Read a random math-related quote.',
    skills: ['React', 'CSS'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-7.png')",
    listPopupProjects: {
      popName: 'Math magicians',
      popButton: '&times;',
      popDescription: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations',
      popSkills: ['React', 'CSS'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-7.png')",
      webSite: "window.open('https://math-magician-olivier.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/math-magicians', '_blank');",
    },
  },
  {
    name: 'Bookstore',
    description: "The Bookstore is a website similar to the 'Awesome Books' website built in the previous module. I create an MVP version of it that allows to display a list of books, add a book and remove a selected book. Built this application using React and Redux.",
    skills: ['React', 'Redux'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-8.png')",
    listPopupProjects: {
      popName: 'Multi-Post Stories',
      popButton: '&times;',
      popDescription: "The Bookstore is a website similar to the 'Awesome Books' website built in the previous module. I create an MVP version of it that allows to display a list of books, add a book and remove a selected book.",
      popSkills: ['React', 'Redux'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-8.png')",
      webSite: "window.open('https://bookstore-olivier.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/bookstore', '_blank');",
    },
  },
  {
    name: 'Capstone API Webapp',
    description: 'The JavaScript capstone project is about building my own web application based on an external API. I selected an API that provides data about Meals and then built the webapp around it. You can add comments or likes',
    skills: ['CSS', 'API', 'Webpack', 'JavaScript'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-6.png')",
    listPopupProjects: {
      popName: 'Capstone API Webapp',
      popButton: '&times;',
      popDescription: 'The JavaScript capstone project is about building my own web application based on an external API. You can comment or like',
      popSkills: ['JavaScript', 'CSS', 'Webpack', 'API'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-6.png')",
      webSite: "window.open('https://capstone-api.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/Capstone-API-based-webapp', '_blank');",
    },
  },
  {
    name: 'Kango Bible Study',
    description: 'This platform was created with the purpose of uniting people from all over the world, regardless of location, gender or origin, to study and share the word of God for spiritual growth with the aim of inheriting the Kingdom of Heaven.',
    skills: ['HTML', 'CSS', 'JavaScript', 'boostrap'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-1.png')",
    listPopupProjects: {
      popName: 'Kango Bible Study',
      popButton: '&times;',
      popDescription: 'Believing in the value of sharing and creating positive change with people from 80 countries around the world, we share the Word of God',
      popSkills: ['HTML', 'CSS', 'JavaScript', 'github'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio.png')",
      webSite: "window.open('https://capstone-one.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/My-first-capstone-project', '_blank');",
    },
  },
  {
    name: 'Leaderboard',
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    skills: ['CSS', 'HTML', 'Webpack', 'JavaScript'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-5.png')",
    listPopupProjects: {
      popName: 'Multi-Post Stories',
      popButton: '&times;',
      popDescription: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score.',
      popSkills: ['HTML', 'CSS', 'Webpack', 'API'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-5.png')",
      webSite: "window.open('https://loaderboard.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/Leaderboard', '_blank');",
    },
  },
  {
    name: 'To Do List',
    description: 'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. I build a simple website that allows for doing that, and I did it using ES6 and Webpack!',
    skills: ['CSS', 'HTML', 'Webpack', 'JavaSript'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-4.png')",
    listPopupProjects: {
      popName: 'To Do List',
      popButton: '&times;',
      popDescription: 'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
      popSkills: ['CSS', 'HTML', 'Webpack', 'JavaSript'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-4.png')",
      webSite: "window.open('https://todolist-by-olk.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/To-Do-List', '_blank');",
    },
  },
  {
    name: 'C.F.C.M (Under construction)',
    description: '"C.F.C.M Website" is a website for the Revival Church C.F.C.M (Communauté de la Foi Chrétienne dans le Monde) located in the city of Goma in D.R.C Goma.',
    skills: ['RoR', 'SQL', 'React', 'Redux', 'Sass'],
    feature: 'See Project',
    bgDivOne: "url('assets/images/work-img-13.png')",
    listPopupProjects: {
      popName: 'Communauté de la Foi Chrétienne au Monde',
      popButton: '&times;',
      popDescription: '"C.F.C.M Website" is a website for the Revival Church C.F.C.M (Communauté de la Foi Chrétienne dans le Monde) located in the city of Goma in D.R.C Goma.',
      popSkills: ['RoR', 'SQL', 'React', 'Redux'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
      bgpopup: "url('./assets/images/Snapshoot Portfolio-13.png')",
      webSite: "window.open('https://cfcm.netlify.app/', '_blank');",
      gitHub: "window.open('https://github.com/Olivier-Kango/cfcm', '_blank');",
    },
  },
];

const titleRecentWork = document.querySelector('#recent-work-a');
titleRecentWork.innerHTML = `My recent works <span class="span-title-recent-work">(${listProjects.length})</span>`;

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
  divOne.style.backgroundImage = bgDivOne;
  article.appendChild(divOne);

  const divTwo = document.createElement('div');
  divTwo.setAttribute('class', 'div-two');
  article.appendChild(divTwo);

  const h2 = document.createElement('h2');
  h2.textContent = name;
  divTwo.appendChild(h2);

  const p = document.createElement('p');
  p.setAttribute('class', 'stories');
  p.textContent = description;
  divTwo.appendChild(p);

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'p2');
  divTwo.appendChild(div2);

  const ul = document.createElement('ul');
  ul.innerHTML = findSkills(skills);
  div2.appendChild(ul);

  const features = document.createElement('div');
  features.setAttribute('class', 'see-project');
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

  // POPUP
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
