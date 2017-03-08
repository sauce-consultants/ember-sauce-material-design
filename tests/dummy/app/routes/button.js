import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions: {
    clickButton: function(button) {
      window.alert('button text = ' + button.get('text') + ', value = ' + button.get('value'));
    },
  },
});
