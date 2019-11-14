const http = require('http');
const port = 3006;
const fs = require('fs');
const socketService = require('./services/websocket-service');


const server = http.createServer(
    processRequest
);

socketService.init(server);

function processRequest(request, response) {

    switch (request.url) {
        case '/':
            response.writeHead('301', {
                'Location': '/chat'
            });
            response.end();
            break;
        case '/chat':
            getFile('./public/index.html', response);
            break;
        default:
            getFile(`./public/${request.url}`, response)

    }
}



function getFile(path, response) {

    fs.readFile(path, (err, data) => {
        if (err) {
            response.writeHead(404);
            response.end();
        } else {
            response.writeHead('200');
            response.write(data);
            response.end();
        }
    });
}

server.listen(port);