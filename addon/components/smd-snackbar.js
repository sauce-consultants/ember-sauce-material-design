import Ember from 'ember';
import layout from '../templates/components/smd-snackbar';

export default Ember.Component.extend({
  layout,
  id: 'app-snackbar',
  classNames: ['mdl-js-snackbar', 'mdl-snackbar'],
  didInsertElement() {
    this._super(...arguments);
    componentHandler.upgradeElement(this.element);
    this.$('.mdl-tabs__panel').addClass('is-active');
  }
});
