import Ember from 'ember';
import layout from '../templates/components/smd-item-avatar';

export default Ember.Component.extend({
  layout,
  avatarIcon: null,
  avatarSrc: null,
  isRounded: false,
  // Computed
  hasIcon: Ember.computed.bool('avatarIcon'),
  hasImage: Ember.computed.bool('avatarSrc'),
  // Classes
  imageClasses: Ember.computed('avatarSrc', function () {
    var classNames = [];
    classNames.push('smd-item__avatar');
    if (this.get('isRounded')) {
      classNames.push('smd-item__avatar--round');
    }
    return classNames.join(' ');
  }),
  iconClasses: Ember.computed('avatarIcon', function () {
    var classNames = [];
    classNames.push('material-icons');
    classNames.push('smd-item__icon');
    if (this.get('isRounded')) {
      classNames.push('smd-item__icon--round');
    }
    return classNames.join(' ');
  }),
});
