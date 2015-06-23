goog.provide('MICO.Controllers.AdminController');

goog.require('MICO.MVC.Controller');
goog.require('MICO.Models.ComicModel');
goog.require('MICO.Models.ContentModel');
goog.require('MICO.Utils');
goog.require('MICO.Views.Admin');
goog.require('MICO.Views.Layout');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.ui.Checkbox');
goog.require('goog.ui.ComboBox');
goog.require('goog.ui.InputDatePicker');
goog.require('goog.ui.LabelInput');
goog.require('goog.ui.TabBar');
goog.require('goog.ui.decorate');

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

    this.render(this.pageContents, {}, goog.dom.getElement('content'));

    var tabBar = new goog.ui.TabBar();
    tabBar.decorate(goog.dom.getElement('tabs'));

    that.renderPostEditor();

    goog.events.listen(tabBar, goog.ui.Component.EventType.SELECT, function(e) {

        switch (this.getSelectedTabIndex()) {
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

    this.render(this.postEditor, postData || {}, goog.dom.getElement('tabContent'));

    var descriptionEditor = MICO.Utils.renderTextEditor(
                                'descriptionText',
                                'descriptionEditorToolbox'
                            );

    var PATTERN = "MM'/'dd'/'yyyy";
    var formatter = new goog.i18n.DateTimeFormat(PATTERN);
    var parser = new goog.i18n.DateTimeParse(PATTERN);

    var liveDatePicker = new goog.ui.LabelInput('MM/DD/YYYY');
    liveDatePicker.render(goog.dom.getElementByClass('comicStartDate'));
    var liveDatePickerAction = new goog.ui.InputDatePicker(formatter, parser);
    liveDatePickerAction.decorate(liveDatePicker.getElement());

    var isDisabled = goog.ui.decorate(goog.dom.getElementByClass('isDisabled'));

    var submitBtn = goog.dom.getElementByClass('submitBtn');
    goog.events.listen(submitBtn, goog.events.EventType.CLICK, function(e) {

        var comicData = {
            'comicId': goog.dom.getElementByClass('comicId').value,
            'title': goog.dom.getElementByClass('title').value,
            'description': descriptionEditor.getFieldCopy().innerHTML,
            'altText': goog.dom.getElementByClass('altText').value,
            'disabled': isDisabled.isSelected(),
            'embed': goog.dom.getElementByClass('mediaEmbedCode').value,
            'imageFile': goog.dom.getElementByClass('comicImage').value
        };

        that.comicModel.comicData = comicData;

        if (comicData.comicId > -1) {

            that.comicModel.editComic(function(response) {

                alert('DONE!');

            });

        } else {

            that.comicModel.addComic(function(response) {

                alert('DONE!');

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

        that.render(that.postList, response, goog.dom.getElement('tabContent'));

        var submitBtn = goog.dom.getElementByClass('submitBtn');
        var deleteBtn = goog.dom.getElementByClass('deleteBtn');

        goog.events.listen(submitBtn, goog.events.EventType.CLICK, function(e) {

            that.comicModel.comicId = goog.dom.getElementByClass('comicsList')
                                        .selectedOptions[0].value;

            that.comicModel.getComicData(function(response) {

                that.renderPostEditor(response);

            });

        });

        goog.events.listen(deleteBtn, goog.events.EventType.CLICK, function(e) {

            that.comicModel.comicId = goog.dom.getElementByClass('comicsList')
                                        .selectedOptions[0].value;

            that.comicModel.deleteComic(function(response) {

                alert('DONE!');

            });

        });

    });

};

/**
 * Render content editor tab.
 * Edit content in dropdown (fetched from server) or create new one
 */
MICO.Controllers.AdminController.prototype.renderContentEditor = function() {

    var that = this;

    this.render(this.contentEditor, {}, goog.dom.getElement('tabContent'));

    var comboElement = goog.dom.getElement('contentType');
    var comboBox = new goog.ui.ComboBox();
    comboBox.setUseDropdownArrow(true);
    comboBox.setDefaultText('Select a content type...');

    this.contentModel.getContentTypes(function(contentTypes) {

        goog.array.forEach(contentTypes, function(contentType) {

            comboBox.addItem(new goog.ui.ComboBoxItem(contentType));

        });

        var newContent = new goog.ui.ComboBoxItem('New Content');
        newContent.setSticky(true);
        comboBox.addItem(newContent);

        comboBox.render(comboElement);

    });

    goog.events.listen(comboBox, 'change', function(e) {

        that.contentModel.contentType = e.target.getValue();

        that.contentModel.getContent(function(response) {

            //Set content of editor to content in response

        });

    });


    var descriptionEditor = MICO.Utils.renderTextEditor('contentText', 'contentToolbar');

    var submitBtn = goog.dom.getElementByClass('submitBtn');
    goog.events.listen(submitBtn, goog.events.EventType.CLICK, function(e) {

        that.contentModel.contentData = {
            'contentType': comboBox.getValue(),
            'contentDescription': '',
            'title': '',
            'content': descriptionEditor.getFieldCopy().innerHTML
        };

        that.contentModel.setContent(function(response) {

            alert('Done!');

        });

    });
};

MICO.Controllers.AdminController.prototype.headerTemplate = MICO.Views.Layout.header;
MICO.Controllers.AdminController.prototype.pageContents = MICO.Views.Admin.pageContents;
MICO.Controllers.AdminController.prototype.postEditor = MICO.Views.Admin.postEditor;
MICO.Controllers.AdminController.prototype.postList = MICO.Views.Admin.postList;
MICO.Controllers.AdminController.prototype.contentEditor = MICO.Views.Admin.contentEditor;
