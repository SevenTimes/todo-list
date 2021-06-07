import { projectList, currentProject } from '..';

export class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

export function updateProjectList() {
  const projContainer = document.getElementById('project-list');
  let active;
  if (document.querySelector('.active') !== null) {
    active = document.querySelector('.active').id;
  }
  projContainer.innerHTML = '';
  projectList.forEach((project, index) => {
    const newProject = document.createElement('button');
    newProject.classList.add('project');
    newProject.innerText = project.title;
    newProject.id = `data-index-${index}`;
    projContainer.appendChild(newProject);
  });
  if (document.getElementById(active) !== null) {
    document.getElementById(active).className += ' active';
  }
  setActiveProject();
}

export function setActiveProject() {
  let activeProject = document.querySelectorAll('.project');
  for (let i = 0; i < activeProject.length; i++) {
    activeProject[i].addEventListener('click', (e) => {
      for (let i = 0; i < activeProject.length; i++) {
        activeProject[i].classList.remove('active');
      }
      e.target.className += ' active';
      let projectId = e.target.id;
      currentProject = projectList[`${projectId.slice(11)}`];
      console.log(currentProject);
    });
  }
}
