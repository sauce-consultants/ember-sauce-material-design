import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-button', 'Integration | Component | smd button', {
  integration: true
});

test('it renders with the correct text', function(assert) {

  this.render(hbs `{{smd-button}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs `{{smd-button text='Mike'}}`);
  assert.equal(this.$().text().trim(), 'Mike');

  // Template block usage:
  this.render(hbs `
    {{#smd-button}}
      Hello
    {{/smd-button}}
  `);

  assert.equal(this.$().text().trim(), 'Hello');
});

test('fires action "action" on click by default', function(assert) {

  assert.expect(1);

  this.set('buttonClicked', (val) => {
    assert.ok(val.element.className.indexOf('this-is-my-button') >= 0, 'Button component is passed as argument to action');
  });

  this.render(hbs `
    {{#smd-button action=buttonClicked class='this-is-my-button'}}
      Hello
    {{/smd-button}}
  `);

  this.$('.ember-view').click();
});

test('does not fire action when disabled', function(assert) {

  assert.expect(2);

  let clickCount = 0;

  this.set('buttonClicked', () => {
    clickCount++;
  });

  this.set('buttonDisabled', false);

  this.render(hbs `
    {{#smd-button action=buttonClicked class='this-is-my-button' disabled=buttonDisabled}}
      Hello
    {{/smd-button}}
  `);

  this.$('.ember-view').click();
  assert.equal(clickCount, 1, 'One click action fired');

  this.set('buttonDisabled', true);
  this.$('.ember-view').click();

  assert.equal(clickCount, 1, 'Still one click');
});

test('it renders a raised button', function(assert) {
  this.render(hbs `{{smd-button text="Foo" isRaised=true}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--raised'), true, 'Has raised class');
});

test('it renders a fab button', function(assert) {
  this.render(hbs `{{smd-button text="Foo" isFab=true icon="add"}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--fab'), true, 'Has fab class');
  assert.equal($component.hasClass('mdl-button--icon'), false, 'Has no icon class');
});

test('it renders a mini fab button', function(assert) {
  this.render(hbs `{{smd-button text="Foo" isMiniFab=true icon="add"}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--fab'), true, 'Has mini-fab class');
  assert.equal($component.hasClass('mdl-button--mini-fab'), true, 'Has mini-fab class');
  assert.equal($component.hasClass('mdl-button--icon'), false, 'Has no icon class');
});

test('it renders a icon button', function(assert) {
  this.render(hbs `{{smd-button text="Foo" icon="add"}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--icon'), true, 'Has icon class');
});

test('it renders a colored button', function(assert) {
  this.render(hbs `{{smd-button text="Foo" isColored=true}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--colored'), true, 'Has colored class');
});

test('it renders a accent button', function(assert) {
  this.render(hbs `{{smd-button text="Foo" isAccent=true}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--accent'), true, 'Has accent class');
});

test('it renders a primary button', function(assert) {
  this.render(hbs `{{smd-button text="Foo" isPrimary=true}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--primary'), true, 'Has primary class');
});
