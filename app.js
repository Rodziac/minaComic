var express = require('express');
var mongoose = require('mongoose');
var mongooseAutoIncrement = require('mongoose-auto-increment');

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

mongoose.connect(process.env.MONGOHQ_URL || "mongodb://heroku:Q4a1X7GUj1wACe6cYFpk7vP-gHSirVfay47t9s_pLnyPrgcriSp17dOxdDAquYtt2SCT5o5lYrLfOll0pGej6g@lennon.mongohq.com:10005/app32120463");
var db = mongoose.connection;
mongooseAutoIncrement.initialize(db);


var contentApi = require('./api/contentApi.js');
var comicApi = require('./api/comicApi.js');
app.use('/api/comic', comicApi.comicRouter);
app.use('/api/content', contentApi.contentRouter);


var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('MinaComic listening at http://%s:%s', host, port);

});



