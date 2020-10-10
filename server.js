const http = require("http");

const eventList = require("./src/data/eventList.json");

http
  .createServer((req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("content-type", "application/json;charset=utf-8");

    res.end(JSON.stringify(eventList));
  })
  .listen(9527);
