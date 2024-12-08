const http = require('http');
const port = 1000;

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content_Type' : 'text/plain'});
    res.write("<h1>Hi! Welcome ~ </h1>");
    res.write("<h1>Hello World!</h1>");
    res.end();
});

server.listen(500);