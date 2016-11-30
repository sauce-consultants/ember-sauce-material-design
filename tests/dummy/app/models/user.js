import DS from 'ember-data';
import Ember from 'ember';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  color: attr('string'),
  number: attr('number'),
  animal: belongsTo('animal'),
});
