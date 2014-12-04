goog.provide('MICO.Models.ArchiveModel');

goog.require('MICO.MVC.Model');

/**
 * Archive page model to fetch archive data
 * @extends {MICO.MVC.Model}
 * @constructor
 */
MICO.Models.ArchiveModel = function() {

    goog.base(this);

};
goog.inherits(MICO.Models.ArchiveModel, MICO.MVC.Model);

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
 * @param {function(Object=)} callback callback function
 */
MICO.Models.ArchiveModel.prototype.getFullArchive = function(callback) {

    this.get('/api/comic/getComicArchive', params, function(response) {
//TODO: Handle error situation
        callback.call(this, response);

    });

};
