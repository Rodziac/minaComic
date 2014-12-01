goog.provide('MICO.Application');

// Required project resources
goog.require('MICO.Controllers.RouteController');

goog.require("MICO.Views.Layout");

// Required goog resources
goog.require('goog.array');

// Required templates
//goog.require('MICO.Views.Layout');

/**
 * Web application base constructor
 * @extends {MICO.MVC.Controller}
 * @override
 * @constructor
 */
MICO.Application = function() {

    goog.base(this);

};
goog.inherits(MICO.Application, MICO.MVC.Controller);

/**
 * Start up application
 */
MICO.Application.prototype.init = function() {

    this.render(this.siteLayout, {}, goog.dom.getElement("mainWrapper"));

    var router = new MICO.Controllers.RouteController();
    router.startRouting();

};

MICO.Application.prototype.siteLayout = MICO.Views.Layout.mainLayout;