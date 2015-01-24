goog.provide("MICO.Controllers.AboutController");

goog.require("MICO.MVC.Controller");

goog.require("MICO.Models.ContentModel");

goog.require("MICO.Views.Layout");
goog.require("MICO.Views.About");

/**
 * Controller that handles about page.
 * @extends {MICO.MVC.Controller}
 * @constructor
 */
MICO.Controllers.AboutController = function() {

    goog.base(this);

    this.model = new MICO.Models.ContentModel();

};
goog.inherits(MICO.Controllers.AboutController, MICO.MVC.Controller);

/**
 * About page render and initialize
 * @param {Object=} params page parameters
 */
MICO.Controllers.AboutController.prototype.index = function(params) {

    // Render header and footer
    this.render(this.headerTemplate, {}, goog.dom.getElement('header'));
    this.render(this.footerTemplate, {}, goog.dom.getElement('footer'));

    this.renderPageContent();

};

/**
 * Render page's content
 */
MICO.Controllers.AboutController.prototype.renderPageContent = function() {

    var that = this;

    this.model.contentType = "about";
    this.model.getContent(function(response){

        that.render(that.pageContents, response, goog.dom.getElement("content"));

    });

};



MICO.Controllers.AboutController.prototype.headerTemplate = MICO.Views.Layout.header;
MICO.Controllers.AboutController.prototype.footerTemplate = MICO.Views.Layout.footer;
MICO.Controllers.AboutController.prototype.pageContents = MICO.Views.About.pageContents;
