var idCount = 1; 
var listEl = document.querySelector("#todos");

function addTodo() {
    var todoEl = document.createElement('li');
    todoEl.setAttribute('id',idCount);
    var val = document.querySelector("#todoinp").value;
    todoEl.innerHTML = `${val} <button onclick="deleteTodo(${idCount})">Delete</button>`;
    listEl.appendChild(todoEl);
    idCount++;
}

function deleteTodo(idCount) {
    document.querySelector("#todos").removeChild(document.getElementById(idCount));
}