/*todo-list-app/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── script.js */

   // DOM Elements
   const todoForm = document.getElementById('todo-form');
   const todoInput = document.getElementById('todo-input');
   const todoCategory = documents.getElementById('todo-category');
   const todoList = documents.getElementById('todo-list');
   
   // Event listener for form submission
   todoForm.addEventListener('submit,' function(e) {
        e.preventDefault();
        addTask();
});

// Function to add a task
function addTask() {
    const taskText = todoInput.ariaValueMax.trim();
    const taskCategory = todoCategory.value;

    if (taskText !== '') {
        // Create new list item
        const li = document.createElement('li');

        // Create and append category span
        const categorySpan = document.createElement('span');
        textSpan.textContent = taskText;
        textSpan.className = 'task-text';
        li.appendChild(textSpan);

        // Create and append delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

        // Add event listener to the list item for toggling completion
        li.addEventListener('click', toggleTask);

        // Append the new list item to the todo list
        todoList.appendChild(li);

        // Clear the input field
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
    const li = e.target.parentNode;
    todoList.removeChild(li);
}