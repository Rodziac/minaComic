goog.provide('MICO.Models.ContentModel');

goog.require('MICO.MVC.Model');

/**
 * content model to fetch, update, create content
 * @extends {MICO.MVC.Model}
 * @constructor
 */
MICO.Models.ContentModel = function() {

    goog.base(this);

};
goog.inherits(MICO.Models.ContentModel, MICO.MVC.Model);

/**
 * Get content from BE
 * Example:
 * {
 *      contentType: string,
 *      contentDescription: string,
 *      title: string,
 *      description: string
 * }
 * @param {function(Object)} callback callback function
 */
MICO.Models.ContentModel.prototype.getContent = function(callback) {

    var param = {
        "contentType": this.contentType
    };

    this.get('/api/content/getContent', param, function(response) {

        callback.call(this, response);

    });

};

/**
 * Set or update content
 * @param {function(Object)} callback callback function
 */
MICO.Models.ContentModel.prototype.setContent = function(callback) {

    this.get('/api/content/setContent', this.contentData, function(response) {

        callback.call(this, response);

    });

};

//TODO: Get content types
