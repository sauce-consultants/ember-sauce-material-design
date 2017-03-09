import Ember from 'ember';

export default Ember.Service.extend({
  isDrawerVisible: false,
  drawerVisibilityModifier: Ember.computed('isDrawerVisible', function() {
    if (this.get('isDrawerVisible')) {
      return 'is-visible';
    } else {
      return 'is-hidden';
    }
  })
});
