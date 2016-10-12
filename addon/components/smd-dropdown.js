import Ember from 'ember';
import layout from '../templates/components/smd-dropdown';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  classNames: ['smd-dropdown'],
  text: null,
  icon: null,
  align: 'bottom-left',
  // Computed
  hasText: computed.bool('text'),
  hasIcon: computed.bool('icon'),
  alignClass: computed('align', function () {
    return `mdl-menu--${this.get('align')}`;
  }),
  buttonId: computed('elementId', function () {
    return `${this.get('elementId')}-button`;
  }),
  // Functions
  didInsertElement() {
    this._super(...arguments);
    //let mdlmenu = new window.MaterialMenu(this.$('ul')[0]);
    //this.set('_mdlComponent', mdlmenu);
  },
});
