goog.provide('MICO.Models.AboutModel');

goog.require('MICO.MVC.Model');

/**
 * About page model to fetch about data
 * @extends {MICO.MVC.Model}
 * @constructor
 */
MICO.Models.AboutModel = function() {

    goog.base(this);

};
goog.inherits(MICO.Models.AboutModel, MICO.MVC.Model);

/**
 * Get about page content from BE
 * Example:
 * {
 *      contentType: string,
 *      title: string,
 *      description: string
 * }
 * @param {function(Object=)} callback callback function
 */
MICO.Models.AboutModel.prototype.getAboutContent = function(callback) {

    var param = {
        "contentType": "about"
    };

    this.get('/api/content/getContent', param, function(response) {

        callback.call(this, response);

    });

};
