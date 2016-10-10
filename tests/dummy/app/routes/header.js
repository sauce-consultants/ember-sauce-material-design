import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  actions: {
    defaultAction: function (action, item) {
      alert("default action called with action "+action+" and "+item);
    },
    fabAction: function (item) {
      alert("fab action called with "+item);
    },
    toolbarActionOne: function (item) {
      alert("toolbar item one action called with "+item);
    },
    toolbarActionTwo: function (item) {
      alert("toolbar item two action called with "+item);
    },
    toolbarActionThree: function (item) {
      alert("toolbar item three action called with "+item);
    },
    backAction: function (item) {
      alert("back action called with "+item);
    },
    searched: function (term) {
      alert("Search term "+term);
      if (term) {
        this.transitionTo('header', {
          queryParams: {
            search: term
          }
        });
      } else {
        this.transitionTo('header', {
          queryParams: {
            search: undefined
          }
        });
      }
    },
  },
});
