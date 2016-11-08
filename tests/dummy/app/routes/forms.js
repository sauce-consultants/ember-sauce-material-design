import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model: function() {
    return {
      control1: 'foo',
      control2: 'bar',
      control3: null,
      text: 'foo',
      radio: 1,
      select: null,
    }
  },
  actions: {
    primaryItemAction: function(item) {
      window.alert("primary action called for " + item);
    },
    secondaryItemAction: function(item) {
      window.alert("secondary action called for " + item);
    },
  },
});
