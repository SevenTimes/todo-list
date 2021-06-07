import { Task, updateTaskList } from './tasks';
import { defaultProject } from '../index';

const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('dueDate');

export default (function () {
  const addTaskBtn = document.getElementById('add-task');
  addTaskBtn.addEventListener('click', () => {
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

    updateTaskList();
  });
})();
