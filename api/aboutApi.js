exports.startApi = function() {

    app.get("/getAboutContent", function(req, res) {

        res.send({
            title: "hello!",
            description: "this is me, I am this."
        });

    });

    app.put("/setAboutContent", function(req, res) {

        res.send(true);

    });

};