const todoList = [{
  name: 'Watch Youtube',
  dueDate: '2023-09-19'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `; //Generating the HTML
    todoListHTML += html;
  }
  //console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dataInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dataInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  //console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}