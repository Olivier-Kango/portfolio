// HAMBURGER BUTTON
const hamburger = document.querySelector('.container_menu');
const navMenu = document.querySelector('.li-desk');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navMenu.classList.toggle('change');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('change');
  navMenu.classList.remove('change');
}));

// PROJECTS IN JS
const listProjects = [
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['css', 'html', 'bootstrap', 'Ruby'],
    feature: 'See Project',
    listPopupProjects: {
      popName: 'Multi - Post stories',
      popButton: '&times;',
      popDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam accusantium unde eum voluptas beatae, sit sed impedit eaque dolor deserunt eligendi repellendus hic recusandae porro dignissimos, blanditiis suscipit modi!',
      popSkills: ['html', 'css', 'Ruby', 'Github'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
    },
  },
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['css', 'html', 'bootstrap', 'Ruby'],
    feature: 'See Project',
    listPopupProjects: {
      popName: 'Multiiiiiiiiiii',
      popButton: '&times;',
      popDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam accusantium unde eum voluptas beatae, sit sed impedit eaque dolor deserunt eligendi repellendus hic recusandae porro dignissimos, blanditiis suscipit modi!',
      popSkills: ['html', 'css', 'Ruby', 'Github'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
    },
  },
  {
    name: 'Multi-Post Olivier Kango - 3',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['css', 'html', 'bootstrap', 'Ruby'],
    feature: 'See Project',
    listPopupProjects: {
      popName: 'Multi-Post Olivier Kango - 3',
      popButton: '&times;',
      popDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam accusantium unde eum voluptas beatae, sit sed impedit eaque dolor deserunt eligendi repellendus hic recusandae porro dignissimos, blanditiis suscipit modi!',
      popSkills: ['html', 'css', 'Ruby', 'Github'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
    },
  },
  {
    name: 'Multi-Post from Derrick -4',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['css', 'html', 'bootstrap', 'Ruby'],
    feature: 'See Project',
    listPopupProjects: {
      popName: 'Multi-Post Essai form Derrick',
      popButton: '&times;',
      popDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam accusantium unde eum voluptas beatae, sit sed impedit eaque dolor deserunt eligendi repellendus hic recusandae porro dignissimos, blanditiis suscipit modi!',
      popSkills: ['html', 'css', 'Ruby', 'Github'],
      featureOne: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      featureTwo: 'See Source &nbsp; <i class="fa fa-github"></i>',
    },
  }
];

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

  const { name } = project;
  const { description } = project;
  const { skills } = project;
  const { feature } = project;

  const divOne = document.createElement('div');
  divOne.setAttribute('class', 'div-one');
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

  const { popName } = listPopupProject;
  const { popButton } = listPopupProject;
  const { popDescription } = listPopupProject;
  const { popSkills } = listPopupProject;
  const { featureOne } = listPopupProject;
  const { featureTwo } = listPopupProject;

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
  poopProject.appendChild(buttonFtOne);

  const buttonFtTwoo = document.createElement('button');
  buttonFtTwoo.innerHTML = featureTwo;
  poopProject.appendChild(buttonFtTwoo);

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
