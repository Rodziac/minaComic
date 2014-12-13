goog.provide("MICO.Models.ComicModel");

goog.require("MICO.MVC.Model");

/**
 * Index model to fetch comics
 * @extends {MICO.MVC.Model}
 * @constructor
 */
MICO.Models.ComicModel = function() {

    goog.base(this);

};
goog.inherits(MICO.Models.ComicModel, MICO.MVC.Model);

/**
 * Get detailed data of comic
 * Response example:
 * {
 *     comicId: int,
 *     latestComicId: int,
 *     comicImageUrl: string,
 *     comicEmbed: string,
 *     altText: string,
 *     description: string,
 *     title: string,
 *     date: string,
 *     disabled: boolean
 * }
 * @param {function(Object)} callback callback function
 */
MICO.Models.ComicModel.prototype.getComicData = function(callback) {

    var params = {
        "comicId": this.comicId
    };

    this.get('/api/comic/getComicData', params, function(response) {

        callback.call(this, response);

    });

};

/**
 * Get simple list of all comics
 * Example:
 * {
 *      comics: [
 *          {
 *              title: string,
 *              date: string,
 *              comicId: string
 *          }
 *      ]
 * }
 * @param {function(Object)} callback callback function
 */
MICO.Models.ComicModel.prototype.getFullArchive = function(callback) {

    this.get('/api/comic/getComicArchive', {}, function(response) {
//TODO: Handle error situation
        callback.call(this, response);

    });

};


/**
 * Add new comic
 * @param {function(Object)} callback callback function
 */
MICO.Models.ComicModel.prototype.addComic = function(callback) {

    this.post('/api/comic/addComic', this.comicData, function(response) {

        callback.call(this, response);

    });

};

/**
 * Edit comic
 * @param {function(Object)} callback callback function
 */
MICO.Models.ComicModel.prototype.editComic = function(callback) {

    var params = this.comicData;

    this.put('/api/comic/editComic', params, function(response) {

        callback.call(this, response);

    });

};

/**
 * Delete comic
 * @param {function(Object)} callback callback function
 */
MICO.Models.ComicModel.prototype.deleteComic = function(callback) {

    var params = {
        "comicId": this.comicId
    };

    this.del('/api/comic/deleteComic', params, function(response) {

        callback.call(this, response);

    });

};
