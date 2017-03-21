import Ember from 'ember';

// BEGIN-SNIPPET smd-button-action
export default Ember.Route.extend({
  actions: {
    clickButton: function(button) {
      window.alert('button text = ' + button.get('text') + ', value = ' + button.get('value'));
    },
  },
});
// END-SNIPPET
