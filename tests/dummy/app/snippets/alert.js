import Ember from 'ember';

const {
  Route,
  inject: {
    service
  },
} = Ember;

// BEGIN-SNIPPET smd-alert
export default Route.extend({
  // Services
  dialogService: service('smd-dialog-service'),
  // END-SNIPPET
  // Methods
  model: function() {
    return Ember.Object.create();
  },
  // BEGIN-SNIPPET smd-alert-show
  // Actions
  actions: {
    showDefaultAlert: function() {
      this.get('dialogService').showAlert('alert');
    },
    showTitleAlert: function() {
      this.get('dialogService').showAlert('titleAlert');
    },
    showNakedAlert: function() {
      this.get('dialogService').showAlert('nakedAlert');
    },
    // END-SNIPPET

    // BEGIN-SNIPPET smd-alert-hide
    confirm: function(alert) {
      window.alert('Alert confirmed!');
      this.get('dialogService').hideAlert(alert.elementId);
    },
    // END-SNIPPET
  },
});
