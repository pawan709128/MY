document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const deadlineInput = document.getElementById('deadline-input').value;
    const priorityInput = document.getElementById('priority-input').value;

    if (taskInput === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput} (Priority: ${priorityInput}, Deadline: ${deadlineInput})</span>
        <button class="complete-task">Complete</button>
        <button class="edit-task">Edit</button>
        <button class="delete-task">Delete</button>
    `;
    
    taskList.appendChild(li);

    // Clear the input fields
    document.getElementById('task-input').value = '';
    document.getElementById('deadline-input').value = '';

    // Handle task actions
    li.querySelector('.complete-task').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.edit-task').addEventListener('click', function() {
        document.getElementById('task-input').value = taskInput;
        document.getElementById('deadline-input').value = deadlineInput;
        document.getElementById('priority-input').value = priorityInput;
        li.remove();
    });

    li.querySelector('.delete-task').addEventListener('click', function() {
        li.remove();
    });
}
