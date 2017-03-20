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
      Ember.Logger.log('save');
      window.alert('Save Dialog');
    },
    dismiss: function( /*button*/ ) {
      Ember.Logger.log('dismiss');
      this.transitionTo('dialog.index');
    },
  },
});