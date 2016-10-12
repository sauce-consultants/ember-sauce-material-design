import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    menuItemClicked: function (item) {
      alert("dropdown: "+item.get('text')+" clicked");
    },
  },
});
