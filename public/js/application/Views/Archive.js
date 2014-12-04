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
  var comicList99 = opt_data.params.comics;
  var comicListLen99 = comicList99.length;
  for (var comicIndex99 = 0; comicIndex99 < comicListLen99; comicIndex99++) {
    var comicData99 = comicList99[comicIndex99];
    output += '<li><a href="/comic/' + comicData99.comicId + '">' + comicData99.title + ' - ' + comicData99.date + '</a></li>';
  }
  output += '</ul>';
  return output;
};
