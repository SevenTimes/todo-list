import { currentProject } from './init';

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false;
  }
}

function updateTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  if (currentProject.tasks.length > 0) {
    currentProject.tasks.forEach((task, index) => {
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

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'DEL';
      deleteBtn.addEventListener('click', () => {
        currentProject.tasks.splice(index, 1);
        updateTaskList();
      });
      div.appendChild(deleteBtn);

      const completeCheckbox = document.createElement('input');
      completeCheckbox.setAttribute('type', 'checkbox');
      if (task.isCompleted) {
        completeCheckbox.checked = true;
      }
      completeCheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
          task.isCompleted = true;
        } else {
          task.isCompleted = false;
        }
        updateTaskList();
      });
      div.appendChild(completeCheckbox);

      if (task.isCompleted) {
        newTask.className += ' completed';
      } else {
        newTask.classList.remove('completed');
      }

      newTask.appendChild(div);
      taskList.appendChild(newTask);
    });
  }
}

export { Task, updateTaskList };
