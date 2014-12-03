var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
exports.contentRouter = router;

var contentSchema = mongoose.Schema({
    title: String,
    description: String
});

var contentCollection = mongoose.model("Content", contentSchema);

router.get("/getContent", function(req, res) {

    res.json({
        title: "hello!",
        description: "this is me, I am this."
    });

});

router.put("/setContent", function(req, res) {

    res.send(true);

});