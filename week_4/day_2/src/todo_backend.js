const express = require('express')
const fs = require('fs');
const uuid = require('uuid').v4;
const app = express()

app.use(express.json());

function readTodosOfUser(userId) {
    try {
        const data = fs.readFileSync('data.json', 'utf-8');
        const allTodos = JSON.parse(data);
        return allTodos[userId] || [];
    } catch (error) {
        return []
    }
}

function saveTodosOfUser(userId, todos) {
    console.log(JSON.stringify(todos, null, 4));
    const finalJSON = {
        userId : todos
    }
    fs.writeFileSync("data.json", JSON.stringify(finalJSON));
}


app.get('/', function (req, res) {
    res.send('Welcome to Ayan\'s TODO App.')
})

app.get('/todos', function (req, res) {
    res.json({
        "todos" : todos
    })
}) 

app.post('/create/:id', function (req, res) {
    const todoText = req.body.todo;
    const userId = req.params.id;
    console.log(todoText);
    if (!req.body.todo) {
        return res.status(400).json({error : "Text in body is required"})
    }
    
    const todo = {
        id : uuid(),
        todo : todoText,
        createdAt : Date(),
    };
    
    const todos = readTodosOfUser(userId);
    console.log("Todo before");
    console.log(todos)
    
    todos.push(todo);
    
    console.log("Todo after");
    console.log(todos)
    
    saveTodosOfUser(userId, todos)

    res.json(todo)
})



app.put('/edit', function (req, res) {
    const todoText = req.body.todo;
})

app.delete('/delete', function (req, res) {
    const idToDelete = req.body;
    if (!idToDelete) {
        return res.status(404).send("Bro you gotta send the id")
    }
    
    const todos = readTodosOfUser();

    const indexToDelete = todos.findIndex(ele => ele.id === idToDelete);

    todos.splice(indexToDelete, 1);

    saveTodosOfUser(todos);

    res.json({
        id : idToDelete,
        message : "Todo Deleted successfully"
    })

})

app.listen(3000, () => {
    console.log("Todo Server running on port 3000\n");
})