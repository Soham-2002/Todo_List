const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  inputElement.value = '';

  todoList.push(name);
  console.log(todoList);

}