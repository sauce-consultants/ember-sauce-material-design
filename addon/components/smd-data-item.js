import Ember from 'ember';
import layout from '../templates/components/smd-data-item';
import Clickable from '../mixins/click-support';

const {
  Component,
  computed,
  computed: {
    bool
  },
} = Ember;

export default Component.extend(Clickable, {
  // Attributes
  layout,
  classNames: [
    'smd-data-list__item',
    'smd-data-list__value',
  ],
  classNameBindings: [
    'hasAction:smd-data-list__value--with-action',
    'isMultiLine:smd-data-list__value--multi-line',
    'isSmall:smd-data-list__value--small'
  ],
  label: null,
  url: null,
  value: null,
  icon: null,
  isMultiLine: false,
  isSmall: false,
  // Computed
  hasAction: bool('action'),
  hasLabel: bool('label'),
  hasValue: bool('value'),
  hasUrl: bool('url'),
  hasIcon: bool('icon'),
  niceUrl: computed('url', function() {
    return this.get('url').replace(/(^\w+:|^)\/\//, '');
  }),
});
