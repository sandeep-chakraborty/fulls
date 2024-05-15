/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
// const express = require("express");
// const app = express();
// const port = 3000;
// const bodyParser = require("body-parser");
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.json());
// const fs = require("fs");
// app.get("/files", function (req, res) {
//   fs.readdir("./files", (err, files) => {
//     if (err) {
//       console.error("Error reading files:", err);
//       return;
//     }
//     res.json(files);
//   });
// }
// );

// app.get("/files/:fileName", (req, res) => {
//   const fileName = req.params.fileName; 
//   const filePath= `./files/${fileName}`;
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       res.status(500).send("Error reading file");
//     } else {
//       res.send(data);
//     }
//   });
// });


// app.listen(3000, function(){
//   console.log(`Chief! we have started the server on http://localhost:${port}`)
 //})
let arr=[1,2,3,4,5,6,7,8,9,10]
// arr.map((i)=>{
//   if(i%2==0){
//     console.log(i);
//   }
// })
/*
function fileringLogic(n){
  if(n%2==0){
    return true;
  }
  else{
    return false;
  }
}

const ans=arr.filter(fileringLogic);
const ans1=arr.map(fileringLogic);

console.log(ans);
console.log(ans1);
*/

function filerArrByRandStuff(i){
  if(i%2===0){
    return true;
  }
  return false;
}
const ans=arr.filter(filerArrByRandStuff)
console.log(ans)