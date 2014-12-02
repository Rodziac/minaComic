var express = require('express');
var mongoose = require('mongoose');
//var api = require('./api/api.js');
//var aboutApi = require('./aboutApi.js');
//var comicApi = require('./comicApi.js');

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

//mongoose.connect(process.env.MONGOHQ_URL);
//exports.db = mongoose.connection;
//
//router.use('api', api);


var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('MinaComic listening at http://%s:%s', host, port);

});



