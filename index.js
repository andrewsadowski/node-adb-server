const express = require("express");
const SimpleADB = require("simple-adb").SimpleADB;
var shell = require("shelljs");
var bodyParser = require("body-parser");

let app = express();
// const sadb = new SimpleADB();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); //
app.get('/json  ', (req, res) => {
  res.send('GET successful');
});

app.post("/json", (req, res) => {
  var path = req.body.path;
  var cmd = req.body.cmd;

  var myExecutionStr = `adb shell screencap -p ${req.body.path}`;
  var a = Date.now();

  shell.echo(`Executing...`)
  shell.exec(myExecutionStr);
  var b = Date.now();
  shell.echo(`Path: ${req.body.path}, Time Elapsed: ${b - a} ms`)
  res.send(`{'code':200,'description':'done ${b - a}'}`);
});

// function do_adb_call(req, res, next) {
//   //   return screenshot({ filename: "shot.jpg" }).then(imgPath => {
//   console.log(res);
//   shell.echo(`adb shell takescreen -p ${req.body.path}`);

  // imgPath: absolute path to screenshot
  // created in current working directory named shot.png
  //   });
// }

app.listen(3000, () => console.log("Server Running on port 3000"));
