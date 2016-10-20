import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions: {
    menuItemClicked: function(item) {
      window.alert("dropdown: " + item.get('text') + " clicked");
    },
  },
});
