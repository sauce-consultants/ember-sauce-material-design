import Ember from 'ember';

export default Ember.Component.extend({
  // Services
  drawer: Ember.inject.service('smd-drawer-state'),
  // Properties
  tagName: 'div',
  classNames: ['mdl-layout__obfuscator'],
  classNameBindings: ['drawer.visibilityModifier']
});
