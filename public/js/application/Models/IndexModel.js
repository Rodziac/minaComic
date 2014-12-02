goog.provide("MICO.Models.IndexModel");

goog.require("MICO.MVC.Model");

/**
 * Index model to fetch comics
 * @constructor
 */
MICO.Models.IndexModel = function() {

    goog.base(this);

};
goog.inherits(MICO.Models.IndexModel, MICO.MVC.Model);

/**
 * Get detailed data of comic
 * @param {function} callback callback function
 */
MICO.Models.IndexModel.prototype.getComicData = function(callback) {

    // TODO: Get data from BE and feed it to callback
    // Response example:
    // {
    //      comicId: int,
    //      latestComicId: int,
    //      comicImageUrl: string,
    //      comicSwfUrl: string,
    //      comicYoutubeEmbed: string,
    //      altText: string,
    //      description: string,
    //      title: string,
    //      date: string
    // }
    callback.call(this, {
        comicId: this.comicId ? parseInt(this.comicId, 10) : 5,
        latestComicId: 5,
        comicImageUrl: "/uploads/5.png",
        comicSwfUrl: "",
        comicYoutubeEmbed: "",
        altText: "altText",
        description: "this is stuff!",
        title: "demo comic",
        date: "07/01/1990"
    })

};
