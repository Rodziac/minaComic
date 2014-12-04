goog.provide("MICO.Models.IndexModel");

goog.require("MICO.MVC.Model");

/**
 * Index model to fetch comics
 * @extends {MICO.MVC.Model}
 * @constructor
 */
MICO.Models.IndexModel = function() {

    goog.base(this);

};
goog.inherits(MICO.Models.IndexModel, MICO.MVC.Model);

/**
 * Get detailed data of comic
 * Response example:
 * {
 *     comicId: int,
 *     latestComicId: int,
 *     comicImageUrl: string,
 *     comicSwfUrl: string,
 *     comicYoutubeEmbed: string,
 *     altText: string,
 *     description: string,
 *     title: string,
 *     date: string
 * }
 * @param {function(Object=)} callback callback function
 */
MICO.Models.IndexModel.prototype.getComicData = function(callback) {


    var params = {
        comicId: this.comicId
    };

    this.get('/api/comic/getComicData', params, function(response) {
//TODO: Handle error situation
        callback.call(this, response);

    });

};
