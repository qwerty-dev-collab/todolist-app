// Get references to DOM elements
const taskInput = document.getElementById('taskInput'); // Input field
const addButton = document.getElementById('addButton'); // Add button
const taskList = document.getElementById('taskList');   // UL for tasks

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get input value and trim whitespace
  if (taskText === '') {
    alert('Please enter a task'); // Alert if input is empty
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.className = 'task'; // Add class for styling

  // Create a span to hold the task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Create a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖'; // Cross mark
  deleteBtn.className = 'deleteBtn';

  // Add event listener to delete the task when button is clicked
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Append task text and delete button to list item
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  // Append list item to the task list
  taskList.appendChild(li);

  // Clear input field after adding
  taskInput.value = '';
  taskInput.focus();
}

// Add event listener to the button
addButton.addEventListener('click', addTask);

// Optional: allow pressing Enter to add task
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
