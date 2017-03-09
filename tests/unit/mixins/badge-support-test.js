import Ember from 'ember';
import BadgeSupportMixin from 'ember-sauce-material-design/mixins/badge-support';
import { module, test } from 'qunit';

module('Unit | Mixin | badge support');

// Replace this with your real tests.
test('it works', function(assert) {
  let BadgeSupportObject = Ember.Object.extend(BadgeSupportMixin);
  let subject = BadgeSupportObject.create();
  assert.ok(subject);
});
