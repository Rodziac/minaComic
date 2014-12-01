// This file was automatically generated from Index.soy.
// Please don't edit this file by hand.

goog.provide('MICO.Views.Index');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Index.pageContents = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="comicContentContainer"><h2 class="comicTitleContainer">' + opt_data.params.date + ' - ' + opt_data.params.title + '</h2><div class="advertisement wide top"></div><div class="comicNavigation">' + MICO.Views.Index.comicNavigation(opt_data) + '</div><div class="advertisement long left"></div><div class="comicContainer">' + MICO.Views.Index.comicWrapper(opt_data) + '</div><div class="advertisement long right"></div><div class="comicNavigation">' + MICO.Views.Index.comicNavigation(opt_data) + '</div><div class="advertisement wide bottom"></div><div class="comicContentContainer">' + MICO.Views.Index.descriptionWrapper(opt_data) + '</div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Index.comicNavigation = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return ((opt_data.params.comicId == 0) ? '<span class="deactive navFirst">' : '<a class="navFirst" href="/comic/0">First</a>') + ((opt_data.params.comicId == 0) ? '<span class="deactive navPrevious">' : '<a class="navPrevious" href="/comic/' + (opt_data.params.comicId - 1) + '">Previous</a>') + '<a class="navRandom" href="/comic/' + Math.floor(Math.random() * opt_data.params.latestComicId) + '">Random</a>' + ((opt_data.params.comicId == opt_data.params.latestComicId) ? '<span class="deactive navNext">' : '<a class="navNext" href="/comic/' + (opt_data.params.comicId + 1) + '">Next</a>') + ((opt_data.params.comicId == opt_data.params.latestComicId) ? '<span class="deactive navLatest">' : '<a class="navLatest" href="/comic/' + opt_data.params.latestComicId + '">Latest</a>');
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Index.comicWrapper = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return (opt_data.params.comicImageUrl) ? ((opt_data.params.comicId != opt_data.params.latestComicId) ? ' <a href="/comic/' + (opt_data.params.comicId + 1) + '"> ' : '') + '<img class="comicElement" src="' + opt_data.params.comicImageUrl + '" alt="' + opt_data.params.altText + '" />' + ((opt_data.params.comicId != opt_data.params.latestComicId) ? ' </a> ' : '') : (opt_data.params.comicSwfUrl) ? '' : (opt_data.params.comicYoutubeEmbed) ? '' : '';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Index.descriptionWrapper = function(opt_data, opt_ignored) {
  return '<h3 class="comicDescriptionTitle">' + opt_data.params.date + ' - ' + opt_data.params.title + '</h3><p class="comicDescription">' + opt_data.params.description + '</p>';
};
