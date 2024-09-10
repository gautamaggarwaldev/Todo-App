function loadTodos() {
    // This function will load the todos from the browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList": []};
    console.log(todos);
    return todos;
}

 
function addTodoToLocalStorage(todoText) {
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function appendTodoInHtml(todoText) {
    const todoList = document.getElementById("todoList");

    const todoItem = document.createElement("li"); 
    todoItem.textContent = todoText;
    todoItem.classList.add('todoItem');


    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed";
    completedBtn.classList.add("completedBtn");

    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
    todoItem.appendChild(completedBtn);
    
    todoList.appendChild(todoItem);
}


document.addEventListener("DOMContentLoaded", () => {

    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");


    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value;
        if(todoText=='') {
            alert("Please write something for todo")
        }
        else {
            addTodoToLocalStorage(todoText);
            appendTodoInHtml(todoText);
            todoInput.value = "";
        }
    });
    
    
    todoInput.addEventListener("change", (event) => {
        //this call back method is fired everytime there is a change in the input tag
        const todoText = event.target.value;
        event.target.value = todoText.trim();
        console.log(event.target.value);
    });

    const todos = loadTodos();

    todos.todoList.forEach(todo => {
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent = todo;
        todoList.appendChild(newTodoItem);
    });

});
