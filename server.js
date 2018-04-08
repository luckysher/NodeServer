
const http =  require('http');
const express =  require('express');


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

function home(req, res){
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    info(req, res);
    res.end('<h1 style="color:green;">Home Page</h1>');
}


app.request(function(req, res, next){
        res.statusCode = 404;
        res.setHeader('content-type', 'text/html');
        var response = '<p style="color:Red;">' + res.statusCode + " " + http.STATUS_CODES[res.statusCode] + " " + req.url + '</p><br/> Available urls: <br/> ';

            var urls = nserver.urls;
            var availUrls = '';
            for(var url in urls){
               availUrls = '<h3 style="margin-left:100px;color:blue;">' + availUrls + ` ${url} ` + ' : ' + urls[url] + '<br/></h3>';
            }
            res.end(response + availUrls);
            info(req, res);
    });


app.listen(nserver.config.port, nserver.config.hostname, () => {
    console.log(`Server running at: http://${nserver.config.hostname}:${nserver.config.port}/`);
});
