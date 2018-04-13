const express = require("express");
var shell = require("shelljs");
var bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

app.use((err, req, res, next) => {\
  res.status(500).send("Error: 500");
  next();
});

app.get("/json", (req, res) => {
  res.send("GET successful");
});

app.post("/json", (req, res) => {
  var path = req.body.path;
  var cmd = req.body.cmd;

  var myExecutionStr = `adb shell screencap -p ${req.body.path}`;
  var a = Date.now();

  shell.echo(`Executing...`);
  shell.exec(myExecutionStr);
  var b = Date.now();
  shell.echo(`Path: ${req.body.path}, Time Elapsed: ${b - a} ms`);
  res.send(`{'code':200,'description':'done ${b - a}'}`);
});

app.listen(8080, () => console.log("Server Running on Localhost:port 8080"));
