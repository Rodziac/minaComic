goog.provide('MICO.LayoutHelper');

//todo: //
MICO.LayoutHelper.setContentHeight = function() {

    goog.dom.getElement("content").style.minHeight = (window.innerHeight - 200 - goog.dom.getElement("footer").offsetHeight) + "px";

};
