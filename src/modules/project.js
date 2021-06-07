import { projectList } from '..';

export class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

export function updateProjectList() {
  const projContainer = document.getElementById('project-list');
  projContainer.innerHTML = '';
  projectList.forEach((project, index) => {
    const newProject = document.createElement('button');
    newProject.innerText = project.title;
    newProject.id = `data-index-${index}`;
    projContainer.appendChild(newProject);
  });
}
