// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoCategory = document.getElementById('todo-category');
const taskList = document.getElementById('task-list');
const errorMessage = document.getElementById('error-message');
const deleteTaskBtn = document.getElementById('delete-task');

// Event listener for form submission
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

// Event listener for delete button
deleteTaskBtn.addEventListener('click', deleteTask);

// Function to add a task
function addTask() {
    const taskText = todoInput.value.trim();
    const taskCategory = todoCategory.value;

    // Check if task is at least 5 characters long
    if (taskText.length < 5) {
        errorMessage.textContent = "Task must be at least 5 characters long.";
        return;
    }

    // Clear any existing error message
    errorMessage.textContent = "";

    // Create new option element
    const option = document.createElement('option');
    option.textContent = `${taskCategory}: ${taskText}`;
    option.value = Date.now(); // Unique identifier for each task

    // Add the new option to the select element
    taskList.appendChild(option);

    // Clear the input field
    todoInput.value = '';

    // Update task count
    updateTaskCount();
}

// Function to delete a task
function deleteTask() {
    const selectedOption = taskList.selectedOptions[0];
    if (selectedOption) {
        taskList.removeChild(selectedOption);
        updateTaskCount();
    } else {
        alert("Please select a task to delete.");
    }
}

// Function to update task count
function updateTaskCount() {
    const taskCount = taskList.options.length;
    // Use querySelector to select and update the task count element
    const countElement = document.querySelector('#task-count') || createTaskCountElement();
    countElement.textContent = `Total tasks: ${taskCount}`;
}

// Function to create task count element
function createTaskCountElement() {
    const countElement = document.createElement('p');
    countElement.id = 'task-count';
    document.body.insertBefore(countElement, document.querySelector('#task-container'));
    return countElement;
}

// Welcome message on page load (BOM method)
window.onload = function() {
    alert('Welcome to your To-Do List!');
    updateTaskCount();
};

// Event delegation for toggling task completion
taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'OPTION') {
        e.target.classList.toggle('completed');
        // Modify an attribute in response to user interaction
        e.target.setAttribute('data-completed', e.target.classList.contains('completed'));
    }
});

// Use querySelectorAll and forEach (to satisfy requirements)
document.querySelectorAll('button').forEach(button => {
    button.setAttribute('title', button.textContent);
});