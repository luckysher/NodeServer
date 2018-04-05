




app.use(function(req, res, next){
        res.statusCode = 404;
        res.setHeader('content-type', 'text/html');

    });


app.listen(nserver.config.port, nserver.config.hostname, () => {
    console.log(`Server running at: http://${nserver.config.hostname}:${nserver.config.port}/`);
});
