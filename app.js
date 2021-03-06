const addTodoform = document.querySelector("#addTodoForm");
const addTodoinput = document.querySelector (addTodoinputfield);
const todoList = document.querySelector("todoList");

//Set focus on text input
addTodoinput.focus();

//add event listener for submitting form.
addTodoform.addEventListener("submit", (event) => {
event.preventDefault();
addTodo(addTodoinput.value);
});

function addTodo(todoText) {
    todoList.insertAdjacentHTML( 
     "beforeend",
    `<li>${todoText}<button onclick="deleteTodo(this)">delete</button></li>`
    );
     addTodoForm.reset();
    } 
function deleteTodo(element) {
 element.parentElement.remove();
addTodoInput.focus();
}
