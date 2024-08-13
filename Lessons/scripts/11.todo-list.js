const todoList = [
  {
    name: "make dinner",
    dueDate: "2024-08-13",
  },
  {
    name: "wash dishes",
    dueDate: "2024-08-13",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    //change those above using Destructuring technique

    const { name, dueDate } = todoObject;

    // this is generating html technique
    const html = `
    <p>
        ${name} ${dueDate}
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        ">Delete</button>
      </p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");

  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    //make those above using a shorthand property

    name,
    dueDate,
  });
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}
