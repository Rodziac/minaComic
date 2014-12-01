var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/*", function(req, res){
    console.log(req);
    res.send("done");
});
//app.get(/^(?!\/js|\/css|\/img).*$/, function (req, res) {
//    console.log(req);
//    res.sendFile('/public/index.html');
//});

var server = app.listen(process.env.PORT || 3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('MinaComic listening at http://%s:%s', host, port);

});
