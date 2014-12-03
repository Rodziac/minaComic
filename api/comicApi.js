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

    book.nextCount(function(err, count) {

        var latestComicId = count - 1;

        comicCollection.findOne({comicId: req.body.comicId || latestComicId}, null, function(err, comic){
            console.log(comic);
            res.json({
                comicId: 5,
                latestComicId: latestComicId,
                comicImageUrl: "/uploads/5.png",
                comicSwfUrl: "",
                comicYoutubeEmbed: "",
                altText: "altText",
                description: "this is stuff!",
                title: "demo comic",
                date: "07/01/1990"
            });

        });

    });

});

router.get("/getComicArchive", function (req, res) {

    res.json({
        comics: [
            {
                title: "first",
                date: "01/01/1990",
                comicId: 0
            },
            {
                title: "second",
                date: "02/01/1990",
                comicId: 1
            }
        ]
    });

});

router.post("/addComic", function (req, res) {

    console.log(req);
    var newComic = new comicCollection({
        comicImageUrl: req.param("comicImageUrl") || "",
        comicSwfUrl: req.param("comicSwfUrl") || "",
        comicYoutubeEmbed: req.param("comicYoutubeEmbed") || "",
        altText: req.param("altText") || "",
        description: req.param("description") || "",
        title: req.param("title") || "",
        date: req.param("date") || new Date()
    });

    //newComic.save(function(err){
    //
    //    res.send(true);
    //
    //});

});

router.put("/editComic", function (req, res) {

    res.send(true);

});

router.delete("/deleteComic", function (req, res) {

    res.send(true);

});
