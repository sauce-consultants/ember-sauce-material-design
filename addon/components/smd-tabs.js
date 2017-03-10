import Ember from 'ember';
import layout from '../templates/components/smd-tabs';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['mdl-tabs', 'mdl-js-tabs', 'mdl-js-ripple-effect'],
});
