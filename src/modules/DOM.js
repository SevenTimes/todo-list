import { Task, updateTaskList } from './tasks';
import { defaultProject, projectList } from '../index';
import { Project, updateProjectList, setActiveProject } from './project';

const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('dueDate');

export default (function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', function (event) {
    const priority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;

    const newTask = new Task(
      title.value,
      description.value,
      date.value,
      priority
    );
    defaultProject.push(newTask);
    document.getElementById('add-task-modal').style.display = 'none';

    title.value = '';
    description.value = '';
    date.value = '';
    event.preventDefault();
    updateTaskList();
  });

  const addProjectBtn = document.getElementById('add-project');
  addProjectBtn.addEventListener('click', () => {
    const projectTitle = prompt('Enter project name', 'New project');
    const newProject = new Project(projectTitle);
    projectList.push(newProject);
    updateProjectList();
  });
})();
