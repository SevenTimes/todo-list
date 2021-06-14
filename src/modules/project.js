import { projectList, currentProject } from './init';
import { saveToLocalStorage } from './saveToLocal';
import { updateTaskList } from './tasks';

export class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

export function updateProjectList() {
  const projContainer = document.getElementById('project-list');
  let activeId;
  if (document.querySelector('.active')) {
    activeId = document.querySelector('.active').id;
  }
  projContainer.innerHTML = '';
  projectList.forEach((project, index) => {
    const newProject = document.createElement('div');
    newProject.classList.add('project');
    newProject.innerText = project.title;
    newProject.id = `data-index-${index}`;

    if (index !== 0) {
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete');
      deleteBtn.innerText = 'DEL';
      deleteBtn.addEventListener('click', (e) => {
        if (e.target.parentNode.classList.contains('active')) {
          const prev = e.target.parentNode.previousElementSibling;
          e.target.parentNode.classList.remove('active');
          prev.className += ' active';
          currentProject = projectList[`${prev.id.slice(11)}`];
          updateTaskList();
        }
        const id = e.target.parentNode.id.slice(11);
        projectList.splice(id, 1);
        updateProjectList();
      });
      newProject.appendChild(deleteBtn);
    }

    projContainer.appendChild(newProject);
  });
  setActiveProject();
  if (activeId !== undefined) {
    document.getElementById(activeId).className += ' active';
  }
  saveToLocalStorage();
}

export function setActiveProject() {
  let activeProject = document.querySelectorAll('.project');
  for (let i = 0; i < activeProject.length; i++) {
    activeProject[i].addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        for (let i = 0; i < activeProject.length; i++) {
          activeProject[i].classList.remove('active');
        }
        e.target.className += ' active';
        let projectId = e.target.id;
        currentProject = projectList[`${projectId.slice(11)}`];
        updateTaskList();
        return currentProject;
      }
    });
  }
}
