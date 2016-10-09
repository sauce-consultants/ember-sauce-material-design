import Ember from 'ember';
import layout from '../templates/components/smd-search-widget';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNames: ['smd-search-widget'],
  classNameBindings: ['openClass'],
  action: null,
  isOpen: false,
  // Computed
  openClass: Ember.computed('isOpen', function () {
    if (this.get('isOpen')) {
      return 'open';
    }
  }),
  actions: {
    open: function () {
      this.set('isOpen', true);
      return false;
    },
    close: function () {
      this.set('isOpen', false);
      return false;
    },
    keyUp: function (term) {
      this.sendAction('action', term);
    }
  }
});
