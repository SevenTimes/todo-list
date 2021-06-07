import defaultExport from './modules/DOM';
import { updateProjectList } from './modules/project';

export let projectList = [];
export let defaultProject = [];
projectList.push(defaultProject);
export let currentProject;
updateProjectList();
document.querySelector('.project').className += ' active';
