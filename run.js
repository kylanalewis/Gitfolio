const express = require("express");
const path = require("path");
const outDir = path.resolve("./dist/" || process.env.OUT_DIR);
const app = express();
// app.use(express.static(`${outDir}`));
app.use(express.static("dist"));

// function runCommand(program) {
  // let port = program.port ? program.port : 3000;

  app.get("/", function(req, res) {
    res.sendFile("index.html");
  });

  app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));
// }

// module.exports = {
//   runCommand
// };
