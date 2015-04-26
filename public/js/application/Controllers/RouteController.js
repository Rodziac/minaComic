goog.provide("MICO.Controllers.RouteController");

goog.require("MICO.MVC.Controller");

// Page resources
goog.require("MICO.Controllers.ComicController");
goog.require("MICO.Controllers.ArchiveController");
goog.require("MICO.Controllers.AboutController");
goog.require("MICO.Controllers.AdminController");

// Required goog resources
goog.require("goog.history.Html5History");
goog.require("goog.string");
goog.require('goog.dom.classlist');

/**
 * Controller that handles routing and navigation.
 * @extends {MICO.MVC.Controller}
 * @constructor
 */
MICO.Controllers.RouteController = function() {

    goog.base(this);

    this.routesMap = [];
    if (goog.history.Html5History.isSupported(window)) {
        this.historyObject = new goog.history.Html5History();
    }


};
goog.inherits(MICO.Controllers.RouteController, MICO.MVC.Controller);

/**
 * Listen to link clicks and navigation
 */
MICO.Controllers.RouteController.prototype.startRouting = function () {

    var that = this;

    this.setRoutes_();

    if (this.historyObject) {

        // Disable postback on link click
        goog.events.listen(document, 'click', function (e) {

            //TODO: if case repetition
            if (e.target.nodeName == "A" && e.target.href && e.target.href != "javascript:;" && !goog.dom.classlist.contains(e.target, goog.getCssName('externalLink'))) {
                e.preventDefault();
                that.historyObject.setToken(e.target.href.replace(window.location.origin, "").substr(1));
            } else if (e.target.parentElement.nodeName == "A" && e.target.parentElement.href && e.target.parentElement.href != "javascript:;" && !goog.dom.classlist.contains(e.target.parentElement, goog.getCssName('externalLink'))) {
                e.preventDefault();
                that.historyObject.setToken(e.target.parentElement.href.replace(window.location.origin, "").substr(1));
            }
        });

        // Listen history navigation events and nav
        goog.events.listen(this.historyObject, goog.history.EventType.NAVIGATE, function (e) {

            e.preventDefault();
            that.historyObject.setToken(e.token);
            that.findNavigation_(e.token);

        });

        this.historyObject.setUseFragment(false);
        this.historyObject.setPathPrefix('/');
        this.historyObject.setEnabled(true);

    } else {
        that.findNavigation_(window.location.pathname.substr(1));
    }


};

/**
 * Set routes for web application
 * @private
 */
MICO.Controllers.RouteController.prototype.setRoutes_ = function() {

    // Index
    this.add_({
        name: 'index',
        format: '',
        options: {
            secure: false
        },
        action: function(params) {
            this.controller = new MICO.Controllers.ComicController();
            this.controller.index(params);
        }
    });

    // Comic
    this.add_({
        name: 'comic',
        format: 'comic/:comicId',
        options: {
            secure: false
        },
        action: function(params) {
            this.controller = new MICO.Controllers.ComicController();
            this.controller.index(params);
        }
    });

    // Archive
    this.add_({
        name: 'archive',
        format: 'archive',
        options: {
            secure: false
        },
        action: function(params) {
            this.controller = new MICO.Controllers.ArchiveController();
            this.controller.index(params);
        }
    });

    // About
    this.add_({
        name: 'about',
        format: 'about',
        options: {
            secure: false
        },
        action: function(params) {
            this.controller = new MICO.Controllers.AboutController();
            this.controller.index(params);
        }
    });

    // Admin
    this.add_({
        name: 'admin',
        format: 'admin',
        options: {
            secure: true
        },
        action: function(params) {
            this.controller = new MICO.Controllers.AdminController();
            this.controller.index(params);
        }
    });

};

/**
 * Adds new route to route map
 * @param {Object} route Page routing options
 * {
 *     name: 'name',
 *     format: 'url/path/:parameter',
 *     options: {
 *          secure: isPageRestrictedToLoginBoolean
 *     },
 *     action: function() {
 *          this.controller = new class();
 *          this.controller.index(this.params);
 *     }
 * }
 * @private
 */
MICO.Controllers.RouteController.prototype.add_ = function (route) {

    this.routesMap.push(route);

};

/**
 * Find route for current url token and trigger navigation
 * @param {string} pageToken current url token.
 * @private
 */
MICO.Controllers.RouteController.prototype.findNavigation_ = function (pageToken) {

    var that = this;

    var tokenRoot = goog.string.urlDecode(pageToken);

    var routeFound = false;
    // find current route object.
    goog.array.forEach(this.routesMap, function (route) {

        // Do not continue if already found a route
        if(!routeFound) {

            //Split url parameters from template and match the base
            var routeSections = route.format.split('/');
            var tokenRootSections = tokenRoot.split('/');
            var onTrack = true;

            goog.array.forEach(routeSections, function (pathSection, index) {

                // Do not continue if current match combo is broken
                if (onTrack) {

                    // Ignore if current section is a parameter
                    if (pathSection.substr(0, 1) != ":") {

                        // Skip this route if combo is broken
                        if (pathSection != tokenRootSections[index]) {

                            onTrack = false;
                            return false;

                        }
                    }

                    // Assume found if current match combo is finished
                    if (index == routeSections.length - 1) {

                        that.navigateToPage_(route, tokenRoot);
                        routeFound = true;

                    }

                }

            });

        }

    });

    //If page is not found, redirect to not found route.
   // if (routeFound == false) {

        //TODO: Fill

    //}

};

/**
 * Navigates user to route
 * @param {Object} currentRoute The page user is currently on
 * @param {string} pageToken The token of the url
 * @private
 */
MICO.Controllers.RouteController.prototype.navigateToPage_ = function (currentRoute, pageToken) {

    // Map page parameters to params object
    var params = {};

    var routeSections = currentRoute.format.split("/");
    var tokenSections = pageToken.split("/");

    goog.array.forEach(routeSections, function(routeSection, index) {

        if(routeSection.substr(0, 1) == ":") {

            params[routeSection.substr(1)] = tokenSections[index];

        }

    });

    currentRoute.action(params);

};
