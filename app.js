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
app.use(express.static(__dirname + '/public'));

//app.get(/^(\/js|\/css|\/img).*$/, function (req, res) {
//    console.log("resource hit!");
//    res.sendFile('/public/' + req.url);
//});

var server = app.listen(process.env.PORT || 3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('MinaComic listening at http://%s:%s', host, port);

});
