const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const { log } = require("console");
app.use(bodyParser.json());
app.use(express.json());
const users = [
  {
    name: "Sand",
    kidneys: [
      {
        health: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const kidneys = users[0].kidneys;
  const numberOfKidneys = kidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < kidneys.length; i++) {
    if (kidneys[i].health) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});
app.post("/kidneys", function (req, res) {
    const isHealty = req.body.health;
    users[0].kidneys.push({
        health: isHealty,
    });
    res.json({
        message: "Kidney added successfully",
    });
});
app.put("/kidneys", function (req, res) {
for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].health = req.body.health;
}
res.json({
  message: "Kidney made healthy!!!!",
});
});

app.delete("/kidneys", function (req, res) {
const healthyKidneys=[];
for (let i = 0; i < users[0].kidneys.length; i++) {
 if(users[0].kidneys[i].health){
     healthyKidneys.push(users[0].kidneys[i]);
 }
}
});



app.listen(port, function () {
  console.log(`Server is r
  unning at http://localhost:${port}`);
});
