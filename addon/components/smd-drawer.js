import Ember from 'ember';
import layout from '../templates/components/smd-drawer';
import ClickOutside from 'ember-sauce-material-design/mixins/click-outside';

const {
  inject: {
    service
  }
} = Ember;

export default Ember.Component.extend(ClickOutside, {
  layout,
  // Services
  appState: service('smd-app-state'),
  // Properties
  classNames: ['mdl-layout__drawer'],
  toggleButtonClass: 'mdl-layout__drawer-button',
  // Computed
  classNameBindings: ['appState.drawerVisibilityModifier'],
  // Methods
  clickOutside() {
    this.set('appState.isDrawerVisible', false);
  },
  didInsertElement() {
    this._super(...arguments);

    // Hide drawer when navigation link is clicked.
    this.$('.mdl-navigation').on('click', (e) => {
      let targetIsNavigationLink = e.target.className.indexOf('mdl-navigation__link') !== -1;
      let targetIsWithinVisibleDrawer = this.$(e.target).closest('.mdl-navigation').closest('.mdl-layout__drawer').hasClass('is-visible');
      if (targetIsNavigationLink && targetIsWithinVisibleDrawer) {
        Ember.run.next(() => {
          this.set('appState.isDrawerVisible', false);
        });
      }
    });

    // Hide drawer when user clicks outside.
    Ember.run.next(this, this.addClickOutsideListener);
  },
  willDestroyElement() {
    this.removeClickOutsideListener();
  }
});
