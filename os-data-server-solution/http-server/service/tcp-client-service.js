const net = require('net');


const hosts = ['localhost', '192.168.43.38'];
let osData = [];

function init() {
    hosts.forEach(host => {
        const socket = new net.Socket();
        socket.connect({ host, port: 4224 }, function() {
            socket.host = host
        });

        socket.on('data', data => {
            refreshData(socket.host, JSON.parse(data.toString()));
        });

        socket.on('error', err => {
            console.log(err);
            osData = [];
        });
    })
}


function refreshData(host, data) {
    let elem = osData.filter(d => d.host == host);
    if (elem.length > 0)
        elem[0].data = data;
    else
        osData.push({
            data,
            host
        })
    console.log(`Connected to ${osData.length} servers`);
}

module.exports = {
    //getOSData: () => osData,
    getOSData: () => osData.map(d => d.data),
    init
}