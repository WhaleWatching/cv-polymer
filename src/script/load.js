(function (window, document) {

  // Reject most of the modern browser, only Chrome and Opera
  var checkSupportForComponents = function () {
    return document.implementation.hasFeature("http://www.w3.org/TR/html-templates/", "1.0");
  }
  if(! checkSupportForComponents()) {
    document.getElementsByTagName('body')[0].className += ' out-dated';
  }

  // Closures
})(window, document);