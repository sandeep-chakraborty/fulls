const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
app.use(express.json());
app.use(bodyParser.json());
app.use(express.json());
function loadTodo() {
  try {
    const data = fs.readFileSync("todos.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading todos file", err);
    return [];
  }
}
function saveTodos() {
  try {
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2), "utf8");
    console.log("Todos saved successfully");
  } catch (err) {
    console.error("Error saving todos file", err);
  }
}

let todos = loadTodo();

app.get("/todos", (req, res) => {
  todos;
  res.send(todos.map((todo) => todo.thing));
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404);
  }
});
app.post("/todos", (req, res) => {
  const { thing, status } = req.body;
  const id = (todos.length + 1).toString();
  todos.push({ id, thing, status });
  saveTodos();
  res.status(201).json({ id });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    const { thing, status } = req.body;
    todos[index] = { id, thing, status };
    saveTodos();
    res.status(200).json({ message: "you did it boss" });
  } else {
    res
      .status(404)
      .json({ message: "index out of bound/didn't find anything" });
  }
});
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const indexToRemove = todos.findIndex((todo) => todo.id === id);
  if (indexToRemove !== -1) {
    todos.splice(indexToRemove, 1);
    saveTodos();
    res.status(200).json({ message: "the todo have been deleted sucessfully" });
  } else {
    res
      .status(404)
      .json({ message: "index out of bound/didn't find anything" });
  }
});
app.listen(3000);
