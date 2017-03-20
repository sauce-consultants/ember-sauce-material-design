import Ember from 'ember';

const {
  Route,
  inject: {
    service
  },
} = Ember;

export default Route.extend({
  // Service
  dialogService: service('smd-dialog-service'),
  // Methods
  model: function() {
    return Ember.Object.create();
  },
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
    confirm: function(alert) {
      window.alert('Alert confirmed!');
      this.get('dialogService').hideAlert(alert.elementId);
    },
  },
});
