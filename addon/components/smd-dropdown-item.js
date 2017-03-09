import Ember from 'ember';
import layout from '../templates/components/smd-dropdown-item';
import Clickable from '../mixins/click-support';

const {
  Component,
  computed: {
    bool
  }
} = Ember;

export default Component.extend(Clickable, {
  layout,
  tagName: 'div',
  classNames: [
    'smd-menu__item',
    'mdl-menu__item',
  ],
  classNameBindings: [
    'divider:mdl-menu__item--full-bleed-divider',
    'hasIcon:mdl-menu__item--icon'
  ],
  attributeBindings: [
    'disabled:disabled'
  ],
  disabled: false,
  divider: false,
  text: null,
  icon: null,
  hasIcon: bool('icon'),
});
