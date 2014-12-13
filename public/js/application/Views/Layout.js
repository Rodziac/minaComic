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
MICO.Views.Layout.userHeader = function(opt_data, opt_ignored) {
  return '<div class="logoContainer"><a href="/"></a></div><div class="socialContainer">' + MICO.Views.Layout.socialProfiles(opt_data) + '</div><div class="pageNavigator"><ul><li class="home"><a href="/">Home</a></li><li class="archive"><a href="/archive">Archive</a></li><li class="about"><a href="/about">About</a></li></ul></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Layout.userFooter = function(opt_data, opt_ignored) {
  return '<div class="copyright"> Copyright 2014-2015 boobs</div><div class="socialContainer">' + MICO.Views.Layout.socialProfiles(opt_data) + '</div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Layout.socialProfiles = function(opt_data, opt_ignored) {
  return '<ul><li><a href="http://facebook.com" class="externalLink social facebook">Facebook</a></li><li><a href="http://tumblr.com" class="externalLink social tumblr">Tumblr</a></li><li><a href="http://youtube.com" class="externalLink social youtube">Youtube</a></li><li><a href="http://newgrounds.com" class="externalLink social newgrounds">Newgrounds</a></li></ul>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
MICO.Views.Layout.adminHeader = function(opt_data, opt_ignored) {
  return '<div class="logoContainer"><a href="/admin"></a></div><div class="pageNavigator"><ul><li class="home"><a href="/">Home</a></li><li class="admin"><a href="/admin">Admin</a></li><li class="archive"><a href="/archive">Archive</a></li><li class="about"><a href="/about">About</a></li></ul></div>';
};
