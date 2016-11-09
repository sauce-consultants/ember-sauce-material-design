import Ember from 'ember';
import layout from '../templates/components/smd-form';

export default Ember.Component.extend({
  // Services
  toaster: Ember.inject.service('smd-toaster'),
  // Attributes
  layout,
  tagName: 'form',
  model: null,
  errorMessage: 'Please correct the errors in the form',
  // Computed
  childFormControls: Ember.computed('childViews', function() {
    var childViews = this.get('childViews');
    if (childViews) {
      return childViews.filter(function(currentChildView) {
        return currentChildView.constructor.toString().indexOf('smd-form-control') !== -1;
      });
    }
  }),
  // Events
  submit(e) {
    e.preventDefault();

    var errorMessages = [];

    var formControls = this.get('childFormControls');

    formControls.forEach(
      function(formControl) {
        if (formControl.get('validation') && !formControl.get('validation.isValid')) {
          errorMessages.addObjects(formControl.get('validation.errors').mapBy('message'));
        }
        formControl.set('didValidate', true);
      }
    );

    if (errorMessages.length !== 0) {
      var errorMessage = errorMessages.join(', ');
      Ember.Logger.log("Errors: " + errorMessage);
      this.get('toaster').setMessage(this.get('errorMessage'));
      return;
    }
    this.sendAction('action', this.get('model'));
  },
  didInsertElement() {
    this._super(...arguments);
  }
});
