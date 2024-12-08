const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req,res) => {
    res.writeHead(200, {'Content_Type' : 'text/html'});

    const filename = "week2.html";
    fs.readFile(filename, (err, data) => {
        // res.write(data);
        // res.end();
        if (err == null) {
            res.write(data);
            res.end();
        } else {
            res.end("File Not Found!");
        }
    });
});

server.listen(500);