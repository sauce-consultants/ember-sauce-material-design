import Ember from 'ember';
import layout from '../templates/components/smd-app';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: [
    'mdl-layout',
    'mdl-js-layout',
  ],
  classNameBindings: [
    'fixedDrawer:mdl-layout--fixed-drawer',
    'fixedHeader:mdl-layout--fixed-header',
    'noDrawerButton:mdl-layout--no-drawer-button',
    'noDesktopDrawerButton:mdl-layout--no-desktop-drawer-button',
  ],
  fixedDrawer: false, // Makes the drawer always visible and open in larger screens
  fixedHeader: false, // Makes the header always visible, even in small screens
  noDrawerButton: false, // Does not display a drawer button
  noDesktopDrawerButton: false, // Does not display a drawer button in desktop mode
});
