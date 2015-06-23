goog.provide('MICO.Controllers.ArchiveController');

goog.require('MICO.MVC.Controller');
goog.require('MICO.Models.ComicModel');
goog.require('MICO.Views.Archive');
goog.require('MICO.Views.Layout');

/**
 * Controller handling archive page
 * @extends {MICO.MVC.Controller}
 * @constructor
 */
MICO.Controllers.ArchiveController = function() {

    goog.base(this);

    this.model = new MICO.Models.ComicModel();

};
goog.inherits(MICO.Controllers.ArchiveController, MICO.MVC.Controller);

/**
 * Archive page render and initialize
 * @param {Object=} params page parameters
 */
MICO.Controllers.ArchiveController.prototype.index = function(params) {

    // Render header and footer
    this.render(this.headerTemplate, {}, goog.dom.getElement('header'));
    this.render(this.footerTemplate, {}, goog.dom.getElement('footer'));

    this.renderPageContent();

};

/**
 * Render page content
 */
MICO.Controllers.ArchiveController.prototype.renderPageContent = function() {

    var that = this;

    this.model.getFullArchive(function(response) {

        that.render(that.pageContents, response, goog.dom.getElement('content'));

    });

};

MICO.Controllers.ArchiveController.prototype.headerTemplate = MICO.Views.Layout.header;
MICO.Controllers.ArchiveController.prototype.footerTemplate = MICO.Views.Layout.footer;
MICO.Controllers.ArchiveController.prototype.pageContents = MICO.Views.Archive.pageContents;
MICO.Controllers.ArchiveController.prototype.archiveList = MICO.Views.Archive.archiveList;
