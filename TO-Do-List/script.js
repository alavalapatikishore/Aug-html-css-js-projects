
const todolist = [];
displayTasks()
function addTask() {
    const taskInput = document.querySelector('.task-input');
    const valueinsideelement = taskInput.value;
    taskInput.value = ''; // Clear the input field after adding the task
    todolist.push(valueinsideelement);
     displayTasks();
}

function displayTasks() {
    let todolistHTML = "";
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = ''; // Clear the list before displaying tasks
    
    for(let i = 0; i < todolist.length; i++) {
        const todoobject = todolist[i];
        const html = `<p>${todoobject}</p>`;
        todolistHTML += html;
    }
    document.querySelector('.task-list').innerHTML = todolistHTML;
}