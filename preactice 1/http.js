const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>This is written in function</h1>')
    res.end()
}).listen(3000);