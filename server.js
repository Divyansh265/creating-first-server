const { application, raw } = require('express');
const express = require('express')

//initialization 
const app = express();//this app variable contain all the functionality of express package
// application will now use json Format//
app.use(express.json());//transfering and receaving of data in json format

const port = 8081;//local port number where your server  display


const toDoList = ["Complete Node Byte", "play Cricket "];
//http://localhost:8081/todos
app.get("/todos", (req, res) => {
    //callback
    res.status(200).send(toDoList)

})
app.post('/todos', (req, res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task added successfully",
    })
})

app.delete("/todos", (req, res) => {
    const itemToDelete = req.body.item;

    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });
    res.status(202).send({
        message: `Deleted item- ${req.body.item}`,
    })

})
// either method are lie here
app.all("/todos", (req, res) => {
    res.status(501).send({
        message: "Method not specify",
    });
})
//either route lie here
app.all('*', (req, res) => {
    res.status(404).send({
        message: "route not specify",
    })
})

app.listen(port, () => {
    console.log(`Nodejs server started on port $(port)`);
})