import DS from 'ember-data';
import Ember from 'ember';

const {
  attr,
  hasMany
} = DS;

export default DS.Model.extend({
  name: attr('string'),
});
