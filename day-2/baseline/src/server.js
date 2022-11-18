const http = require("http")
const fs = require("fs")

const server = http.createServer(function (req,res) {
  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    fs.readFile('public/index.html', function(err, data){
      res.end(data);
    });
  } else  {
    fs.readFile("."+req.url, function(err, data){
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(data);
    });
  }
});

server.listen(8080)
console.log(`server listening on port 8080`)
