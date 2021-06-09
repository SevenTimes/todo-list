import { currentProject } from './init';

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function updateTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  if (currentProject.tasks.length > 0) {
    currentProject.tasks.forEach((task) => {
      const newTask = document.createElement('div');
      newTask.classList.add('task', `${task.priority}`);

      const title = document.createElement('h1');
      title.innerText = task.title;
      newTask.appendChild(title);
      const description = document.createElement('p');
      description.innerText = task.description;
      newTask.appendChild(description);

      const div = document.createElement('div');
      const date = document.createElement('span');
      date.innerText = task.dueDate;
      div.appendChild(date);

      newTask.appendChild(div);
      taskList.appendChild(newTask);
    });
  }
}

export { Task, updateTaskList };
