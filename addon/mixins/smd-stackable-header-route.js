import Ember from 'ember';

const {
  Mixin,
  inject: {
    service,
  },
} = Ember;

export default Mixin.create({
  headerStack: service('smd-header-stack-service'),
  headerProps: {},
  activate: function() {
    Ember.Logger.log('activate ' + this.routeName);
    this.get('headerStack').push(this.get('headerProps'));
  },
  deactivate: function() {
    Ember.Logger.log('deactivate ' + this.routeName);
    this.get('headerStack').pop();
  },
});
