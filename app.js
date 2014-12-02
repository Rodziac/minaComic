var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get(/^(?!\/js|\/css|\/img|\/api).*$/, function(req, res) {

    var options = {
        root: process.env.PWD + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile('index.html', options);
});

var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('MinaComic listening at http://%s:%s', host, port);

});



