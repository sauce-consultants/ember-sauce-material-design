import Ember from 'ember';
import layout from '../templates/components/smd-data-item';

const {
  Component,
  computed,
  computed: {
    bool
  },
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: ['smd-data-list__item'],
  label: null,
  url: null,
  value: null,
  icon: null,
  isMultiLine: false,
  isSmall: false,
  // Computed
  hasLabel: bool('label'),
  hasValue: bool('value'),
  hasUrl: bool('url'),
  hasIcon: bool('icon'),
  niceUrl: computed('url', function() {
    return this.get('url').replace(/(^\w+:|^)\/\//, '');
  }),
  valueClasses: computed('isMultiLine', 'isSmall', function() {
    var classNames = ['smd-data-list__value'];
    if (this.get('isMultiLine')) {
      classNames.push('smd-data-list__value--multi-line');
    }
    if (this.get('isSmall')) {
      classNames.push('smd-data-list__value--small');
    }
    return classNames.join(' ');
  }),
});
