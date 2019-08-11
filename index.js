'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    nodeAssets: {
      "source-map-support": function() {
        return {
          enabled: this.app.env !== 'production',
          import: ['browser-source-map-support.js']
        };
      }
    }
  },
  contentFor: function(type, config) {
    if (type === 'test-body-footer') {
      return '<script>require("browser-source-map-support").install();</script>';
    }
  }
};
