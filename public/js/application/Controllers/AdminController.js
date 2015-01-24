goog.provide("MICO.Controllers.AdminController");

goog.require("goog.ui.TabBar");
goog.require("goog.ui.LabelInput");
goog.require("goog.ui.decorate");

goog.require('goog.ui.Checkbox');
goog.require('goog.editor.Command');
goog.require('goog.editor.Field');
goog.require('goog.editor.plugins.BasicTextFormatter');
goog.require('goog.editor.plugins.EnterHandler');
goog.require('goog.editor.plugins.HeaderFormatter');
goog.require('goog.editor.plugins.LinkBubble');
goog.require('goog.editor.plugins.LinkDialogPlugin');
goog.require('goog.editor.plugins.ListTabHandler');
goog.require('goog.editor.plugins.LoremIpsum');
goog.require('goog.editor.plugins.RemoveFormatting');
goog.require('goog.editor.plugins.SpacesTabHandler');
goog.require('goog.editor.plugins.UndoRedo');
goog.require('goog.ui.editor.DefaultToolbar');
goog.require('goog.ui.editor.ToolbarController');

goog.require("MICO.MVC.Controller");

goog.require("MICO.Models.ComicModel");
goog.require("MICO.Models.ContentModel");

goog.require("MICO.Views.Layout");
goog.require("MICO.Views.Admin");


/**
 * Class that handles routing and navigation.
 * @extends {MICO.MVC.Controller}
 * @constructor
 */
MICO.Controllers.AdminController = function() {

    goog.base(this);

    this.comicModel = new MICO.Models.ComicModel();
    this.contentModel = new MICO.Models.ContentModel();

};
goog.inherits(MICO.Controllers.AdminController, MICO.MVC.Controller);

/**
 * Admin page render and initialize
 * @param {Object=} params page parameters
 */
MICO.Controllers.AdminController.prototype.index = function(params) {

    this.render(this.headerTemplate, {}, goog.dom.getElement('header'));

    this.renderPageContent();

};


/**
 * Render page content
 */
MICO.Controllers.AdminController.prototype.renderPageContent = function() {

    var that = this;

    this.render(this.pageContents, {}, goog.dom.getElement("content"));

    var tabBar = new goog.ui.TabBar();
    tabBar.decorate(goog.dom.getElement("tabs"));

    that.renderPostEditor();

    goog.events.listen(tabBar, goog.ui.Component.EventType.SELECT,function(e) {

        switch(this.getSelectedTabIndex()) {
            case 0:
                that.renderPostEditor();
                break;
            case 1:
                that.renderPostList();
                break;
            case 2:
                that.renderContentEditor();
                break;
        }


    });

};

/**
 * Render post editor
 * @param {Object=} postData data of the post being editted
 */
MICO.Controllers.AdminController.prototype.renderPostEditor = function(postData) {

    var that = this;

    this.render(this.postEditor, postData || {}, goog.dom.getElement("tabContent"));

    var descriptionField = new goog.editor.Field('descriptionText');

    // Create and register all of the editing plugins you want to use.
    descriptionField.registerPlugin(new goog.editor.plugins.BasicTextFormatter());
    descriptionField.registerPlugin(new goog.editor.plugins.RemoveFormatting());
    descriptionField.registerPlugin(new goog.editor.plugins.UndoRedo());
    descriptionField.registerPlugin(new goog.editor.plugins.ListTabHandler());
    descriptionField.registerPlugin(new goog.editor.plugins.SpacesTabHandler());
    descriptionField.registerPlugin(new goog.editor.plugins.EnterHandler());
    descriptionField.registerPlugin(new goog.editor.plugins.HeaderFormatter());
    descriptionField.registerPlugin(
        new goog.editor.plugins.LoremIpsum('Click here to edit'));
    descriptionField.registerPlugin(
        new goog.editor.plugins.LinkDialogPlugin());
    descriptionField.registerPlugin(new goog.editor.plugins.LinkBubble());

    // Specify the buttons to add to the toolbar, using built in default buttons.
    var buttons = [
        goog.editor.Command.BOLD,
        goog.editor.Command.ITALIC,
        goog.editor.Command.UNDERLINE,
        goog.editor.Command.FONT_COLOR,
        goog.editor.Command.BACKGROUND_COLOR,
        goog.editor.Command.FONT_FACE,
        goog.editor.Command.FONT_SIZE,
        goog.editor.Command.LINK,
        goog.editor.Command.UNDO,
        goog.editor.Command.REDO,
        goog.editor.Command.UNORDERED_LIST,
        goog.editor.Command.ORDERED_LIST,
        goog.editor.Command.INDENT,
        goog.editor.Command.OUTDENT,
        goog.editor.Command.JUSTIFY_LEFT,
        goog.editor.Command.JUSTIFY_CENTER,
        goog.editor.Command.JUSTIFY_RIGHT,
        goog.editor.Command.SUBSCRIPT,
        goog.editor.Command.SUPERSCRIPT,
        goog.editor.Command.STRIKE_THROUGH,
        goog.editor.Command.REMOVE_FORMAT
    ];

    var toolboxElement = goog.dom.getElement('descriptionEditorToolbox');
    if(toolboxElement) {
        var descriptionEditorToolbox = goog.ui.editor.DefaultToolbar.makeToolbar(buttons, toolboxElement);

        // Hook the toolbar into the field.
        var descriptionEditor = new goog.ui.editor.ToolbarController(descriptionField, descriptionEditorToolbox);
    }

    var liveDatePicker = new goog.ui.LabelInput('MM/DD/YYYY');
    liveDatePicker.render(goog.dom.getElementByClass('comicStartDate'));

    var isDisabled = goog.ui.decorate(goog.dom.getElementByClass('isDisabled'));

    var submitBtn = goog.dom.getElementByClass("submitBtn");
    goog.events.listen(submitBtn, goog.events.EventType.CLICK, function(e){

        var comicData = {
            "comicId": goog.dom.getElementByClass("comicId").value,
            "title": goog.dom.getElementByClass("title").value,
            "description": "",//descriptionEditor.getFieldCopy().innerHTML,
            "altText": goog.dom.getElementByClass("altText").value,
            "disabled": isDisabled.isSelected(),
            "embed": goog.dom.getElementByClass("mediaEmbedCode").value,
            "imageFile": goog.dom.getElementByClass("comicImage").value
        };

        that.comicModel.comicData = comicData;

        if(comicData.comicId > -1) {

            that.comicModel.editComic(function(response){

                alert("DONE!");

            });

        } else {

            that.comicModel.addComic(function(response){

                alert("DONE!")

            });

        }

    });

};

/**
 * Render post list
 * Renders post list, which loads it on post editor on double click
 */
MICO.Controllers.AdminController.prototype.renderPostList = function() {

    var that = this;

    this.comicModel.getFullArchive(function(response) {

        that.render(that.postList, response, goog.dom.getElement("tabContent"));

        var submitBtn = goog.dom.getElementByClass("submitBtn");
        var deleteBtn = goog.dom.getElementByClass("deleteBtn");

        goog.events.listen(submitBtn, goog.events.EventType.CLICK, function(e) {

            that.comicModel.comicId = goog.dom.getElementByClass("comicsList").selectedOptions[0].value;

            that.comicModel.getComicData(function(response){

                that.renderPostEditor(response);

            });

        });

        goog.events.listen(deleteBtn, goog.events.EventType.CLICK, function(e) {

            that.comicModel.comicId = goog.dom.getElementByClass("comicsList").selectedOptions[0].value;

            that.comicModel.deleteComic(function(response){

                alert("DONE!")

            });

        });

    });

};

/**
 * Render content editor tab.
 * Edit content in dropdown (fetched from server) or create new one
 */
MICO.Controllers.AdminController.prototype.renderContentEditor = function() {

    this.contentModel.contentData = {};

    //render

    //init combobox on contentType

    //init editor on contentEditorContainer

    //bind click on submitBtn

};

MICO.Controllers.AdminController.prototype.headerTemplate = MICO.Views.Layout.header;
MICO.Controllers.AdminController.prototype.pageContents = MICO.Views.Admin.pageContents;
MICO.Controllers.AdminController.prototype.postEditor = MICO.Views.Admin.postEditor;
MICO.Controllers.AdminController.prototype.postList = MICO.Views.Admin.postList;
MICO.Controllers.AdminController.prototype.contentEditor = MICO.Views.Admin.contentEditor;
