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

////1) getParentDirectoryInfo 
function getParentDirectoryInfo(path, callback) {
    getDirectoryInfo(path, callback);
}

////2) get file with readfile
function getFile(path, callback) {
    callback(new Error('Not implemented!'), null);
}


//// get file with readstream

function getFileStream(path) {
    return null;
}


module.exports = {
    getDirectoryInfo,
    getParentDirectoryInfo,
    getFile,
    getFileStream
}