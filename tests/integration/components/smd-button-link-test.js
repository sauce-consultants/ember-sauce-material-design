import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-button-link', 'Integration | Component | smd button link', {
  integration: true
});

test('it renders with the correct text', function(assert) {

  this.render(hbs `{{smd-button}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs `{{smd-button text='Mike'}}`);
  assert.equal(this.$().text().trim(), 'Mike');

  // Template block usage:
  this.render(hbs `
    {{#smd-button "route"}}
      Hello
    {{/smd-button}}
  `);

  assert.equal(this.$().text().trim(), 'Hello');
});


test('it renders a raised button', function(assert) {
  this.render(hbs `{{smd-button "Foo" "route" isRaised=true}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--raised'), true, 'Has raised class');
});

test('it renders a fab button', function(assert) {
  this.render(hbs `{{smd-button "Foo" "route" isFab=true icon="add"}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--fab'), true, 'Has fab class');
  assert.equal($component.hasClass('mdl-button--icon'), false, 'Has no icon class');
});

test('it renders a mini fab button', function(assert) {
  this.render(hbs `{{smd-button "Foo" "route" isMiniFab=true icon="add"}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--fab'), true, 'Has mini-fab class');
  assert.equal($component.hasClass('mdl-button--mini-fab'), true, 'Has mini-fab class');
  assert.equal($component.hasClass('mdl-button--icon'), false, 'Has no icon class');
});

test('it renders a icon button', function(assert) {
  this.render(hbs `{{smd-button "Foo" "route" icon="add"}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--icon'), true, 'Has icon class');
});

test('it renders a colored button', function(assert) {
  this.render(hbs `{{smd-button "Foo" "route" isColored=true}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--colored'), true, 'Has colored class');
});

test('it renders a accent button', function(assert) {
  this.render(hbs `{{smd-button "Foo" "route" isAccent=true}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--accent'), true, 'Has accent class');
});

test('it renders a primary button', function(assert) {
  this.render(hbs `{{smd-button "Foo" "route" isPrimary=true}}`);
  let $component = this.$('.ember-view');
  assert.equal($component.hasClass('mdl-button--primary'), true, 'Has primary class');
});
