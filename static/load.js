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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbImxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50KSB7XG5cbiAgLy8gUmVqZWN0IG1vc3Qgb2YgdGhlIG1vZGVybiBicm93c2VyLCBvbmx5IENocm9tZSBhbmQgT3BlcmFcbiAgdmFyIGNoZWNrU3VwcG9ydEZvckNvbXBvbmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoXCJodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sLXRlbXBsYXRlcy9cIiwgXCIxLjBcIik7XG4gIH1cbiAgaWYoISBjaGVja1N1cHBvcnRGb3JDb21wb25lbnRzKCkpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsYXNzTmFtZSArPSAnIG91dC1kYXRlZCc7XG4gIH1cblxuICAvLyBDbG9zdXJlc1xufSkod2luZG93LCBkb2N1bWVudCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9