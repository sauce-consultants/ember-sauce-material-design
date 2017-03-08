import Ember from 'ember';
import layout from '../templates/components/smd-snackbar';

export default Ember.Component.extend({
  layout,
  id: 'app-snackbar',
  classNames: ['mdl-js-snackbar', 'mdl-snackbar'],
  didInsertElement() {
    this._super(...arguments);
    window.componentHandler.upgradeElement(this.element);
  }
});
