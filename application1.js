const http = require('http');
const port = process.env.PORT || 3600;

http.createServer(function(req,res){
    console.log(req.url);
    console.log(req.method);
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.write('<h2>21</h2>')
    res.end();
}).listen(port);