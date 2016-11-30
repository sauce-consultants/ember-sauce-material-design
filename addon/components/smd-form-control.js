import Ember from 'ember';
import layout from '../templates/components/smd-form-control';

const {
  computed,
  Component
} = Ember;
export default Component.extend({
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
  disabled: false,
  label: null,
  model: null,
  type: 'text',
  icon: null,
  tip: null,
  isFloating: true,
  max: null,
  min: null,
  step: null,
  cols: null,
  rows: 3,
  format: 'DD/MM/YYYY',
  placeholder: null,
  options: [],
  modelOptions: null,
  modelLabel: 'id',
  nullOption: null,
  // Computed
  hasNullOption: computed.bool('nullOption'),
  /**
   * The options attribute maybe in one of 3 formats:
   * - flat
   * - objects
   * - models
   * This method will convert them all to a usable format for the hbs template
   */
  computedOptions: computed('options', 'modelOptions', 'modelLabel', 'value', function() {

    var options = this.get('options'),
      modelOptions = this.get('modelOptions'),
      modelLabel = this.get('modelLabel'),
      value = this.get('value');

    var array = [];

    // Check options is an array
    if (!options && typeof options.forEach !== 'function') {
      Ember.Logger.error('Options attribute must be instance of array: ' + this.get('name'));
      Ember.Logger.log(options);
    }

    if (modelOptions) {
      modelOptions.forEach(
        function(obj) {
          var option = {};

          option.label = obj.get(modelLabel);
          option.value = obj;

          if (obj.id === value.get('id')) {
            //if (Ember.isEqual(obj, value)) {
            option.selected = true;
          }

          array.push(option);
        }
      );
    } else {
      options.forEach(
        function(obj) {
          var option = {};

          if (obj !== null && typeof obj !== 'object') {
            // option is a flat value
            option.label = obj;
            option.value = obj;
            // check if selected
            if (obj === value) {
              option.selected = true;
            }
          } else {
            option = obj;
            // check if selected
            if (obj.value === value) {
              option.selected = true;
            }
          }

          array.push(option);
        }
      );
    }

    return array;
  }),
  hasLabel: computed('label', 'type', function() {
    let label = this.get('label'),
      type = this.get('type');
    var noLabel = ['switch', 'checkbox'];
    if (noLabel.indexOf(type) !== -1) {
      return false;
    }
    return !!label;
  }),
  notValidating: computed.not('validation.isValidating'),
  didValidate: false,
  hasContent: computed.notEmpty('value'),
  isValid: computed.and('hasContent', 'validation.isValid', 'notValidating'),
  isInvalid: computed.oneWay('validation.isInvalid'),
  isTextarea: computed.equal('type', 'textarea'),
  isSwitch: computed.equal('type', 'switch'),
  isCheckbox: computed.equal('type', 'checkbox'),
  isRadio: computed.equal('type', 'radio'),
  isIcon: computed.equal('type', 'icon'),
  isSelect: computed.equal('type', 'select'),
  isDate: computed.equal('type', 'date'),
  showErrorClass: computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation'),
  showErrorMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
  }),
  showWarningMessage: computed('validation.isDirty', 'validation.warnings.[]', 'isValid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isValid') && !Ember.isEmpty(this.get('validation.warnings'));
  }),
  showTip: computed('tip', function() {
    return (this.get('tip'));
  }),
  // Classes
  inputTypeModifier: computed('type', function() {
    return 'smd-form__control--' + this.get('type');
  }),
  floatingClass: computed('isFloating', function() {
    if (this.get('isFloating')) {
      return 'mdl-textfield--floating-label';
    }
  }),
  invalidClass: computed('isInvalid', function() {
    if ((this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid')) {
      return 'is-invalid';
    }
  }),
  validClass: computed('isValid', function() {
    if (this.get('isValid')) {
      return 'is-valid';
    }
  }),
  inputClasses: computed('type', function() {
    var classNames = [];
    let type = this.get('type');

    if (type === 'range') {
      classNames.push('mdl-slider');
      classNames.push('mdl-js-slider');
    } else {
      classNames.push('mdl-textfield__input');
    }
    classNames.push('smd-form__input');
    classNames.push('smd-form__input--' + type);
    return classNames.join(' ');
  }),
  labelClasses: computed('type', function() {
    var classNames = [];
    classNames.push('mdl-textfield__label');
    classNames.push('smd-form__label');
    let type = this.get('type');
    let types = ['select', 'radio', 'icon', 'date', 'month', 'week', 'time', 'datetime', 'datetime-local', 'range'];
    if (types.indexOf(type) !== -1) {
      classNames.push('smd-form__label--fixed');
    }
    return classNames.join(' ');
  }),
  // Methods
  init() {
    this._super(...arguments);
    var propName = this.get('name');
    if (this.get("model")) {
      Ember.defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${propName}`));
      Ember.defineProperty(this, 'value', computed.alias(`model.${propName}`));
    }
  },
  didInsertElement() {
    this._super(...arguments);
    componentHandler.upgradeElement(this.element);
  },
  actions: {
    selectedOption(option) {
      this.set('value', option);
    },
    checkOption(option) {
      if (option.value !== undefined) {
        this.set('value', option.value);
      } else {
        this.set('value', option);
      }
    },
    selectedDate(date) {
      this.set('value', date);
    },
  },
});
