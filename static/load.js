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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbImxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50KSB7XG5cbiAgLy8gUmVqZWN0IG1vc3Qgb2YgdGhlIG1vZGVybiBicm93c2VyLCBvbmx5IENocm9tZSBhbmQgT3BlcmFcbiAgY2hlY2tTdXBwb3J0Rm9yQ29tcG9uZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcImh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWwtdGVtcGxhdGVzL1wiLCBcIjEuMFwiKTtcbiAgfVxuICBpZighIGNoZWNrU3VwcG9ydEZvckNvbXBvbmVudHMoKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xhc3NOYW1lICs9ICcgb3V0LWRhdGVkJztcbiAgfVxuXG4gIC8vIENsb3N1cmVzXG59KSh3aW5kb3csIGRvY3VtZW50KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=