// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoCategory = document.getElementById('todo-category');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (todoInput.value.trim().length < 3) {
        alert('Task must be at least 3 characters long');
        return;
    }
    addTask();
});

// Function to add a task
function addTask() {
    const taskText = todoInput.value.trim();
    const taskCategory = todoCategory.value;

    if (taskText !== '') {
        const li = document.createElement('li');
        
        const categorySpan = document.createElement('span');
        categorySpan.textContent = taskCategory;
        categorySpan.className = 'task-category';
        li.appendChild(categorySpan);
        
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        textSpan.className = 'task-text';
        li.appendChild(textSpan);
        
        const timeSpan = document.createElement('span');
        timeSpan.textContent = new Date().toLocaleTimeString();
        timeSpan.className = 'task-time';
        li.appendChild(timeSpan);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

        li.addEventListener('click', toggleTask);
        deleteBtn.addEventListener('click', deleteTask);

        todoList.appendChild(li);
        todoInput.value = '';
    }
}

// Function to toggle task completion
function toggleTask(e) {
    if (e.target.tagName !== 'BUTTON') {
        e.currentTarget.classList.toggle('completed');
    }
}

// Function to delete a task
function deleteTask(e) {
    e.stopPropagation();  // Prevent triggering the toggleTask
    const li = e.target.closest('li');
    li.remove();
}

// Welcome message on page load
window.onload = function() {
    alert('Welcome to your To-Do List!');
};