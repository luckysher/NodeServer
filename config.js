'use strict';

var ServerConf = Object.create(null);


ServerConf = {
    config:{
          hostname: '127.0.0.1',
          port: 3000
    },
    urls:{
        '1': '/',
        '2': '/index',
        '3': '/home'
    }
}

module.exports = ServerConf;


