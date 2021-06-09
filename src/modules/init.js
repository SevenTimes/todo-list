import { Project, updateProjectList } from './project';

export let projectList = [];
const defaultProject = new Project('Default');
projectList.push(defaultProject);
export let currentProject = projectList[0];
updateProjectList();
document.querySelector('.project').className += ' active';
