const express = require("express");
const SimpleADB = require("simple-adb").SimpleADB;
var shell = require("shelljs");
var bodyParser = require("body-parser");

let app = express();
// const sadb = new SimpleADB();

// app.get("/test", (req, res) => {
//   res.send(logger());
// });

//   Request path file, cmd (int), description(str)

// cmd(100) === 100 exec(adb_shell takescreenshot -p pathToFile)
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //

app.post("/POST_TEST", (req, res) => {
  var path = req.body.path;
  var cmd = req.body.cmd;

  var myExecutionStr = `adb shell screencap -p ${req.body.path}`
  shell.echo('Executing....')
  shell.exec(myExecutionStr);
  shell.echo(`${myExecutionStr} `)
  res.send("{'code':200,'description':'done'}");
});

// const adbFunction = sadb.connect("");

// const imgPath = "/";

function do_adb_call(req, res, next) {
  //   return screenshot({ filename: "shot.jpg" }).then(imgPath => {
  console.log(res);
  shell.echo(`adb shell takescreen -p ${req.body.path}`);

  // imgPath: absolute path to screenshot
  // created in current working directory named shot.png
  //   });
}

app.listen(3000, () => console.log("Server Running on port 3000"));
