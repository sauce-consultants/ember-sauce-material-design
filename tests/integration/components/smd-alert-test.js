import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-alert', 'Integration | Component | smd alert', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs `{{smd-alert}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#smd-alert}}
      template block text
    {{/smd-alert}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders with heading title', function(assert) {

  this.set('title', 'FooBar');

  this.render(hbs `{{smd-alert title=title}}`);

  let $title = this.$('.smd-alert__title');

  assert.equal($title.text().trim(), 'FooBar');
});

test('it renders with affirmative action', function(assert) {

  this.set('affirmativeText', 'Save');

  this.render(hbs `{{smd-alert affirmativeText=affirmativeText}}`);

  let $button = this.$('.smd-alert__affirmative');

  assert.equal($button.text().trim(), 'Save');
});

test('it renders with dismissive action', function(assert) {

  this.set('dismissiveText', 'Cancel');

  this.render(hbs `{{smd-alert dismissiveText=dismissiveText}}`);

  let $button = this.$('.smd-alert__dismissive');

  assert.equal($button.text().trim(), 'Cancel');
});

test('fires action "action" on affirmative action button', function(assert) {

  assert.expect(2);

  this.set('affirmativeText', 'Save');

  this.on('action', (event, alert) => {
    assert.equal(event, 'confirm');
    assert.ok(alert.element.className.indexOf('this-is-my-alert') >= 0, 'Alert component is passed as argument to action');
  });

  this.render(hbs `{{smd-alert affirmativeText=affirmativeText action="action" class="this-is-my-alert"}}`);

  let $action = this.$('.smd-alert__affirmative');

  $action.click();
});

test('fires action "affirmativeAction" on affirmative action button', function(assert) {

  assert.expect(1);

  this.set('affirmativeText', 'Save');

  this.on('affirmativeAction', (alert) => {
    assert.ok(alert.element.className.indexOf('this-is-my-alert') >= 0, 'Alert component is passed as argument to action');
  });

  this.render(hbs `{{smd-alert affirmativeText=affirmativeText affirmativeAction="affirmativeAction" class="this-is-my-alert"}}`);

  let $action = this.$('.smd-alert__affirmative');

  $action.click();
});

test('fires action "action" on dismissive action button', function(assert) {

  assert.expect(2);

  this.set('dismissiveText', 'Save');

  this.on('action', (event, alert) => {
    assert.equal(event, 'dismiss');
    assert.ok(alert.element.className.indexOf('this-is-my-alert') >= 0, 'Alert component is passed as argument to action');
  });

  this.render(hbs `{{smd-alert dismissiveText=dismissiveText action="action" dismissiveAction=null class="this-is-my-alert"}}`);

  let $action = this.$('.smd-alert__dismissive');

  $action.click();
});

test('fires action "dismissiveAction" on dismissive action button', function(assert) {

  assert.expect(1);

  this.set('dismissiveText', 'Save');

  this.on('dismissiveAction', (alert) => {
    assert.ok(alert.element.className.indexOf('this-is-my-alert') >= 0, 'Alert component is passed as argument to action');
  });

  this.render(hbs `{{smd-alert dismissiveText=dismissiveText dismissiveAction="dismissiveAction" class="this-is-my-alert"}}`);

  let $action = this.$('.smd-alert__dismissive');

  $action.click();
});
