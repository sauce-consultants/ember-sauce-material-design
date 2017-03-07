import Ember from 'ember';
import layout from '../templates/components/smd-app';

const {
  Component,
  computed,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: [
    'mdl-layout',
    'mdl-js-layout',
  ],
  classNameBindings: [
    'fixedDrawerClass',
    'fixedHeaderClass',
    'noDrawerButtonClass',
    'noDesktopDrawerButtonClass',
  ],
  fixedDrawer: false, // Makes the drawer always visible and open in larger screens
  fixedHeader: false, // Makes the header always visible, even in small screens
  noDrawerButton: false, // Does not display a drawer button
  noDesktopDrawerButton: false, // Does not display a drawer button in desktop mode
  // Computed
  fixedDrawerClass: computed('fixedDrawer', function() {
    if (this.get('fixedDrawer')) {
      return 'mdl-layout--fixed-drawer';
    }
  }),
  fixedHeaderClass: computed('fixedHeader', function() {
    if (this.get('fixedHeader')) {
      return 'mdl-layout--fixed-header';
    }
  }),
  noDrawerButtonClass: computed('noDrawerButton', function() {
    if (this.get('noDrawerButton')) {
      return 'mdl-layout--no-drawer-button';
    }
  }),
  noDesktopDrawerButtonClass: computed('noDesktopDrawerButton', function() {
    if (this.get('noDesktopDrawerButton')) {
      return 'mdl-layout--no-desktop-drawer-button';
    }
  }),
});
