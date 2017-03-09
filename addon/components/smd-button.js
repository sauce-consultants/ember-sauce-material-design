import Ember from 'ember';
import layout from '../templates/components/smd-button';
import Clickable from '../mixins/click-support';

const {
  Component,
  computed
} = Ember;

export default Component.extend(Clickable, {
  layout,
  tagName: 'button',
  isRaised: false, // Applies raised display effect	Mutually exclusive with fab, mini-fab, and icon
  isFab: false, // Applies fab (circular) display effect	Mutually exclusive with raised, mini-fab, and icon
  isMiniFab: false, // Applies mini-fab (small fab circular) display effect	Mutually exclusive with raised, fab, and icon
  icon: null, // Applies icon(small plain circular) display effect Mutually exclusive with raised, fab, and mini-fab
  isColored: false, // Applies colored display effect(primary or accent color, depending on the type of button) Colors are defined in material.min.css
  isAccent: false, // Applies accent color display effect Colors are defined in material.min.css
  isPrimary: false, // Applies primary color display effect Colors are defined in material.min.css
  buttonType: 'button',
  _mdlComponent: null,
  classNames: [
    'smd-button',
    'mdl-button',
    'mdl-js-button',
  ],
  classNameBindings: [
    'isRaised:mdl-button--raised',
    'isFab:mdl-button--fab',
    '_isMiniFabMode',
    '_isIconMode:mdl-button--icon',
    'isColored:mdl-button--colored',
    'isAccent:mdl-button--accent',
    'isPrimary:mdl-button--primary',
  ],
  attributeBindings: [
    'disabled',
    'for',
    'type:buttonType'
  ],
  // Computed
  _isMiniFabMode: computed('isMiniFab', function() {
    return this.get('isMiniFab') ? 'mdl-button--fab mdl-button--mini-fab' : '';
  }),
  _isIconMode: computed('icon', 'isFab', 'isMiniFab', function() {
    return !this.get('isFab') && !this.get('isMiniFab') && this.get('icon');
  }),
  // Methods
  didInsertElement() {
    this._super(...arguments);
    let mdlbtn = new window.MaterialButton(this.get('element'));
    this.set('_mdlComponent', mdlbtn);
  },
});
