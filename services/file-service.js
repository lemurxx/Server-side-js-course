const fs = require('fs');

const publicPath = './public/';

function getPage(path) {
    let stream = fs.createReadStream(publicPath + path);
    return stream;
}

module.exports = {
    getPage
}