var express = require('express');
var mongoose = require('mongoose');
var mongooseAutoIncrement = require('mongoose-auto-increment');

var router = express.Router();

exports.comicRouter = router;

var comicSchema = mongoose.Schema(
    {
        comicId: Number,
        latestComicId: Number,
        comicImageUrl: String,
        comicSwfUrl: String,
        comicYoutubeEmbed: String,
        altText: String,
        description: String,
        title: String,
        date: Date
    }
);
comicSchema.plugin(mongooseAutoIncrement.plugin, {model: 'Comic', field: 'comicId'});

var comicCollection = mongoose.model("Comic", comicSchema);

router.get("/getComicData", function (req, res) {

    comicCollection.nextCount(function(err, count) {

        var latestComicId = count - 1;

        var requestedComicId = req.param("comicId") || req.param("comicId") === 0 ? 0 : latestComicId;

        comicCollection.findOne({comicId: requestedComicId}, null, function(err, comic){

            comic.latestComicId = latestComicId;
            res.json(comic);

        });

    });

});

router.get("/getComicArchive", function (req, res) {

    comicCollection.find({}, 'title date comicId', function(err, comics) {

        res.json({comics: comics});

    });

});

router.post("/addComic", function (req, res) {

    var newComic = new comicCollection({
        comicImageUrl: req.param("comicImageUrl") || "",
        comicSwfUrl: req.param("comicSwfUrl") || "",
        comicYoutubeEmbed: req.param("comicYoutubeEmbed") || "",
        altText: req.param("altText") || "",
        description: req.param("description") || "",
        title: req.param("title") || "Untitled",
        date: req.param("date") || new Date()
    });

    newComic.save(function(err){

        res.json({success: true});

    });

});

router.put("/editComic", function (req, res) {

    comicCollection.update({comicId: req.param('comicId')}, req.body, null, function(err){

        res.json({success: true});

    });

});

router.delete("/deleteComic", function (req, res) {

    comicCollection.remove({comicId: req.param('comicId')}, function(err){

        res.json({success: true});

    });

});
