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
  var comicList8 = opt_data.params.comics;
  var comicListLen8 = comicList8.length;
  for (var comicIndex8 = 0; comicIndex8 < comicListLen8; comicIndex8++) {
    var comicData8 = comicList8[comicIndex8];
    output += '<li><a href="/comic/' + comicData8.comicId + '">' + comicData8.title + ' - ' + comicData8.humanReadableDate + '</a></li>';
  }
  output += '</ul>';
  return output;
};
