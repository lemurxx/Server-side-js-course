const path = require('path');

const mimeTypes = {
    txt: 'text/plain',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml'
};

function getMimeType(fileName) {
    const fileExtension = path.extname(fileName);
    return mimeTypes[fileExtension.substr(1)];
}


module.exports = {
    getMimeType
}