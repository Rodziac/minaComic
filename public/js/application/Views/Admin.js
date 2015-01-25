// This file was automatically generated from Admin.soy.
// Please don't edit this file by hand.

goog.provide('MICO.Views.Admin');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Admin.pageContents = function(opt_data, opt_ignored) {
  return '<div class="adminContentContainer"><div class="adminControlPanel">' + MICO.Views.Admin.adminPanelTabs(opt_data) + '<div class="goog-tab-bar-clear"></div>' + MICO.Views.Admin.adminPanelContents(opt_data) + '</div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Admin.adminPanelTabs = function(opt_data, opt_ignored) {
  return '<div id="tabs" class="goog-tab-bar goog-tab-bar-top"><div class="goog-tab goog-tab-selected">Post Editor</div><div class="goog-tab">Post List</div><div class="goog-tab">Content Management</div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Admin.adminPanelContents = function(opt_data, opt_ignored) {
  return '<div id="tabContent" class="goog-tab-content"></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Admin.postEditor = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div id="postForm"><input type="text" class="comicId" disabled=disabled hidden=hidden value="' + ((opt_data.params.comicId) ? opt_data.params.comicId : '-1') + '"></input><span class="inputLabel">Title: </span><input type="text" class="title" value="' + ((opt_data.params.title) ? opt_data.params.title : '') + '"></input><span class="inputLabel">Description: </span><div class="descriptionContainer"><div id=\'descriptionEditorToolbox\'></div><div id=\'descriptionText\'>' + ((opt_data.params.description) ? opt_data.params.description : '') + '</div></div><span class="inputLabel">Alt text: </span><input type="text" class="altText" value="' + ((opt_data.params.altText) ? opt_data.params.altText : '') + '"></input><span class="inputLabel">Live date: </span><div class="comicStartDate"></div><span class="inputLabel">Disabled: </span><span class="isDisabled goog-checkbox ' + ((opt_data.params.disabled) ? 'goog-checkbox-checked' : 'goog-checkbox-unchecked') + '"></span><span class="inputLabel">Embed code: </span><textarea class="mediaEmbedCode">' + ((opt_data.params.comicEmbed) ? opt_data.params.comicEmbed : '') + '</textarea><span class="inputLabel">Comic Image: </span><input type="file" accept="image/*" class="comicImage"></input><span class="submitBtn button">Submit</span><span class="resetBtn button">Reset</span></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Admin.postList = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<select size="10" class="comicsList" name="comicsList">';
  var comicList167 = opt_data.params.comics;
  var comicListLen167 = comicList167.length;
  for (var comicIndex167 = 0; comicIndex167 < comicListLen167; comicIndex167++) {
    var comicData167 = comicList167[comicIndex167];
    output += '<option value="' + comicData167.comicId + '">' + comicData167.date + ' - ' + comicData167.title + '</option>';
  }
  output += '</select><span class="submitBtn button">Submit</span><span class="deleteBtn button">Delete</span>';
  return output;
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Admin.contentEditor = function(opt_data, opt_ignored) {
  return '<div id="contentType" class="use-arrow"></div><div class="contentEditorContainer"><div id=\'contentToolbar\'></div><div id=\'contentText\'></div></div><span class="submitBtn button">Submit</span>';
};
