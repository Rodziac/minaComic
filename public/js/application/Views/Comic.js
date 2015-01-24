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
  return '<a class="navIcon navFirst ' + ((! opt_data.params.prevId || opt_data.params.prevId == 0) ? 'deactive' : '') + '" href="' + ((opt_data.params.prevId || opt_data.params.prevId == 0) ? '/comic/0' : 'javascript:;') + '" title="First"></a><a class="navIcon navPrevious ' + ((! opt_data.params.prevId || opt_data.params.prevId == 0) ? 'deactive' : '') + '" href="' + ((opt_data.params.prevId || opt_data.params.prevId == 0) ? '/comic/' + opt_data.params.prevId : 'javascript:;') + '" title="Previous"></a><a class="navIcon navRandom" href="/comic/' + Math.floor(Math.random() * opt_data.params.latestComicId) + '" title="Random"></a><a class="navIcon navNext ' + ((! opt_data.params.nextId) ? 'deactive' : '') + '" href="' + ((opt_data.params.nextId) ? '/comic/' + opt_data.params.nextId : 'javascript:;') + '" title="Next"></a><a class="navIcon navLatest ' + ((! opt_data.params.nextId) ? 'deactive' : '') + '" href="' + ((opt_data.params.nextId) ? '/comic/' + opt_data.params.latestComicId : 'javascript:;') + '" title="Latest"></a>';
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
