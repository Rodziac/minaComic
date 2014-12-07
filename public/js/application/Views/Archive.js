// This file was automatically generated from Archive.soy.
// Please don't edit this file by hand.

goog.provide('MICO.Views.Archive');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Archive.pageContents = function(opt_data, opt_ignored) {
  return '<div class="archiveContentContainer"><div class="archive">' + MICO.Views.Archive.archiveList(opt_data) + '</div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Archive.archiveList = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul>';
  var comicList156 = opt_data.params.comics;
  var comicListLen156 = comicList156.length;
  for (var comicIndex156 = 0; comicIndex156 < comicListLen156; comicIndex156++) {
    var comicData156 = comicList156[comicIndex156];
    output += '<li><a href="/comic/' + comicData156.comicId + '">' + comicData156.title + ' - ' + comicData156.date + '</a></li>';
  }
  output += '</ul>';
  return output;
};
