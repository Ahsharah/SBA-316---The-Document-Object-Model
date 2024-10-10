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
    }
}