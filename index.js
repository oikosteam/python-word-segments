console.log("Starting Server...");
const express = require("express");
const {exec} = require("child_process");

var app = express();
var server;

app.get("/segment",function(req,res){
  if (req.query && req.query.text) {
    exec('python3 main.py ' + req.query.text, function(err, response, terminalerr) {
      if (err) {
        res.json(null);
      } else if(response) {
        res.json(JSON.parse(response.split("'").join('"')));
      }
    });
  } else {
    res.json(null);
  }
})

var port = process.env.PORT || 8000;
server = app.listen(port, function(){
  console.log("API server listening at port %s", port);
});

module.exports = app;
