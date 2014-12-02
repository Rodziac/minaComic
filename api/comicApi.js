exports.startApi = function() {

    app.get("/getComicData", function(req, res) {

        res.send({
            comicId: 5,
            latestComicId: 5,
            comicImageUrl: "/uploads/5.png",
            comicSwfUrl: "",
            comicYoutubeEmbed: "",
            altText: "altText",
            description: "this is stuff!",
            title: "demo comic",
            date: "07/01/1990"
        });

    });

    app.get("/getComicArchive", function(req, res) {

        res.send({
            comics: [
                {
                    title: "first",
                    date: "01/01/1990",
                    id: 0
                },
                {
                    title: "second",
                    date: "02/01/1990",
                    id: 1
                }
            ]
        });

    });

    app.post("/addComic", function(req, res) {

        res.send(true);

    });

    app.put("/editComic", function(req, res) {

        res.send(true);

    });

    app.delete("/deleteComic", function(req, res) {

        res.send(true);

    });

};
