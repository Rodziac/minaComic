// This file was automatically generated from Comic.soy.
// Please don't edit this file by hand.

goog.provide('MICO.Views.Comic');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Comic.pageContents = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="comicContentContainer"><h2 class="comicTitleContainer">' + opt_data.params.date + ' - ' + opt_data.params.title + '</h2><div class="advertisement wide top"></div><div class="comicNavigation">' + MICO.Views.Comic.comicNavigation(opt_data) + '</div><div class="advertisement long left"></div><div class="comicContainer">' + MICO.Views.Comic.comicWrapper(opt_data) + '</div><div class="advertisement long right"></div><div class="comicNavigation">' + MICO.Views.Comic.comicNavigation(opt_data) + '</div><div class="advertisement wide bottom"></div><div class="comicContentContainer">' + MICO.Views.Comic.descriptionWrapper(opt_data) + '</div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Comic.comicNavigation = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return ((opt_data.params.prevId) ? '<span class="deactive navFirst"></span>' : '<a class="navFirst" href="/comic/0">First</a>') + ((opt_data.params.prevId) ? '<span class="deactive navPrevious"></span>' : '<a class="navPrevious" href="/comic/' + opt_data.params.prevId + '">Previous</a>') + '<a class="navRandom" href="/comic/' + Math.floor(Math.random() * opt_data.params.latestComicId) + '">Random</a>' + ((opt_data.params.nextId) ? '<span class="deactive navNext"></span>' : '<a class="navNext" href="/comic/' + opt_data.params.nextId + '">Next</a>') + ((opt_data.params.nextId) ? '<span class="deactive navLatest"></span>' : '<a class="navLatest" href="/comic/' + opt_data.params.latestComicId + '">Latest</a>');
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Comic.comicWrapper = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return (opt_data.params.comicImageUrl) ? ((opt_data.params.comicId != opt_data.params.latestComicId) ? ' <a href="/comic/' + (opt_data.params.comicId + 1) + '"> ' : '') + '<img class="comicElement" src="' + opt_data.params.comicImageUrl + '" alt="' + opt_data.params.altText + '" />' + ((opt_data.params.comicId != opt_data.params.latestComicId) ? ' </a> ' : '') : (opt_data.params.comicSwfUrl) ? '' : (opt_data.params.comicYoutubeEmbed) ? '' : '';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Comic.descriptionWrapper = function(opt_data, opt_ignored) {
  return '<h3 class="comicDescriptionTitle">' + opt_data.params.date + ' - ' + opt_data.params.title + '</h3><p class="comicDescription">' + opt_data.params.description + '</p>';
};
