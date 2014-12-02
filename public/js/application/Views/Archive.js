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
  var comicList15 = opt_data.params.comics;
  var comicListLen15 = comicList15.length;
  for (var comicIndex15 = 0; comicIndex15 < comicListLen15; comicIndex15++) {
    var comicData15 = comicList15[comicIndex15];
    output += '<li><a href="/comic/' + comicData15.id + '">' + comicData15.title + ' - ' + comicData15.date + '</a></li>';
  }
  output += '</ul>';
  return output;
};
