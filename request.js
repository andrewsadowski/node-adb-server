var request = require("request");

var iii = 0;
setInterval(function() {
    
    iii = iii+1;
var options = { method: 'POST',
  url: 'http://localhost:3000/json',
  headers: 
   { 'postman-token': 'af94c6ad-775f-8bab-2e00-37bd64de9dd0',
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: 
   { path: `'/storage/emulated/0/Download/test${iii}.png'`,
     cmd: '100',
     description: 'All is well' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
}, 3000);


// const request = require('request');



// request({
//     uri: 'http://localhost:3000/json',
//     method: 'POST', 
//     headers: {
//         "content-type": "application/json"
//     },
//     body: {
//         "path": "/storage/emulated/0/Download/100.png",
//         "cmd": '100',
//         "description": "test-1"
//     }
// }, function (err, response, body) {
//     if (err) {
//         return console.error('fail');
//     }
//     console.log('Success');

// });



// let e = 100;


// var cmd = () => {

// }

// var description = () => {

// };