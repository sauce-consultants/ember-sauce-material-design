import Ember from 'ember';

export default Ember.Component.extend({
  id: 'app-snackbar',
  classNames: ['mdl-js-snackbar', 'mdl-snackbar'],
  didInsertElement() {
    this._super(...arguments);
    componentHandler.upgradeElement(this.element);
    this.$('.mdl-tabs__panel').addClass('is-active');
  }
});
