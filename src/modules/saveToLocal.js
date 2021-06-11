import { projectList } from './init';

export function saveToLocalStorage() {
  localStorage.setItem('projectList', JSON.stringify(projectList));
}
