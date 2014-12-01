var express = require('express');

var app = express();

app.get(/^(?!\/js|\/css|\/img).*$/, function (req, res) {
    console.log("page hit!");

    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile('index.html', options);
});

app.get(/^(\/js\/closure-library).*$/, function (req, res) {
    console.log("resource hit! " + req.url);

    var options = {
        root: __dirname + '/public/js/closure-library/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    var file = req.url;
    file.replace("/js/closure-library", "");

    res.sendFile(file, options);
});

app.get(/^(\/js|\/css|\/img).*$/, function (req, res) {
    console.log("resource hit! " + req.url);

    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile(req.url.substr(1), options);
});


var server = app.listen(process.env.PORT || 3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('MinaComic listening at http://%s:%s', host, port);

});
