
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
// home view
function home(req, res){
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    info(req, res);

    res.end('<h1 style="color:green;">Home Page ' + req.params.name + ' </h1>');
}

app.get('/home/sh+sa', home);
app.get('/', index);
app.get('/index', index);

app.use(function(req, res, next){
            res.statusCode = 404;
            res.setHeader('content-type', 'text/html');
            var response = '<p style="color:Red;">' + res.statusCode + " " + http.STATUS_CODES[res.statusCode] + " " + req.url + '</p><br/> Available urls: <br/> ';

            var urls = nserver.urls;
            var availUrls = '';
            for(var url in urls){
               availUrls = availUrls + '<p style="margin-left:100px;"> ' + ` ${url} ` + ' : <a href="' + urls[url] + '">'+ urls[url] +'</a><br/></p>';
            }
            res.end(response + availUrls);
            info(req, res);
    });


app.listen(nserver.config.port, nserver.config.hostname, () => {
    console.log(`Server running at: http://${nserver.config.hostname}:${nserver.config.port}/`);
});
