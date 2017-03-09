import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions: {
    headerAction: function(event /*, header*/ ) {
      window.alert('headerAction called with event = ' + event);
    },
    goBack: function( /*header*/ ) {
      window.alert('back button clicked');
    },
    goToNew: function( /*header*/ ) {
      window.alert('fab button clicked');
    },
  },
});
