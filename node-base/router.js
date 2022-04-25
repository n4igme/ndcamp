const fs = require('fs');
const http = require('http');
const url = require('url');
const data = fs.readFileSync(`${__dirname}/data/sample.json`, 'utf-8');
const jsonData = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName == '/') {
        res.end('Main Page');
    } else if (pathName == '/api') {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.end('<h1>Page not found!<h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server listen on port 8000');
});