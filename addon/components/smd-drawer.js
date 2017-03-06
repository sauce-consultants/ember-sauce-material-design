import Ember from 'ember';
import layout from '../templates/components/smd-drawer';

const {
  Component,
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: ['mdl-layout__drawer'],
  title: 'Title',
});
