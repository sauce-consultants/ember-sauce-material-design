import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-form-control', 'Integration | Component | smd form control', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs(`{{smd-form-control}}`));

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs(`{{#smd-form-control}}template block text{{/smd-form-control}}`));

  assert.equal(this.$().text().trim(), 'template block text');
});

test('creates a label', function(assert) {

  this.render(hbs(`{{smd-form-control label='My Label'}}`));

  assert.equal(this.$().find('.smd-form__label').text().trim(), 'My Label');
});

test('creates a tip', function(assert) {

  this.render(hbs(`{{smd-form-control tip='This is my tip'}}`));

  assert.equal(this.$().find('.smd-form__tip').text().trim(), 'This is my tip');
});
