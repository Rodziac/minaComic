goog.provide("MICO.Controllers.ComicController");

goog.require("MICO.MVC.Controller");

goog.require("MICO.Models.ComicModel");

goog.require("MICO.Views.Layout");
goog.require("MICO.Views.Comic");

/**
 * Index page controller
 * @extends {MICO.MVC.Controller}
 * @constructor
 */
MICO.Controllers.ComicController = function() {

    goog.base(this);

    this.model = new MICO.Models.ComicModel();

};
goog.inherits(MICO.Controllers.ComicController, MICO.MVC.Controller);

/**
 * Index page render and initialize
 * @param {Object=} params page parameters
 */
MICO.Controllers.ComicController.prototype.index = function(params) {

    // Render header and footer
    this.render(this.headerTemplate, {}, goog.dom.getElement('header'));
    this.render(this.footerTemplate, {}, goog.dom.getElement('footer'));

    this.renderPageContent(params.comicId);
};

/**
 * Render page content
 * @param {string|number=} comicId ID of the requested comic
 */
MICO.Controllers.ComicController.prototype.renderPageContent = function(comicId) {

    var that = this;

    this.model.comicId = comicId;
    this.model.getComicData(function(response){

        that.render(that.pageContents, response, goog.dom.getElement("content"));

    });


};

MICO.Controllers.ComicController.prototype.headerTemplate = MICO.Views.Layout.userHeader;
MICO.Controllers.ComicController.prototype.footerTemplate = MICO.Views.Layout.userFooter;
MICO.Controllers.ComicController.prototype.pageContents = MICO.Views.Comic.pageContents;
