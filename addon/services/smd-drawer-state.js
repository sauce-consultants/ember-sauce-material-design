import Ember from 'ember';

export default Ember.Service.extend({
  isVisible: false,
  visibilityModifier: Ember.computed('isVisible', function() {
    if (this.get('isVisible')) {
      return 'is-visible';
    } else {
      return 'is-hidden';
    }
  })
});
