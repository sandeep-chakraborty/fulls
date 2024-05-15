const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(express.json());
const todo = [
  {
    task: "clean the house",
    status: "done",
  },
  {
    task: "buy groceries",
    status: "not done",
  },
  {
    task: "do the laundry",
    status: "done",
  },

  { task: "live a life", status: "not done" },
];

app.get("/", function (req, res) {
  //showing the list of todos
  res.send(todo);
});
//making a route to see the undone tasks
app.get("/un", function (req, res) {
  let undone = [];
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].status === "not done") {
      undone.push(todo[i]);
    }
  }
  res.send(undone);
});
//making a route for done tasks
app.get("/done", function (req, res) {
  let done = [];
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].status === "done") {
      done.push(todo[i]);
    }
  }
  res.send(done);
});
//add tasks
app.post("/add", function (req, res) {
  const newTask = req.body; 
  todo.push(newTask);
  res.send("Task added successfully!");
});

//update tasks
app.put("/update", function (req, res) {
  const task = req.body.task;
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].task === task) {
      todo[i].status = "done";
    }
  }
  res.send("Task updated successfully!");
});

//delete tasks
// app.delete("/delete", function (req, res) {
//   const task = req.body.task;
//   for (let i = 0; i < todo.length; i++) {
//     if (todo[i].task === task) {
//      todo.splice(i, 1);
//     }
//   }
//   res.send("Task deleted successfully!");
// });


app.listen(port, function () {
  console.log(`Server is running on https://localhost:${port}`);
});
