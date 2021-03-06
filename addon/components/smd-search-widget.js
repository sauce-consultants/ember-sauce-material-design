import Ember from 'ember';
import layout from '../templates/components/smd-search-widget';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNames: ['smd-search-widget'],
  classNameBindings: ['openClass'],
  action: null,
  isOpen: false,
  term: null,
  searchParam: null,
  // Computed
  openClass: Ember.computed('isOpen', function() {
    if (this.get('isOpen')) {
      return 'open';
    }
  }),
  didRender: function() {
    if (this.get('term')) {
      this.set('isOpen', true);
      this.$('.smd-search-widget__input').focus();
    }
  },
  actions: {
    open: function() {
      this.set('isOpen', true);
      setTimeout(function() {
        this.$('.smd-search-widget__input').focus();
      }, 50);
      return false;
    },
    close: function() {
      this.set('isOpen', false);
      this.set('term', null);
      this.sendAction('action', null);
      return false;
    },
    keyUp: function(term) {
      this.sendAction('action', term);
    }
  }
});
