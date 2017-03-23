import Ember from 'ember';
import SmdFabableRouteMixin from 'ember-sauce-material-design/mixins/smd-fabable-route';
import { module, test } from 'qunit';

module('Unit | Mixin | smd fabable route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SmdFabableRouteObject = Ember.Object.extend(SmdFabableRouteMixin);
  let subject = SmdFabableRouteObject.create();
  assert.ok(subject);
});
