// This file was automatically generated from About.soy.
// Please don't edit this file by hand.

goog.provide('MICO.Views.About');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.About.pageContents = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="aboutContentContainer"><h2 class="aboutTitle">' + opt_data.params.title + '</h2><div class="aboutDescription">' + opt_data.params.description + '</div></div>';
};
