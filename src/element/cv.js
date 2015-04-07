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