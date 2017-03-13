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
  tagName: 'nav',
  classNames: ['mdl-tabs', 'mdl-js-tabs', 'mdl-js-ripple-effect'],
  // Computed
  tabBarClass: computed('align', function() {
    return 'mdl-tabs__tab-bar--' + this.get('align');
  })
});
