import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-icon', 'Integration | Component | smd icon', {
  integration: true
});

test('it renders with correct text', function(assert) {

  this.render(hbs `{{smd-icon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#smd-icon}}
      template block text
    {{/smd-icon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders with correct icon', function(assert) {

  this.set('icon', 'back');

  this.render(hbs `{{smd-icon icon=icon}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'back', 'Has correct icon');
});

test('it renders with correct badge', function(assert) {

  this.set('icon', 'list');
  this.set('badge', 6);

  this.render(hbs `{{smd-icon icon=icon badge=badge}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'list', 'Has correct icon');
  assert.equal($component.attr('data-badge'), 6, 'Has correct badge count');
});

test('it renders badge with no background', function(assert) {

  this.set('icon', 'list');
  this.set('badge', 6);
  this.set('noBadgeBackground', true);

  this.render(hbs `{{smd-icon icon=icon badge=badge noBadgeBackground=noBadgeBackground}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'list', 'Has correct icon');
  assert.equal($component.attr('data-badge'), 6, 'Has correct badge count');
  assert.equal($component.hasClass('mdl-badge--no-background'), true, 'has no-background class');
});

test('it renders badge with overlap', function(assert) {

  this.set('icon', 'list');
  this.set('badge', 7);
  this.set('badgeOverlap', true);

  this.render(hbs `{{smd-icon icon=icon badge=badge badgeOverlap=badgeOverlap}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'list', 'Has correct icon');
  assert.equal($component.attr('data-badge'), 7, 'Has correct badge count');
  assert.equal($component.hasClass('mdl-badge--overlap'), true, 'has overlap class');
});
