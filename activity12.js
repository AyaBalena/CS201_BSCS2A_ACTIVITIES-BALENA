// it set value as an empty stack to store tasks
const todoStack = [];
// another value has been set as empty store tasks for redoQueue 
const redoQueue = [];

// it use a function to add a task to the todo stack.
function addTask() {
// Get the task input element from the HTML.
  const taskInput = document.getElementById('taskInput');
// The task inputn has been chop.
  const task = taskInput.value.trim();

// The If  was used if the condition of the task is empty.
  if (task !== '') {
// Push the task to the todo stack.
    todoStack.push(task);
// the task input field set as blank or null to clear the task input field.
    taskInput.value = '';
 // Update the todo list display.
    updateTodoList();
  }
}
// Function to undo the last task.
function undo() {
//  The If  was used to check if there are tasks in the todo stack.
  if (todoStack.length > 0) {
// The To Do Task will pop the last taks.
    const undoneTask = todoStack.pop();
// The undone task  will push to the redo queue.
    redoQueue.push(undoneTask);
//  Update the todo list display.
    updateTodoList();
  }
}

// Function to redo the last undone task
function redo() {
//  The If  was used to check if there are tasks in the redo queue.
  if (redoQueue.length > 0) {
// The first task will shift from the redo queue.
    const redoneTask = redoQueue.shift();
// The redone task  will push back to the todo stack.
    todoStack.push(redoneTask);
//  Update the todo list display.
    updateTodoList();
  }
}
// Function to update the todo list display in the HTML
function updateTodoList() {
// Get the todo list container element from the HTML
  const todoListContainer = document.getElementById('todoList');
// The content of the todo list container set as blank or null to clear the content of the todo list.
  todoListContainer.innerHTML = '';
// To repeat the each task in the todo stack
  todoStack.forEach((task, index) => {
// It created a new div element for the task
    const taskItem = document.createElement('div');
// It Set the class of the task div as task-item.
    taskItem.className = 'task-item';
// It set the content of the task div.
    taskItem.textContent = `${index + 1}. ${task}`;
// Add the task div to the todo list container.
    todoListContainer.appendChild(taskItem);
  });
}
