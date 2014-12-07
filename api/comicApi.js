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
        comicEmbed: String,
        altText: String,
        description: String,
        title: String,
        date: Date,
        disabled: Boolean
    }
);
comicSchema.plugin(mongooseAutoIncrement.plugin, {model: 'Comic', field: 'comicId'});

var comicCollection = mongoose.model("Comic", comicSchema);

router.get("/getComicData", function (req, res) {

    comicCollection.nextCount(function(err, count) {

        var latestComicId = count - 1;

        var requestedComicId = req.param("comicId") == 'undefined' ? latestComicId : req.param("comicId");

        comicCollection.findOne({comicId: requestedComicId, disabled: false}, null, function(err, comic){

            comic.latestComicId = latestComicId;
            res.json(comic);

        });

    });

});

router.get("/getComicArchive", function (req, res) {

    comicCollection.find({disabled: false}, 'title date comicId', function(err, comics) {

        res.json({comics: comics});

    });

});

router.post("/addComic", function (req, res) {

    console.log(req.param("title"));

    var newComic = new comicCollection({
        comicImageUrl: req.param("comicImageUrl") || "",
        comicEmbed: req.param("comicYoutubeEmbed") || "",
        altText: req.param("altText") || "",
        description: req.param("description") || "",
        title: req.param("title") || "Untitled",
        date: req.param("date") || new Date(),
        disabled: req.param("disabled") || false
    });

    newComic.save(function(err){

        res.json({success: true});

    });

});

router.put("/editComic", function (req, res) {
debugger;
    console.log(req.body, req.param('comicId'));
    comicCollection.update({comicId: req.param('comicId')}, req.body, null, function(err){

        res.json({success: true});

    });

});

router.delete("/deleteComic", function (req, res) {

    comicCollection.remove({comicId: req.param('comicId')}, function(err){

        res.json({success: true});

    });

});
