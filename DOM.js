// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoCategory = document.getElementById('todo-category');
const todoList = document.getElementById('todo-list');
const deleteButtons = document.querySelectorAll('.delete-btn');

// Event listener for form submission
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (todoInput.value.trim().length < 3) {
        alert('Task must be at least 3 characters long');
        return;
    }
    addTask();
});

// Add event listeners to existing delete buttons
deleteButtons.forEach(button => {
    button.addEventListener('click', deleteTask);
});

// Function to add a task
function addTask() {
    const taskText = todoInput.value.trim();
    const taskCategory = todoCategory.value;

    if (taskText !== '') {
        const fragment = document.createDocumentFragment();
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

        fragment.appendChild(li);
        todoList.appendChild(fragment);

        todoInput.value = '';
    }
}

// Function to toggle task completion
function toggleTask(e) {
    if (e.target.tagName !== 'BUTTON') {
        e.currentTarget.classList.toggle('completed');
        e.currentTarget.setAttribute('data-completed', e.currentTarget.classList.contains('completed'));
    }
}

// Function to delete a task
function deleteTask(e) {
    const li = e.target.closest('li');
    todoList.removeChild(li);
}

// BOM method to show a welcome message
window.onload = function() {
    alert('Welcome to your To-Do List!');
};