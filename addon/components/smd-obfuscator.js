import Ember from 'ember';

export default Ember.Component.extend({
  // Properties
  tagName: 'div',
  classNames: ['mdl-layout__obfuscator'],
  classNameBindings: ['drawer.visibilityModifier']
});
