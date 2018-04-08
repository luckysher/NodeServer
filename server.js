
const http =  require('http');
const express =  require('express');
const nserver = require('./config');


var app = express();

function info(req, res){
    console.log(req.method + " " + res.statusCode + " " + http.STATUS_CODES[res.statusCode] + " " + req.url);
}

function index(req, res){
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    info(req, res);
    res.end('<h1 style="color:Red;">hello node test server !</h1> <h1 style="color:Red;">hello node with controller test server !</h1>');
}



app.request(function(req, res, next){
        res.statusCode = 404;
        res.setHeader('content-type', 'text/html');
        res.end('<h1 style="color:Red;">' + res.statusCode + " " + http.STATUS_CODES[res.statusCode] + " " + req.url + '</h1>');
        info(req, res);
    });


app.listen(nserver.config.port, nserver.config.hostname, () => {
    console.log(`Server running at: http://${nserver.config.hostname}:${nserver.config.port}/`);
});
