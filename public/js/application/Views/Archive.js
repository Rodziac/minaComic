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
  var comicList63 = opt_data.params.comics;
  var comicListLen63 = comicList63.length;
  for (var comicIndex63 = 0; comicIndex63 < comicListLen63; comicIndex63++) {
    var comicData63 = comicList63[comicIndex63];
    output += '<li><a href="/comic/' + comicData63.comicId + '">' + comicData63.title + ' - ' + comicData63.humanReadableDate + '</a></li>';
  }
  output += '</ul>';
  return output;
};
