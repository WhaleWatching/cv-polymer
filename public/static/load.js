(function (window, document) {

  // Reject most of the modern browser, only Chrome and Opera
  checkSupportForComponents = function () {
    return document.implementation.hasFeature("http://www.w3.org/TR/html-templates/", "1.0");
  }
  if(! checkSupportForComponents()) {
    document.getElementsByTagName('body')[0].className += ' out-dated';
  }

  // Closures
})(window, document);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbImxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50KSB7XHJcblxyXG4gIC8vIFJlamVjdCBtb3N0IG9mIHRoZSBtb2Rlcm4gYnJvd3Nlciwgb25seSBDaHJvbWUgYW5kIE9wZXJhXHJcbiAgY2hlY2tTdXBwb3J0Rm9yQ29tcG9uZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKFwiaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbC10ZW1wbGF0ZXMvXCIsIFwiMS4wXCIpO1xyXG4gIH1cclxuICBpZighIGNoZWNrU3VwcG9ydEZvckNvbXBvbmVudHMoKSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGFzc05hbWUgKz0gJyBvdXQtZGF0ZWQnO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2xvc3VyZXNcclxufSkod2luZG93LCBkb2N1bWVudCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9