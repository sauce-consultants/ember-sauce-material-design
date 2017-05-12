import Ember from 'ember';
import layout from '../templates/components/smd-dropdown';

const {
  Component,
  computed,
  computed: {
    bool
  },
} = Ember;

export default Component.extend({
  layout,
  classNames: ['smd-dropdown'],
  text: null,
  icon: null,
  disabled: false,
  align: 'bottom-left',
  // Computed
  hasText: bool('text'),
  hasIcon: bool('icon'),
  alignClass: computed('align', function() {
    return `mdl-menu--${this.get('align')}`;
  }),
  buttonId: computed('elementId', function() {
    return `${this.get('elementId')}-button`;
  }),
  // Methods
  didInsertElement: function() {
    // add dropdown and child items to the mdl component registry
    componentHandler.upgradeElements(this.element);
  },
});
