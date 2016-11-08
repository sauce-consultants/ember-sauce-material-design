import Ember from 'ember';
import layout from '../templates/components/smd-empty';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNames: ['smd-empty'],
  text: null,
  icon: 'sentiment_dissatisfied',
});
