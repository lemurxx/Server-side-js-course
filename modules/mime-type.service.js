const mimeTypes = {
    txt: 'text/plain',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml'
};

//create a module that exports a getMimeType(filePath) method
//the method accepts an argument which is a file path
//the method returns the mime type of the file with the help of the mimeTypes object
//if the extension of the file cannot be found the file is not supported
//to retrieve the extension of the file use the 'extname' API of the 'path' module
//https://nodejs.org/api/path.html#path_path_extname_path