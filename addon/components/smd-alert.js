import Ember from 'ember';
import layout from '../templates/components/smd-alert';

const {
  Component,
  computed: {
    bool,
    or
  },
  inject: {
    service
  },
} = Ember;

export default Component.extend({
  // Service
  dialogService: service('smd-dialog-service'),
  // Attributes
  layout,
  tagName: 'dialog',
  classNames: ['smd-alert'],
  title: null,
  affirmativeText: null,
  dismissiveText: null,
  affirmativeAction: null,
  dismissiveAction: false,
  // Content data to yield
  data: null,
  // Computed
  hasTitle: bool('title'),
  hasFooter: or('affirmativeText', 'dismissiveText'),
  hasAffirmative: bool('affirmativeText'),
  hasDismissive: bool('dismissiveText'),
  // Actions
  actions: {
    affirmativeAction: function() {
      if (this.get('affirmativeAction')) {
        this.sendAction('affirmativeAction', this);
      } else {
        this.sendAction('action', 'confirm', this);
      }
    },
    dismissiveAction: function() {
      if (this.get('dismissiveAction') === false) {
        this.get('dialogService').hideAlert(this.elementId);
      } else if (this.get('dismissiveAction')) {
        this.sendAction('dismissiveAction', this);
      } else {
        this.sendAction('action', 'dismiss', this);
      }
    },
  },
  keyDown: function(e) {
    // esc
    if (e.keyCode === 27) {
      this.send('dismissiveAction');
    }
  },
  didInsertElement: function() {
    this.get('dialogService').registerAlert(this.elementId);
  },
});
