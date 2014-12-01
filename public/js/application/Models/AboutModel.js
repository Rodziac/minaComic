goog.provide('MICO.Models.AboutModel');

goog.require('MICO.MVC.Model');

/**
 * About page model to fetch about data
 * @constructor
 */
MICO.Models.AboutModel = function() {

    goog.base(this);

};
goog.inherits(MICO.Models.AboutModel, MICO.MVC.Model);

/**
 * Get about page content from BE
 * @param {function} callback callback function
 */
MICO.Models.AboutModel.prototype.getAboutContent = function(callback) {

    // TODO: Fetch about page data and feed to callback
    // Example:
    // {
    //      title: string
    //      description: string
    // }

    callback.call(this, {
        title: "hello!",
        description: "this is me, I am this."
    });

};
