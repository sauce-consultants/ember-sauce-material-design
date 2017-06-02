import Ember from 'ember';
import layout from '../templates/components/smd-item-avatar';

export default Ember.Component.extend({
  layout,
  avatarText: null,
  avatarIcon: null,
  avatarSrc: null,
  classNameBindings: [
    'disabledClassModifier'
  ],
  classModifier: null,
  isRounded: false,
  disabled: false,
  // Computed
  hasText: Ember.computed.bool('avatarText'),
  hasIcon: Ember.computed.bool('avatarIcon'),
  hasImage: Ember.computed.bool('avatarSrc'),
  // Classes
  disabledClassModifier: Ember.computed('disabled',function() {
    if(this.get('disabled')) {
      return 'smd-item__avatar--disabled';
    }
  }),
  textClasses: Ember.computed('avatarText', 'classModifier', function() {
    var classNames = [];
    classNames.push('smd-item__avatar-text');
    // get text length modifier
    let length = String(this.get('avatarText')).length;
    classNames.push('smd-item__avatar-text--length-' + length);
    // get text rounded modifier
    if (this.get('isRounded')) {
      classNames.push('smd-item__avatar-text--round');
    }
    // add custom modifier
    if (this.get('classModifier')) {
      classNames.push('smd-item__avatar-text--' + this.get('classModifier'));
    }
    return classNames.join(' ');
  }),
  imageClasses: Ember.computed('avatarSrc', 'classModifier', function() {
    var classNames = [];
    classNames.push('smd-item__avatar');
    if (this.get('isRounded')) {
      classNames.push('smd-item__avatar--round');
    }
    // add custom modifier
    if (this.get('classModifier')) {
      classNames.push('smd-item__avatar--' + this.get('classModifier'));
    }
    return classNames.join(' ');
  }),
  iconClasses: Ember.computed('avatarIcon', 'classModifier', function() {
    var classNames = [];
    classNames.push('material-icons');
    classNames.push('smd-item__icon');
    if (this.get('isRounded')) {
      classNames.push('smd-item__icon--round');
    }

    // add custom modifier
    if (this.get('classModifier')) {
      classNames.push('smd-item__icon--' + this.get('classModifier'));
    }
    return classNames.join(' ');
  }),
});
