const http = require('http');
const fs = require('fs');
const osDataService = require('./os-data.service.js');
const fileBrowserService = require('./file-browser.service');
const url = require('url');

function processRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    switch (parsedUrl.pathname) {
        case '/':
            res.writeHead(301, { 'Location': '/dashboard' });
            res.end();
            break;
        case '/dashboard':
            getPage('./public/dashboard.html', res);
            break;
        case '/file-browser':
            getPage('./public/file-browser.html', res);
            break;
        case '/api/os-data':
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.write(JSON.stringify(osDataService.getOSData()));
            res.end();
            break;
        case '/api/directory':
            {
                let dir = parsedUrl.query.dir;
                if (!dir)
                    dir = '/';
                getJSONResponse(fileBrowserService.getDirectoryInfo, [dir], res);
            }
            break;
        case '/api/directory/parent':
            {
                let dir = parsedUrl.query.dir;
                if (!dir)
                    dir = '/';
                getJSONResponse(fileBrowserService.getParentDirectoryInfo, [dir], res);
            }
            break;
        default:
            fileBrowserService.getFile(req.url, (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(404);
                    res.end();
                } else {
                    res.writeHead(200, { 'content-type': data.mimeType });
                    res.write(data.file);
                    res.end();
                }
            })
    }
}

function getJSONResponse(apiFunc, params, res) {
    apiFunc(...params,
        (err, result) => {
            if (err != null) {
                console.error(err);
                res.writeHead(500);
                res.end();
            } else {
                res.writeHead(200, { 'Content-type': 'application/json' });
                res.write(JSON.stringify(result));
                res.end();
            }
        });
}

function getPage(path, res) {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data)
            res.end();
        }
    });
}

http.createServer(function(req, res) {
    processRequest(req, res);
}).listen(8081);