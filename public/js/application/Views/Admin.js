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
  return '<div id="postForm"><input type="text" class="comicId" disabled=disabled hidden=hidden value="' + ((opt_data.params.comicId) ? opt_data.params.comicId : '-1') + '"></input><span class="inputLabel">Title: </span><input type="text" class="title" value="' + ((opt_data.params.title) ? opt_data.params.title : '') + '"></input><span class="inputLabel">Description: </span><div class="descriptionContainer"><div id=\'descriptionEditorToolbox\'></div><div id=\'descriptionText\'>' + ((opt_data.params.description) ? opt_data.params.description : '') + '</div></div><span class="inputLabel">Alt text: </span><input type="text" class="altText" value="' + ((opt_data.params.altText) ? opt_data.params.altText : '') + '"></input><span class="inputLabel">Live date: </span><div class="comicStartDate"></div><span class="inputLabel">Disabled: </span><span class="isDisabled goog-checkbox ' + ((opt_data.params.disabled) ? 'goog-checkbox-checked' : '') + '"></span><span class="inputLabel">Embed code: </span><textarea class="mediaEmbedCode">' + ((opt_data.params.comicEmbed) ? opt_data.params.comicEmbed : '') + '</textarea><span class="inputLabel">Comic Image: </span><input type="file" accept="image/*" class="comicImage"></input><span class="submitBtn">Submit</span></div>';
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
  var comicList42 = opt_data.params.comics;
  var comicListLen42 = comicList42.length;
  for (var comicIndex42 = 0; comicIndex42 < comicListLen42; comicIndex42++) {
    var comicData42 = comicList42[comicIndex42];
    output += '<option value="' + comicData42.comicId + '">' + comicData42.date + ' - ' + comicData42.title + '</option>';
  }
  output += '</select><span class="submitBtn">Submit</span><span class="deleteBtn">Delete</span>';
  return output;
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Admin.contentEditor = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="contentType"></div><div class="contentEditorContainer"><div class=\'toolbar\'></div><div class=\'contentText\'>' + opt_data.params.description + '</div></div><span class="submitBtn"></span>';
};
