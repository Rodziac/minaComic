goog.provide('MICO.LayoutHelper');

//todo: //
MICO.LayoutHelper.setContentHeight = function() {

    var footerHeight = goog.dom.getElement('footer').offsetHeight;
    var calculatedContentHeight = window.innerHeight - 200 - footerHeight;

    goog.dom.getElement('content').style.minHeight = calculatedContentHeight + 'px';

};
