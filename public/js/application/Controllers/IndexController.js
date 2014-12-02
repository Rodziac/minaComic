goog.provide("MICO.Controllers.IndexController");

goog.require("MICO.MVC.Controller");

goog.require("MICO.Models.IndexModel");

goog.require("MICO.Views.Layout");
goog.require("MICO.Views.Index");

/**
 * Index page controller
 * @extends {MICO.MVC.Controller}
 * @constructor
 */
MICO.Controllers.IndexController = function() {

    goog.base(this);

    this.model = new MICO.Models.IndexModel();

};
goog.inherits(MICO.Controllers.IndexController, MICO.MVC.Controller);

/**
 * Index page render and initialize
 * @param {Object} params page parameters
 */
MICO.Controllers.IndexController.prototype.index = function(params) {

    // Render header and footer
    this.render(this.headerTemplate, {}, goog.dom.getElement('header'));
    this.render(this.footerTemplate, {}, goog.dom.getElement('footer'));

    this.renderPageContent(params.comicId);
};

/**
 * Render page content
 * @param {string|int=} comicId ID of the requested comic
 */
MICO.Controllers.IndexController.prototype.renderPageContent = function(comicId) {

    var that = this;

    this.model.comicId = comicId;
    this.model.getComicData(function(response){

        that.render(that.pageContents, response, goog.dom.getElement("content"));

    });


};

MICO.Controllers.IndexController.prototype.headerTemplate = MICO.Views.Layout.userHeader;
MICO.Controllers.IndexController.prototype.footerTemplate = MICO.Views.Layout.userFooter;
MICO.Controllers.IndexController.prototype.pageContents = MICO.Views.Index.pageContents;
