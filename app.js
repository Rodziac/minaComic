var express = require('express');

var app = express();

app.get(/^(?!\/js|\/css|\/img).*$/, function (req, res) {

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

app.get(/^(\/js|\/css|\/img).*$/, function (req, res) {

    console.log("resource hit: " + req.url.substr(1));

    var root = req.url.substr(1);
    root = root.split("/");
    var file = root[root.length - 1];
    root = root.pop();
    root = root.join("/");

    console.log(process.env.PWD + '/public/' + root + "  :::  " + file);
    var options = {
        root: process.env.PWD + '/public/' + root,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile(file, options);
});

var server = app.listen(process.env.PORT || 3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('MinaComic listening at http://%s:%s', host, port);

});
