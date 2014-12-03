goog.provide('MICO.Models.ArchiveModel');

goog.require('MICO.MVC.Model');

/**
 * Archive page model to fetch archive data
 * @constructor
 */
MICO.Models.ArchiveModel = function() {

    goog.base(this);

};
goog.inherits(MICO.Models.ArchiveModel, MICO.MVC.Model);

/**
 * Get simple list of all comics
 * @param {function} callback callback function
 */
MICO.Models.ArchiveModel.prototype.getFullArchive = function(callback) {

    // TODO: Fetch full comic list as archive and feed callback
    // Example:
    // {
    //      comics: [
    //          {
    //              title: string,
    //              date: string,
    //              comicId: string
    //          }
    //      ]
    // }

    callback.call(this, {
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

};
