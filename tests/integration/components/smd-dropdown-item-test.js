import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-dropdown-item', 'Integration | Component | smd dropdown item', {
  integration: true
});

test('it renders', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{smd-dropdown-item text="Foo" disabled=disabled}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'Foo');
  assert.equal($component.is('[disabled]'), false, 'Button is not disabled');

  this.set('disabled', true);

  assert.equal($component.is('[disabled]'), true, 'Button is disabled');
});

test('it renders content', function(assert) {

  this.set('disabled', false);

  this.render(hbs `
    {{#smd-dropdown-item disabled=disabled}}
    template block text
    {{/smd-dropdown-item}}
  `);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'template block text');
  assert.equal($component.is('[disabled]'), false, 'Button is not disabled');

  this.set('disabled', true);

  assert.equal($component.is('[disabled]'), true, 'Button is disabled');
});

test('it renders with divider', function(assert) {

  this.set('divider', true);

  this.render(hbs `{{smd-dropdown-item text="Foo" divider=divider}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'Foo');
  assert.equal($component.hasClass('mdl-menu__item--full-bleed-divider'), true, 'Item has divider class');

  this.set('divider', false);

  assert.equal($component.hasClass('mdl-menu__item--full-bleed-divider'), false, 'Item has no divider class');
});

test('it renders with icon', function(assert) {

  this.set('icon', 'trash');

  this.render(hbs `{{smd-dropdown-item text="Foo" icon=icon}}`);

  let $component = this.$('.ember-view'),
    $icon = $component.find('.smd-icon');

  assert.equal($icon.text().trim(), 'trash', 'Has icon');
  assert.equal($component.hasClass('mdl-menu__item--icon'), true, 'Item has icon class');

  this.set('icon', null);

  assert.equal($component.hasClass('mdl-menu__item--icon'), false, 'Item has no icon class');
});

test('fires action "action" on click by default', function(assert) {

  assert.expect(1);

  this.on('itemClicked', (val) => {
    assert.ok(val.element.className.indexOf('dropdown-item') >= 0, 'Button component is passed as argument to action');
  });

  this.render(hbs `
    {{#smd-dropdown-item action='itemClicked' class="this-is-my-dropdown-item"}}
      Hello
    {{/smd-dropdown-item}}
  `);

  let $component = this.$('.ember-view');

  $component.click();
});
