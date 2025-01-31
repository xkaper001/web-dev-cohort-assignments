function addTodo() {
    var val = document.querySelector('#todoinp').value;
    var listEl= document.createElement("li");
    var textEl = document.createElement("span");
    // listEl.setAttribute('style','display: flex');
    var buttonEl = document.createElement("button");
    buttonEl.innerHTML = 'Delete';
    textEl.innerHTML = val;
    listEl.appendChild(textEl);
    listEl.appendChild(buttonEl);
    var el = document.querySelector("ol");
    el.appendChild(listEl);
}

function deleteTodo() {

}

function render() {
    
}