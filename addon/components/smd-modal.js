import Ember from 'ember';
import layout from '../templates/components/smd-modal';

const {
  Component,
  computed: {
    bool,
    or,
  },
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: ['smd-modal'],
  action: null,
  title: null,
  primaryText: null,
  secondaryText: null,
  primaryAction: null,
  secondaryAction: null,
  // Computed
  hasHeading: bool('title'),
  hasPrimary: bool('primaryText'),
  hasSecondary: bool('secondaryText'),
  hasFooter: or('hasPrimary', 'hasSecondary'),
  // Actions
  actions: {
    primaryAction: function() {
      if (this.get('primaryAction')) {
        this.sendAction('primaryAction', this);
      } else {
        this.sendAction('action', this);
      }
    },
    secondaryAction: function() {
      Ember.Logger.log(this.get('secondaryAction'));
      if (this.get('secondaryAction')) {
        Ember.Logger.log('send secondaryAction ' + this.get('secondaryAction'));
        this.sendAction('secondaryAction', this);
      } else {
        Ember.Logger.log('send action');
        this.sendAction('action', this);
      }
    },
  },
});
