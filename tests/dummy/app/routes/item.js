import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    primaryItemAction: function (item) {
      alert("primary action called for "+item);
    },
    secondaryItemAction: function (item) {
      alert("secondary action called for "+item);
    },
  },
});
