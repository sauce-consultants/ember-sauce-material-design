/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sauce-material-design',
  setupPreprocessorRegistry(type, registry) {
    if (!this.isDevelopingAddon()) {
      const cpValidationsAddon = this.addons.find(addon => addon.name === 'ember-cp-validations');
      if (cpValidationsAddon && cpValidationsAddon.setupPreprocessorRegistry) {
        cpValidationsAddon.setupPreprocessorRegistry(type, registry);
      }
    }
  },
};
