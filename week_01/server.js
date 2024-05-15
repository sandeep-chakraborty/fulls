const express=require('express')
const port=4000
const app=express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.get('/',function(req,res){
    
    res.send("hey")
    // console.log(res)
    console.log(req);
})
app.get("/route",function(req,res){
    res.json({
        name:"Sand",
        age:10
    })
    console.log("sent")


})
app.post("/sand", function(req,res){
console.log(req.body);    
res.json({
    name:"aand",
    age:12
})
})
function calculateSum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;

}
app.get("/sum",function(req,res){
    let n=req.query.n;
    let sum=calculateSum(n);
    res.send(`Sum of ${n} is ${sum.toString()}`)
})
app.listen(port, function(){
    console.log(`Server is running at http://localhost:${port}`)
})
