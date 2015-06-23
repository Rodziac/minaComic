goog.provide('MICO.MVC.Model');

goog.require('goog.Uri.QueryData');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('goog.string');
goog.require('goog.structs.Map');

/**
 * Generic model
 * @constructor
 */
MICO.MVC.Model = function() {

    this.xhrHeader = new goog.structs.Map({'Content-Type': 'application/json'});
    this.closureXhr = new goog.net.XhrManager(3, this.xhrHeader, 1, 10, 30000);

};

/**
 * TODO: //
 */
MICO.MVC.Model.prototype.get = function(url, reqBody, callback) {

    if (reqBody && reqBody != {})
        url += '?' + goog.Uri.QueryData.createFromMap(reqBody).toString();

    this.closureXhr.send(
        goog.string.getRandomString(),
        url,
        'GET',
        reqBody,
        undefined,
        undefined,
        function(response) {
            callback.call(this, response.target.getResponseJson());
    });

};

/**
 * TODO: //
 */
MICO.MVC.Model.prototype.post = function(url, reqBody, callback) {

    this.closureXhr.send(
        goog.string.getRandomString(),
        url,
        'POST',
        goog.json.serialize(reqBody),
        this.xhrHeader,
        undefined,
        function(response) {
            callback.call(this, response.target.getResponseJson());
    });

};

/**
 * TODO: //
 */
MICO.MVC.Model.prototype.put = function(url, reqBody, callback) {

    this.closureXhr.send(
        goog.string.getRandomString(),
        url,
        'PUT',
        goog.json.serialize(reqBody),
        this.xhrHeader,
        undefined,
        function(response) {
            callback.call(this, response.target.getResponseJson());
    });

};

/**
 * TODO: //
 */
MICO.MVC.Model.prototype.del = function(url, reqBody, callback) {

    this.closureXhr.send(
        goog.string.getRandomString(),
        url,
        'DELETE',
        goog.json.serialize(reqBody),
        this.xhrHeader,
        undefined,
        function(response) {
            callback.call(this, response.target.getResponseJson());
    });

};
