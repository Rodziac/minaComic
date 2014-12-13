goog.provide('MICO.MVC.Model');

goog.require('goog.structs.Map');
goog.require('goog.net.XhrManager');
goog.require('goog.labs.net.xhr.ResponseType');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.json.Serializer');

/**
 * Generic model
 * @constructor
 */
MICO.MVC.Model = function() {

    var xhrHeader = new goog.structs.Map({'Content-Type': 'application-json'});
    this.closureXhr = new goog.net.XhrManager(3, xhrHeader, 1, 10, 30000);

};

/**
 * TODO: //
 */
MICO.MVC.Model.prototype.get = function(url, reqBody, callback) {

    if(reqBody && reqBody != {})
        url += "?" + goog.Uri.QueryData.createFromMap(reqBody).toString();

    this.closureXhr.send(goog.string.getRandomString(), url, 'GET', reqBody, undefined, undefined, function(response){
        callback.call(this, response.target.getResponseJson());
    });

};

/**
 * TODO: //
 */
MICO.MVC.Model.prototype.post = function(url, reqBody, callback) {

    var request = goog.Uri.QueryData.createFromMap(reqBody);

    this.closureXhr.send(goog.string.getRandomString(), url, 'POST', request, undefined, undefined, function(response){
        callback.call(this, response.target.getResponseJson());
    });

};

/**
 * TODO: //
 */
MICO.MVC.Model.prototype.put = function(url, reqBody, callback) {

    var request = goog.Uri.QueryData.createFromMap(reqBody);

    this.closureXhr.send(goog.string.getRandomString(), url, 'PUT', request, undefined, undefined, function(response){
        callback.call(this, response.target.getResponseJson());
    });

};

/**
 * TODO: //
 */
MICO.MVC.Model.prototype.del = function(url, reqBody, callback) {

    this.closureXhr.send(goog.string.getRandomString(), url, 'DELETE', reqBody, undefined, undefined, function(response){
        callback.call(this, response.target.getResponseJson());
    });

};
