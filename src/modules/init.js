import { Project, updateProjectList } from './project';
import { updateTaskList } from './tasks';

let projectList = [];
if (localStorage.getItem('projectList')) {
  projectList = JSON.parse(localStorage.getItem('projectList'));
} else {
  const defaultProject = new Project('Default');
  projectList.push(defaultProject);
}
let currentProject = projectList[0];
updateProjectList();
updateTaskList();
document.querySelector('.project').className += ' active';

export { projectList, currentProject };
