import Ember from 'ember';
import layout from '../templates/components/smd-page-body';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['smd-page__body'],
});
