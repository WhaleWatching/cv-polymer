(function() {
  (function() {
    var global;
    global = {
      ready: false,
      cv_data: false
    };
    Polymer('cv-global', {
      global: global
    });
  })();

  Polymer('cv-polymer', {
    ready: function () {
      var self;
      self = this
      this.$.cvSource.addEventListener('core-response', function (event) {
        self.$.cvGlobal.global.cv_data = event.detail.response;
      });
      this.$.cvSource.go();
    }
  });

  Polymer('cv-side', {
  });

  Polymer('cv-content', {
    ready: function () {
    }
  });

}).call(this);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2xvYmFsO1xuICAgIGdsb2JhbCA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgIGN2X2RhdGE6IGZhbHNlXG4gICAgfTtcbiAgICBQb2x5bWVyKCdjdi1nbG9iYWwnLCB7XG4gICAgICBnbG9iYWw6IGdsb2JhbFxuICAgIH0pO1xuICB9KSgpO1xuXG4gIFBvbHltZXIoJ2N2LXBvbHltZXInLCB7XG4gICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmO1xuICAgICAgc2VsZiA9IHRoaXNcbiAgICAgIHRoaXMuJC5jdlNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdjb3JlLXJlc3BvbnNlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHNlbGYuJC5jdkdsb2JhbC5nbG9iYWwuY3ZfZGF0YSA9IGV2ZW50LmRldGFpbC5yZXNwb25zZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kLmN2U291cmNlLmdvKCk7XG4gICAgfVxuICB9KTtcblxuICBQb2x5bWVyKCdjdi1zaWRlJywge1xuICB9KTtcblxuICBQb2x5bWVyKCdjdi1jb250ZW50Jywge1xuICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgfVxuICB9KTtcblxufSkuY2FsbCh0aGlzKTsiXSwiZmlsZSI6ImN2LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=