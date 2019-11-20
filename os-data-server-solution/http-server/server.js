const http = require('http');
const port = 3003;
const host = "localhost";
const fs = require('fs');
const webSocketService = require('./service/websocket-service');
const tcpClientService = require('./service/tcp-client-service');


const server = http.createServer(processRequest);

webSocketService.init(server);

function processRequest(request, response) {
    console.log(request.url);
    switch (request.url) {
        case '/':
        case '/dashboard':
            getFile('./public/dashboard.html', response);
            break;
        default:
            getFile('./public' + request.url, response);
            break;
    }
}


function getFile(path, response) {
    fs.readFile(path, function(err, data) {
        if (err) {
            response.writeHead(404);
            response.end();
        } else {
            response.writeHead(200);
            response.write(data);
            response.end();
        }
    })
}

server.listen(port, host);

let timeoutId;

function sendOSData() {
    clearInterval(timeoutId);

    setInterval(() => {
        let osData = tcpClientService.getOSData();
        if (osData)
            webSocketService.broadcast(JSON.stringify(osData));
    }, 5000);
}

tcpClientService.init();
sendOSData();