import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-navigation', 'Integration | Component | smd navigation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs(`{{smd-navigation}}`));

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs(`
    {{#smd-navigation}}
      template block text
    {{/smd-navigation}}
  `));

  assert.equal(this.$().text().trim(), 'template block text');
});
