import Ember from 'ember';
import layout from '../templates/components/smd-tabs';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  align: 'center', // left, right & center
  theme: 'default', // default, primary, accent
  tagName: 'nav',
  classNames: ['mdl-tabs', 'mdl-js-tabs', 'mdl-js-ripple-effect'],
  classNameBindings: [
    'themeClass'
  ],
  // Computed
  themeClass: computed('theme', function() {
    return 'mdl-tabs--' + this.get('theme');
  }),
  tabBarClasses: computed('align', 'theme', function() {
    return 'mdl-tabs__tab-bar--' + this.get('align');
  }),
  // Methods
  didInsertElement() {
    this._super(...arguments);
    window.componentHandler.upgradeElement(this.element);
  },
});
