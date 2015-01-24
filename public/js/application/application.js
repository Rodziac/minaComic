goog.provide('MICO.Application');

// Required project resources
goog.require('MICO.Controllers.RouteController');
goog.require('MICO.LayoutHelper');

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

    //Render layout to be filled
    this.render(this.siteLayout, {}, goog.dom.getElement("mainWrapper"));

    // Start routing, and the application will run with it.
    var router = new MICO.Controllers.RouteController();
    router.startRouting();

    // Set page content height to push footer down and fill window
    MICO.LayoutHelper.setContentHeight();
    goog.events.listen(window, goog.events.EventType.RESIZE, function() {

        MICO.LayoutHelper.setContentHeight();

    });

};

MICO.Application.prototype.siteLayout = MICO.Views.Layout.mainLayout;