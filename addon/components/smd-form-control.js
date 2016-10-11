import Ember from 'ember';
import layout from '../templates/components/smd-form-control';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNames: [
    'smd-form__control',
    'mdl-textfield',
    'mdl-js-textfield',
  ],
  classNameBindings: [
    'inputTypeModifier',
    'floatingClass',
    'invalidClass',
    'validClass',
  ],
  // Attributes
  name: null,
  label: null,
  model: null,
  type: 'text',
  tip: null,
  isFloating: true,
  max: null,
  min: null,
  step: null,
  cols: null,
  rows: 3,

  // Computed
  hasLabel: Ember.computed.bool('label'),
  notValidating: Ember.computed.not('validation.isValidating'),
  didValidate: Ember.computed.oneWay('targetObject.didValidate'),
  hasContent: Ember.computed.notEmpty('value'),
  isValid: Ember.computed.and('hasContent', 'validation.isValid', 'notValidating'),
  isInvalid: Ember.computed.oneWay('validation.isInvalid'),
  isTextarea: Ember.computed.equal('type', 'textarea'),
  showErrorClass: Ember.computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation'),
  showErrorMessage: Ember.computed('validation.isDirty', 'isInvalid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
  }),
  showWarningMessage: Ember.computed('validation.isDirty', 'validation.warnings.[]', 'isValid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isValid') && !Ember.isEmpty(this.get('validation.warnings'));
  }),
  showTip: Ember.computed('tip', function () {
    return (this.get('tip'));
  }),
  // Classes
  inputTypeModifier: Ember.computed('type', function () {
    return 'smd-form__control--'+this.get('type');
  }),
  floatingClass: Ember.computed('isFloating', function () {
    if (this.get('isFloating')) { return 'mdl-textfield--floating-label'; }
  }),
  invalidClass: Ember.computed('isInvalid', function () {
    if ((this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid')) { return 'is-invalid'; }
  }),
  validClass: Ember.computed('isValid', function () {
    if (this.get('isValid')) { return 'is-valid'; }
  }),
  inputClasses: Ember.computed('type', function () {
    var classNames = [];
    let type = this.get('type');

    if (type === 'range') {
      classNames.push('mdl-slider');
      classNames.push('mdl-js-slider');
    } else {
      classNames.push('mdl-textfield__input');
    }
      classNames.push('smd-form__input');
      classNames.push('smd-form__input--'+type);
    return classNames.join(' ');
  }),
  labelClasses: Ember.computed('type', function () {
    var classNames = [];
    classNames.push('mdl-textfield__label');
    classNames.push('smd-form__label');
    let type = this.get('type');
    let types = ['date', 'month', 'week', 'time', 'datetime', 'datetime-local', 'range'];
    if (types.indexOf(type) !== -1) {
      classNames.push('smd-form__label--fixed');
    }
    return classNames.join(' ');
  }),
  // Methods
  init() {
    this._super(...arguments);
    var propName = this.get('name');
    if(this.get("model"))
    {
      Ember.defineProperty(this, 'validation', Ember.computed.oneWay(`model.validations.attrs.${propName}`));
      Ember.defineProperty(this, 'value', Ember.computed.alias(`model.${propName}`));
    }
  },
  didInsertElement() {
    this._super(...arguments);
    componentHandler.upgradeElement(this.element);
  },

});
