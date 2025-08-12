const todolist = [];
renderTOdolist();

    function renderTOdolist(){
        let todolistHTML = '';
        for(let i=0; i< todolist.length; i++){
            const todoobject =  todolist[i];
           // const name = todoobject.name;
           // const duedate = todoobject.duedate;
           const {name, duedate} = todoobject;
            const html = `
      <div class="grid-row">
        <div>${name}</div>
        <div>${duedate}</div>
        <div>
          <button onclick="
            todolist.splice(${i}, 1);
            renderTOdolist();
          ">Delete</button>
        </div>
      </div>
    `;
    todolistHTML += html;
  }
       document.querySelector('.js-div-paragraphs').innerHTML = todolistHTML;
    }

    function addtodo(){
        const inputElement = document.querySelector('.gettextval');
        const name = inputElement.value;
        const dateinputelement = document.querySelector('.js-duedate');
        const duedate = dateinputelement.value;
        todolist.push({
            name,duedate
        });
        inputElement.value = '';
        renderTOdolist();
    }