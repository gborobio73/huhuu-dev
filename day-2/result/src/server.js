const http = require("http")
const fs = require("fs")

const server = http.createServer(function (req,res) {
  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    fs.readFile('public/index.html', function(err, data){
      res.end(data);
    });
  } else  {
    fs.readFile("public/"+req.url, function(err, data){
      if (err) {
        if (err.code === 'ENOENT') {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end("Page not found");
        } else {
          res.writeHead(500, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.end(err);
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(data);
      }
    });
  }
});

const port = process.env.PORT || 8080
server.listen(port)
console.log(`server listening on port ${port}`)
