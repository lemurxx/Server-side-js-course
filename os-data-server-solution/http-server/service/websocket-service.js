const ws = require('ws');

//2
let server;


function init(httpServer) {
    server = new ws.Server({ server: httpServer });

    server.on('connection', wsocket => {
        console.log('client connected');
        //1.
        //wsocket.send('Hello client!');
        //wsocket.on('message', data => console.log(data));
        //wsocket.on('error', err => console.log(err));

        //create stream
        //const duplex = ws.createWebSocketStream(wsocket);
        //process.stdin.pipe(wsocket);


    })

}


function broadcast(data) {
    console.log('connected browsers: ', server.clients.size);
    server.clients.forEach(socket => {
        if (socket.readyState === ws.OPEN)
            socket.send(data);
    });

}


module.exports = { init, broadcast };