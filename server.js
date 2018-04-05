




app.use(function(req, res, next){
        res.statusCode = 404;
        res.setHeader('content-type', 'text/html');
        res.end('<h1 style="color:Red;">' + res.statusCode + " " + http.STATUS_CODES[res.statusCode] + " " + req.url + '</h1>');
        info(req, res);
    });


app.listen(nserver.config.port, nserver.config.hostname, () => {
    console.log(`Server running at: http://${nserver.config.hostname}:${nserver.config.port}/`);
});
