goog.provide('MICO.LayoutHelper');

MICO.LayoutHelper.setContentHeight = function() {

    goog.dom.getElement("content").style.minHeight = (window.innerHeight - 100 - goog.dom.getElement("footer").offsetHeight) + "px";

};
