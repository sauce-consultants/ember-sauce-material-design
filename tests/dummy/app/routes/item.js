import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions: {
    primaryItemAction: function(item) {
      window.alert("primary action called for " + item);
    },
    secondaryItemAction: function(item) {
      window.alert("secondary action called for " + item);
    },
  },
});
