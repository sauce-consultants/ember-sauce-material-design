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

    var findChildFormControls = function(thisComponent) {

      let childViews = thisComponent.get('childViews');
      var childFormControls = childViews.filter((childView) => {
        if(childView.element)
        {
          return childView.element.className.match('smd-form__control') || childView.constructor.toString().indexOf('smd-form-control') !== -1;
        }
        else
        {
          return false;
        }
      });

      childViews.forEach(function(childView) {
        childFormControls.addObjects(findChildFormControls(childView));
      });

      return childFormControls;
    };

    return findChildFormControls(this);
  }),
  validate: function() {
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

      this.get('toaster').setMessage(this.get('errorMessage'));

      Ember.Logger.log("Errors: " + errorMessage);

      return false;
    }
    return true;
  },
  // Events
  submit(e) {
    e.preventDefault();

    if (this.validate()) {
      this.sendAction('action', this.get('model'));
    }
  },
  didInsertElement() {
    this._super(...arguments);
  }
});
