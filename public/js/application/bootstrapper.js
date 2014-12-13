goog.provide('MICO.Bootstrapper');

// Require globally required project resources
goog.require('MICO.Application');
goog.require('MICO.MVC.Controller');
goog.require('MICO.MVC.Model');
goog.require('MICO.MVC.View');

/**
 * Starting up web application
 * @constructor
 */

MICO.Bootstrapper = function() {

    /**
     * Start application instance
     *
     */
    var project = new MICO.Application();
        project.init();

};
goog.exportSymbol("MICO.Bootstrapper", MICO.Bootstrapper);