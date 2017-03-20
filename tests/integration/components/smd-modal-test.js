import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-modal', 'Integration | Component | smd modal', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs `{{smd-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#smd-modal}}
      template block text
    {{/smd-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});


test('it renders with heading title', function(assert) {

  this.set('title', 'FooBar');

  this.render(hbs `{{smd-modal title=title}}`);

  let $component = this.$(),
    $title = $component.find('.smd-modal__title');

  assert.equal($title.text().trim(), 'FooBar');
});

test('it renders with action title', function(assert) {

  this.set('actionText', 'Save');

  this.render(hbs `{{smd-modal actionText=actionText}}`);

  let $component = this.$(),
    $action = $component.find('.smd-modal__action');

  assert.equal($action.text().trim(), 'Save');
});

test('it renders with close icon', function(assert) {

  this.set('closeIcon', 'close');

  this.render(hbs `{{smd-modal closeIcon=closeIcon}}`);

  let $component = this.$(),
    $close = $component.find('.smd-modal__close');

  assert.equal($close.text().trim(), 'close');
});

test('it renders with primary action', function(assert) {

  this.set('primaryText', 'Save');

  this.render(hbs `{{smd-modal primaryText=primaryText}}`);

  let $component = this.$(),
    $close = $component.find('.smd-modal__primary');

  assert.equal($close.text().trim(), 'Save');
});

test('it renders with secondary action', function(assert) {

  this.set('secondaryText', 'Cancel');

  this.render(hbs `{{smd-modal secondaryText=secondaryText}}`);

  let $component = this.$(),
    $close = $component.find('.smd-modal__secondary');

  assert.equal($close.text().trim(), 'Cancel');
});

test('fires action "action" on close button', function(assert) {

  assert.expect(2);

  this.set('closeIcon', 'close');

  this.on('action', (event, modal) => {
    assert.equal(event, 'close');
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal closeIcon=closeIcon action="action" class="this-is-my-modal"}}`);

  let $close = this.$('.smd-modal__close');

  $close.click();
});

test('fires action "closeAction" on close button', function(assert) {

  assert.expect(1);

  this.set('closeIcon', 'close');

  this.on('closeAction', (modal) => {
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal closeIcon=closeIcon closeAction="closeAction" class="this-is-my-modal"}}`);

  let $close = this.$('.smd-modal__close');

  $close.click();
});

test('fires action "action" on header action button', function(assert) {

  assert.expect(2);

  this.set('actionText', 'Save');

  this.on('action', (event, modal) => {
    assert.equal(event, 'heading');
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal actionText=actionText action="action" class="this-is-my-modal"}}`);

  let $action = this.$('.smd-modal__action');

  $action.click();
});

test('fires action "headingAction" on header action button', function(assert) {

  assert.expect(1);

  this.set('actionText', 'Save');

  this.on('headingAction', (modal) => {
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal actionText=actionText headingAction="headingAction" class="this-is-my-modal"}}`);

  let $action = this.$('.smd-modal__action');

  $action.click();
});

test('fires action "action" on primary action button', function(assert) {

  assert.expect(2);

  this.set('primaryText', 'Save');

  this.on('action', (event, modal) => {
    assert.equal(event, 'primary');
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal primaryText=primaryText action="action" class="this-is-my-modal"}}`);

  let $action = this.$('.smd-modal__primary');

  $action.click();
});

test('fires action "primaryAction" on primary action button', function(assert) {

  assert.expect(1);

  this.set('primaryText', 'Save');

  this.on('primaryAction', (modal) => {
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal primaryText=primaryText primaryAction="primaryAction" class="this-is-my-modal"}}`);

  let $action = this.$('.smd-modal__primary');

  $action.click();
});

test('fires action "action" on secondary action button', function(assert) {

  assert.expect(2);

  this.set('secondaryText', 'Save');

  this.on('action', (event, modal) => {
    assert.equal(event, 'secondary');
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal secondaryText=secondaryText action="action" class="this-is-my-modal"}}`);

  let $action = this.$('.smd-modal__secondary');

  $action.click();
});

test('fires action "secondaryAction" on secondary action button', function(assert) {

  assert.expect(1);

  this.set('secondaryText', 'Save');

  this.on('secondaryAction', (modal) => {
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal secondaryText=secondaryText secondaryAction="secondaryAction" class="this-is-my-modal"}}`);

  let $action = this.$('.smd-modal__secondary');

  $action.click();
});

test('fires action "action" on outside click', function(assert) {

  assert.expect(2);

  this.set('secondaryText', 'Save');

  this.on('action', (event, modal) => {
    assert.equal(event, 'outside');
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal action="action" class="this-is-my-modal"}}`);

  let $obfuscator = this.$('.smd-modal__obfuscator');

  $obfuscator.click();
});

test('fires action "outsideAction" on outside click', function(assert) {

  assert.expect(1);

  this.set('secondaryText', 'Save');

  this.on('outsideAction', (modal) => {
    assert.ok(modal.element.className.indexOf('this-is-my-modal') >= 0, 'Modal component is passed as argument to action');
  });

  this.render(hbs `{{smd-modal outsideAction="outsideAction" class="this-is-my-modal"}}`);

  let $obfuscator = this.$('.smd-modal__obfuscator');

  $obfuscator.click();
});
