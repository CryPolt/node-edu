const http = require('http');
const port = process.env.PORT || 3500;

http.createServer(function(req,res){
    console.log('server work');
    res.end('<!DOCTYPE html>');
}).listen(port);