const http = require('http');

// req = incoming request
// res = reponse to the request
const server = http.createServer((req, res) => {
  // req is a large object with a lot of property.
  // console.log(req);
  if (req.url === '/') {
    res.end("Welcome to our home!");
  };
  if (req.url === '/about') {
    res.end("This is about page");
  };
  res.end("Opps !");
});

server.listen(5000);
// In browser localhost:5000 will show this msg
