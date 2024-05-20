const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 4000;

http.createServer(function(req, res) {
    const url = req.url;
    console.log(url)
    res.setHeader('content-type', 'text/html; charset=utf-8');
    switch (url) {
        case '/':
            console.log('main page');
            res.write('<h1>Main</h1>');
            break;
        case '/contact':
            console.log('contact page');
            let data = fs.readFileSync('./contact.html', { encoding: 'utf8' , flag: "r"});
            res.write(data);
            break;
        default:
            console.log('404');
            res.write('<h1>404</h1>');
    }
    res.end();

}).listen(PORT);