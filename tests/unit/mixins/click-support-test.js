import Ember from 'ember';
import ClickSupport from 'ember-sauce-material-design/mixins/click-support';
import {
  module,
  test
} from 'qunit';

module('Unit | Mixin | click support');

// Replace this with your real tests.
test('it works', function(assert) {
  let ClickSupportObject = Ember.Object.extend(ClickSupport);
  let subject = ClickSupportObject.create();
  assert.ok(subject);
});
