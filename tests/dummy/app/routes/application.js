import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions: {
    back: function() {
      this.transitionTo('home');
    },
  },
});
