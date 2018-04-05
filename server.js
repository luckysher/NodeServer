



app.listen(nserver.config.port, nserver.config.hostname, () => {
    console.log(`Server running at: http://${nserver.config.hostname}:${nserver.config.port}/`);
});
