import Ember from 'ember';
import SmdStackableHeaderRouteMixin from 'ember-sauce-material-design/mixins/smd-stackable-header-route';
import { module, test } from 'qunit';

module('Unit | Mixin | smd stackable header route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SmdStackableHeaderRouteObject = Ember.Object.extend(SmdStackableHeaderRouteMixin);
  let subject = SmdStackableHeaderRouteObject.create();
  assert.ok(subject);
});
