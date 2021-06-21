import { Task, updateTaskList } from './tasks';
import { currentProject, projectList } from './init';
import { Project, updateProjectList } from './project';

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
    currentProject.tasks.push(newTask);
    document.getElementById('add-task-modal').style.display = 'none';

    title.value = '';
    description.value = '';
    date.value = '';
    event.preventDefault();
    updateTaskList();
  });

  const projectInput = document.getElementById('new-project-input');
  const revealProjectInput = document.getElementById('reveal-project-input');
  const hideProjectInput = document.getElementById('hide-project-input');
  const projectName = document.getElementById('project-name');

  function revealInput() {
    projectInput.style.display = 'flex';
    revealProjectInput.style.display = 'none';
    projectName.focus();
  }

  function hideInput() {
    projectInput.style.display = 'none';
    revealProjectInput.style.display = 'block';
    projectName.value = '';
  }

  revealProjectInput.addEventListener('click', revealInput);
  hideProjectInput.addEventListener('click', hideInput);

  const addProjectBtn = document.getElementById('add-project');
  addProjectBtn.addEventListener('click', () => {
    const projectTitle = projectName.value;
    const newProject = new Project(projectTitle);
    projectList.push(newProject);
    hideInput();
    updateProjectList();
  });
})();
