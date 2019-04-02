const http = require('http');

http.createServer((req, res) => {
    res.end('123');
}).listen(8880, 'localhost');