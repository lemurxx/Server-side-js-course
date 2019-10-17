const os = require('os');

function getOSData() {

    return {
        platform: os.platform(),
        os: `${os.type()} ${os.release}`,
        arch: os.arch(),
        cpus: os.cpus().length,
        mem: {
            free: os.freemem() / 1024 / 1024 / 1024,
            total: os.totalmem() / 1024 / 1024 / 1024
        },
        network: {
            ethernet: getIpv4(os.networkInterfaces()['Ethernet']),
            wireless: getIpv4(os.networkInterfaces()['Wi-Fi'])
        }
    }
}

function getIpv4(interfaces) {
    if (interfaces) {
        const int = interfaces.filter(intf => intf.family == 'IPv4').map(intf => intf.address);
        if (int.length)
            return int[0];
    }
    return '';
}

module.exports = {
    getOSData: getOSData
}