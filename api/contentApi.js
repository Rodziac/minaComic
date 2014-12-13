var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
exports.contentRouter = router;

var contentSchema = mongoose.Schema({
    contentType: String,
    contentDescription: String,
    title: String,
    description: String
});

var contentCollection = mongoose.model("Content", contentSchema);

router.get("/getContent", function(req, res) {

    contentCollection.findOne({contentType: req.param("contentType")}, null, function(err, content){

        res.json(content);

    });

});

router.put("/setContent", function(req, res) {

    contentCollection.update({contentType: req.param('contentType')}, req.body, {upsert: true}, function(err){

        res.json({success: true});

    });
});

//TODO: Get content types
