import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model: function() {
    return Ember.Object.create();
  },
  actions: {
    save: function( /*button*/ ) {
      window.alert('Save Dialog');
    },
    dismiss: function( /*button*/ ) {
      this.transitionTo('dialog.modal');
    },
  },
});
