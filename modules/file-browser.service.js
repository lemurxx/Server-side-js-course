//export a getDirectoryInfo(path, callback) method
//which returns directory information in a non-blocking way

//the method accepts 2 arguments:
//path - path of the directory 
//callback - a node-style error-first - relative to ./public/files: '/images' means './public/files/images'   
//https://nodejs.org/api/errors.html#errors_error_first_callbacks

//if there is no error the method passes an object with 2 properties to the callback:
//          path - path of the directory (equals to the path argument) 
//          files - array of data of the files in the directory 
//{
//    path :"/images",  
//    files":[{
//          name: "gif",
//          isFile: false,
//          isDirectory: true
//     },{
//         name:"photo.jpg",
//         isFile:true,
//         isDirectory:false
//     }
// ]}
//to retreive the data use the 'readdir' method of the 'fs' module
//set withFileTypes property = true in the options argument of the readdir method to make the method return 'Dirent' objects instead of file names
//https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback
//https://nodejs.org/api/fs.html#fs_class_fs_dirent  
function getDirectoryInfo(path, callback) {}




//export a getParentDirectoryInfo(path, callback) method
//which returns parent directory information in a non-blocking way

//the method acccepts 2 arguments:
//path - path of the child directory 
//callback - a node-style error-first callback 

//the value passed to the callback has the same properties as the one passed by the getDirectoryInfo method
//extract the path of the parent directory from the child directory with the help of string methods
function getParentDirectoryInfo(path, callback) {}



//export a getFile(path, callback) method
//which returns the mime-type and the content of a file in a non-blocking way

//the method acccepts 2 arguments:
//path - path of the file
//callback - a node-style error-first callback 

//create a separate module to handle mime-type information (read the instructions in mime-type.service.js) 
//use the above module to get the mime-type of the file
//if the file type is not supported pass an error object (new Error(message)) to the callback function 
//read the content of the file with the help of the 'readfile' method of the 'fs' module
//pass on object with the result of the file reading and the mime type of the file to the callback:
//{
//    mimeType: mimeType,
//    file: readResult  
//} 
//
//https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
function getFile(path, callback) {}



module.exports = {
    getDirectoryInfo,
    getParentDirectoryInfo,
    getFile
}