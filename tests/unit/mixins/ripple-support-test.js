import Ember from 'ember';
import RippleSupportMixin from 'ember-sauce-material-design/mixins/ripple-support';
import { module, test } from 'qunit';

module('Unit | Mixin | ripple support');

// Replace this with your real tests.
test('it works', function(assert) {
  let RippleSupportObject = Ember.Object.extend(RippleSupportMixin);
  let subject = RippleSupportObject.create();
  assert.ok(subject);
});
