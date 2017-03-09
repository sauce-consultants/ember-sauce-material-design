/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sauce-material-design',
  setupPreprocessorRegistry(type, registry) {
    if (!this.isDevelopingAddon()) {
      this.eachAddonInvoke('setupPreprocessorRegistry', [type, registry]);
    }
  },
};
