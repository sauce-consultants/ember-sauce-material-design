import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-dropdown', 'Integration | Component | smd dropdown', {
  integration: true
});

test('it renders text button', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{smd-dropdown text="Foo" disabled=disabled}}`);

  let $component = this.$('.ember-view').first(),
    $button = $component.find('.smd-button');

  assert.equal($button.text().trim(), 'Foo');
  assert.equal($button.is(':disabled'), false, 'Button is not disabled');

  this.set('disabled', true);

  assert.equal($button.is(':disabled'), true, 'Button is disabled');
});

test('it renders icon button', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{smd-dropdown icon="more_vert" disabled=disabled}}`);

  let $component = this.$('.ember-view').first(),
    $button = $component.find('.smd-button');

  assert.equal($button.text().trim(), 'more_vert');
  assert.equal($button.is(':disabled'), false, 'Button is not disabled');

  this.set('disabled', true);

  assert.equal($button.is(':disabled'), true, 'Button is disabled');
});

test('it renders content', function(assert) {

  this.render(hbs `
    {{#smd-dropdown}}
    template block text
    {{/smd-dropdown}}
  `);

  let $component = this.$('.ember-view').first();

  assert.equal($component.text().trim(), 'template block text');
});

// TODO - write test to check menu opens in acceptance test. Relies upon mdl js
// so not possible in an intergration test
