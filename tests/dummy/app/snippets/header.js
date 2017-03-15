// BEGIN-SNIPPET smd-header-service
import Ember from 'ember';

const {
  Route,
  inject: {
    service
  },
} = Ember;

export default Route.extend({
  header: service('smd-header-service'),
  activate: function() {
    let hash = {
      title: 'Header Service',
    };
    this.get('header').setup(hash);
  },
});
// END-SNIPPET
