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

    var that = this;

    this.get('/api/comic/getComicData', params, function(response) {

        response = that.comicDataParser(response);

        callback.call(this, response);

    });

};

MICO.Models.ComicModel.prototype.getRandomComicId = function(callback) {

    this.get('/api/comic/getRandomComic', {}, function(response) {

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

    var that = this;

    this.get('/api/comic/getComicArchive', {}, function(response) {

        response = that.archiveDataParser(response);

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

/**
 *
 * @param data
 * @returns {Object}
 */
MICO.Models.ComicModel.prototype.comicDataParser = function(data) {

    var dateObject = new Date(data["date"]);
    data["humanReadableDate"] = dateObject.getDate() + "/" + dateObject.getMonth() + "/" + dateObject.getFullYear();
    return data;

};

/**
 *
 * @param data
 * @returns {Object}
 */
MICO.Models.ComicModel.prototype.archiveDataParser = function(data) {

    var that = this;

    goog.array.forEach(data["comics"], function(item, index){

        data["comics"][index] = that.comicDataParser(item);

    });

    return data;

};
