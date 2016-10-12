import Ember from 'ember';
import layout from '../templates/components/smd-dropdown-item';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['mdl-menu__item'],
  classNameBindings: ['dividerClass', 'iconClass'],
  attributeBindings: ['disabled'],
  disabled: false,
  divider: false,
  text: null,
  icon: null,
  hasIcon: computed.bool('icon'),
  dividerClass: computed('divider', function () {
    if (this.get('divider')) {
      return 'mdl-menu__item--full-bleed-divider';
    }
  }),
  iconClass: computed('icon', function () {
    if (this.get('icon')) {
      return 'mdl-menu__item--icon';
    }
  }),
  click() {
    this.sendAction('action', this);
  }
});
