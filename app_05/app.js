const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
};


function staticFile (filePath,ext,res){
    res.setHeader('Content-type', mimeTypes[ext]);
    fs.readFile('./public'+filePath,{encoding: 'utf8', flag:'r'},(error, data) =>{
        if (error){
            res.statusCode = 404;
            res.end();
        }
        res.end(data);
    });
}

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    switch (url) {
        case '/contact':
            console.log('contact');
            staticFile(res, '/contact.html', '.html');
            break
    }
}).listen(PORT);