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
  var comicList70 = opt_data.params.comics;
  var comicListLen70 = comicList70.length;
  for (var comicIndex70 = 0; comicIndex70 < comicListLen70; comicIndex70++) {
    var comicData70 = comicList70[comicIndex70];
    output += '<li><a href="/comic/' + comicData70.comicId + '">' + comicData70.title + ' - ' + comicData70.date + '</a></li>';
  }
  output += '</ul>';
  return output;
};
