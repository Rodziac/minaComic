goog.provide('MICO.MVC.Controller');

goog.require('goog.dom');

/**
 * Controller base
 * @constructor
 */
MICO.MVC.Controller = function() {

};

/**
 * Render pages as dom object and append to page.
 * @param {function(Object=)} template Template script
 * @param {Object} params Parameters for template.
 * @param {HTMLElement|Element} domWrapper Target container for render
 */
MICO.MVC.Controller.prototype.render = function(template, params, domWrapper) {

    /**
     * Create HTML
     * @type {!Node}
     */
    var renderedDOM = this.buildDOM(template, params);

    /**
     * domWrapper or siteContainer DOM.
     */
    var container = domWrapper;
    container.innerHTML = "";


    /**
     * Inject dom no effect
     */
    goog.dom.appendChild(container, renderedDOM);

};

/**
 * Render template script.
 * @param {function(Object=)} template Pure Template script.
 * @param {Object} params Parameters to be passed to template.
 * @return {!Node} Returns HTML Node Type.
 */
MICO.MVC.Controller.prototype.buildDOM = function (template, params) {
    return goog.dom.htmlToDocumentFragment(this.getHtmlWithParams(template,params));
};

/**
 * Render pages as dom object and append to page.
 * @param {function(Object=)} template Pure Template script.
 * @param {Object} params Parameters to be passed to template.
 * @return {!string} Returns HTML Node Type.
 */
MICO.MVC.Controller.prototype.getHtmlWithParams = function (template, params) {

    var markup = "";

    if (params) {
        var context = { params:params }; // Google SOY Templates needs for a wrapper for given parameters.
        markup = template(context);
    }

    return markup;

};
