const ws = require('ws');

//2
let server;
let messages = [];

function init(httpServer) {
    server = new ws.Server({ server: httpServer });
    server.on('connection', wsocket => {
        console.log('client connected');

        wsocket.on('message', dataStr => {
            let data = JSON.parse(dataStr);
            if (data.type == 'join') {
                console.log(data.name);
                wsocket.user = data.name;
                messages.push({
                    sender: wsocket.user,
                    message: `${wsocket.user} joined the chat`
                })
                console.log(messages);
            }
            if (data.type == 'message') {
                messages.push({
                    sender: wsocket.user,
                    message: data.message
                })
            }
            broadcast(JSON.stringify({
                joined: true,
                messages
            }));

        });

        wsocket.on('error', err => console.log(err));

    })

}

function broadcast(data) {
    server.clients.forEach(socket => {
        if (socket.readyState === ws.OPEN)
            socket.send(data);
    });

}

module.exports = { init, broadcast };