import Ember from 'ember';
import layout from '../templates/components/smd-modal';

const {
  Component,
  computed: {
    bool,
    or
  },
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  tagName: 'dialog',
  classNames: ['smd-modal'],
  classNameBindings: ['hasClose:smd-modal--with-close'],
  action: null,
  title: null,
  actionText: null,
  closeIcon: null,
  primaryText: null,
  secondaryText: null,
  closeAction: null,
  headingAction: null,
  primaryAction: null,
  secondaryAction: null,
  outsideAction: null,
  // Computed
  hasHeader: or('hasTitle', 'hasClose', 'hasAction'),
  hasClose: bool('closeIcon'),
  hasAction: bool('actionText'),
  hasTitle: bool('title'),
  hasPrimary: bool('primaryText'),
  hasSecondary: bool('secondaryText'),
  hasFooter: or('hasPrimary', 'hasSecondary'),
  // Actions
  actions: {
    closeAction: function() {
      if (this.get('closeAction')) {
        this.sendAction('closeAction', this);
      } else {
        this.sendAction('action', 'close', this);
      }
    },
    headingAction: function() {
      if (this.get('headingAction')) {
        this.sendAction('headingAction', this);
      } else {
        this.sendAction('action', 'heading', this);
      }
    },
    primaryAction: function() {
      if (this.get('primaryAction')) {
        this.sendAction('primaryAction', this);
      } else {
        this.sendAction('action', 'primary', this);
      }
    },
    secondaryAction: function() {
      if (this.get('secondaryAction')) {
        this.sendAction('secondaryAction', this);
      } else {
        this.sendAction('action', 'secondary', this);
      }
    },
    outsideAction: function() {
      if (this.get('outsideAction')) {
        this.sendAction('outsideAction', this);
      } else {
        this.sendAction('action', 'outside', this);
      }
    },
  },
  didInsertElement: function() {
    let modal = this.element;
    modal.showModal();
  },
  keyDown: function(e) {
    e.preventDefault();
    // esc
    if (e.keyCode === 27) {
      this.send('closeAction');
    }
  },
});
