import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-dropdown-item', 'Integration | Component | smd dropdown item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{smd-dropdown-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#smd-dropdown-item}}
      template block text
    {{/smd-dropdown-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
