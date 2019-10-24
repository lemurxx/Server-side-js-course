const fs = require('fs');
const filesPath = './public/files';

function getDirectoryInfo(path, callback) {
    return fs.readdir(filesPath + path, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            files = files.map(dirent => ({
                name: dirent.name,
                isFile: dirent.isFile(),
                isDirectory: dirent.isDirectory()
            }));
            callback(null, {
                path,
                files
            });
        }
    });
}

function getParentDirectoryInfo(path, callback) {
    let folders;
    try {
        folders = path.split('/');
        folders.pop();
    } catch (err) {
        process.nextTick(() => callback(new Error('Error processinf path'), null));
    }
    getDirectoryInfo(folders.join('/'), callback);
}

// get file with readfile
function getFile(path, callback) {
    fs.readFile(filesPath + path, (err, data) => {
        if (err) {
            console.error(err.message);
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
}


// get file with readstream

function getFileStream(path) {
    const stream = fs.createReadStream(filesPath + path);
    stream.on('error', err => console.error(err));
    return stream;
}


module.exports = {
    getDirectoryInfo,
    getParentDirectoryInfo,
    getFile,
    getFileStream
}