var express = require('express');
var mongoose = require('mongoose');
var mongooseAutoIncrement = require('mongoose-auto-increment');
var random = require('mongoose-random');

var router = express.Router();

exports.comicRouter = router;

var comicSchema = mongoose.Schema(
    {
        comicId: Number,
        latestComicId: Number,
        prevId: Number,
        nextId: Number,
        comicImageUrl: String,
        comicEmbed: String,
        altText: String,
        description: String,
        title: String,
        date: Date,
        disabled: Boolean
    }
);
comicSchema.plugin(mongooseAutoIncrement.plugin, {model: 'Comic', field: 'comicId'});
comicSchema.plugin(random, { path: 'r' });

var comicCollection = mongoose.model("Comic", comicSchema);

comicCollection.syncRandom(function (err, result) {});

router.get("/getComicData", function (req, res) {

    comicCollection.nextCount(function(err, count) {

        var latestComicId = count - 1;

        var requestedComicId = parseInt(req.query.comicId ? req.query.comicId : latestComicId, 10);

        comicCollection.findOne({comicId: requestedComicId, disabled: false}, null, function(err, comic){

            comic.latestComicId = latestComicId;

            comicCollection.findOne({disabled: false}).where('comicId').lt(requestedComicId).sort('-comicId').select('comicId').exec(function(err, prevComic) {

                if(prevComic) {

                    comic.prevId = prevComic.comicId;

                }

                comicCollection.findOne({disabled: false}).where('comicId').gt(requestedComicId).sort('comicId').select('comicId').exec(function(err, nextComic) {

                    if(nextComic) {

                        comic.nextId = nextComic.comicId;

                    }

                    res.json(comic);

                });

            });

        });

    });

});

router.get("/getComicArchive", function (req, res) {

    comicCollection.find({disabled: false}, 'title date comicId', {sort: {date: 1}} , function(err, comics) {

        res.json({comics: comics});

    });

});

router.post("/addComic", function (req, res) {

    var newComic = new comicCollection({
        comicImageUrl: req.query.comicImageUrl || "",
        comicEmbed: req.query.comicYoutubeEmbed || "",
        altText: req.query.altText || "",
        description: req.query.description || "",
        title: req.query.title || "Untitled",
        date: req.query.date || new Date(),
        disabled: req.query.disabled || false
    });

    newComic.save(function(err){

        res.json({success: true});

        comicCollection.syncRandom(function (err, result) {});

    });

});

router.put("/editComic", function (req, res) {

    comicCollection.update({comicId: req.query.comicId}, req.body, null, function(err){

        res.json({success: true});
        comicCollection.syncRandom(function (err, result) {});

    });

});

router.delete("/deleteComic", function (req, res) {

    comicCollection.remove({comicId: req.query.comicId}, function(err){

        res.json({success: true});
        comicCollection.syncRandom(function (err, result) {});

    });

});

router.get("/getRandomComic", function(req, res) {

    var filter = {$nor: [{disabled: true}, {comicId: req.query.comicId}]};
    var fields = { comicId: 1 };
    var options = { limit: 1 };
    comicCollection.findRandom(filter, fields, options, function (err, comic) {

        res.json(comic[0]);

    });

});