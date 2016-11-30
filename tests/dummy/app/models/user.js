import DS from 'ember-data';

const {
  attr,
  belongsTo,
  Model
} = DS;

export default Model.extend({
  color: attr('string'),
  number: attr('number'),
  animal: belongsTo('animal'),
});
