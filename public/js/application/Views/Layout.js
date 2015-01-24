// This file was automatically generated from Layout.soy.
// Please don't edit this file by hand.

goog.provide('MICO.Views.Layout');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Layout.mainLayout = function(opt_data, opt_ignored) {
  return '<div id="header"></div><div id="content"></div><div id="footer"></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Layout.header = function(opt_data, opt_ignored) {
  return '<div class="logoContainer"><a href="/"><img src="http://placehold.it/200x75"></a></div><div class="pageNavigator"><a href="/">Home</a><a href="/archive">Archive</a><a href="/about">About</a></div><div class="socialContainer">' + MICO.Views.Layout.socialProfiles(opt_data) + '</div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Layout.footer = function(opt_data, opt_ignored) {
  return '<div class="copyright"> Copyright 2014-2015 boobs</div><div class="socialContainer">' + MICO.Views.Layout.socialProfiles(opt_data) + '</div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Layout.socialProfiles = function(opt_data, opt_ignored) {
  return '<a href="http://facebook.com" class="externalLink social facebook" title="Facebook"></a><a href="http://tumblr.com" class="externalLink social tumblr" title="Tumblr"></a><a href="http://youtube.com" class="externalLink social youtube" title="Youtube"></a><a href="http://newgrounds.com" class="externalLink social newgrounds" title="Newgrounds"></a><a href="http://twitter.com" class="externalLink social twitter" title="Twitter"></a><a href="http://google.com.com" class="externalLink social google" title="Google"><img src="http://placehold.it/57x34"></a>';
};
