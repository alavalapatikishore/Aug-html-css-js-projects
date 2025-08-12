
const todolist = [];
displayTasks()
function addTask() {
    const taskInput = document.querySelector('.task-input');
    const valueinsideelement = taskInput.value;
    const dateInput = document.querySelector('.js-duedate');
    const dateValue = dateInput.value;
    taskInput.value = ''; // Clear the input field after adding the task
    todolist.push({
        name: valueinsideelement,
        duedate: dateValue
    });
     displayTasks();
}

function displayTasks() {
    let todolistHTML = "";
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = ''; // Clear the list before displaying taskss
    
    for(let i = 0; i < todolist.length; i++) {
        const todoobject = todolist[i];
        const html = `<div class="task-row">
                <div class="task-column">${todoobject.name}</div>
                <div class="task-column">${todoobject.duedate}</div>
                <div class="task-column">
                    <button onclick="
                        todolist.splice(${i}, 1);
                        displayTasks();
                    ">Delete</button>
                </div>
            </div>`;
        todolistHTML += html;
    }
    document.querySelector('.task-list').innerHTML = todolistHTML;
}