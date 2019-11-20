//FIRST START THIS THEN TH HTTP

const net = require('net');
const port = 4224;
const osDataService = require('./service/os-data.service');

let server = net.createServer();

server.on('connection', socket => {
    console.log('client connected');
    let id = setInterval(() => sendOsData(socket), 5000);
    socket.on('error', err => {
        clearInterval(id);
        console.log(err);
    });
    socket.on('end', () => clearInterval(id));
    socket.on('error', () => clearInterval(id));
})


function sendOsData(socket) {
    console.log(osDataService.getOSData());
    socket.write(JSON.stringify(osDataService.getOSData()));
}
console.log('hello');
server.listen(port, () => 'TCP socket server listening on port ' + port);