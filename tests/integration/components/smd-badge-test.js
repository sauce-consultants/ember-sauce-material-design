import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-badge', 'Integration | Component | smd badge', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs `{{smd-badge text='Foo'}}`);

  assert.equal(this.$().text().trim(), 'Foo');

  // Template block usage:
  this.render(hbs `
    {{#smd-badge}}
      template block text
    {{/smd-badge}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});


test('it renders with correct badge', function(assert) {

  this.set('badge', 13);

  this.render(hbs `{{smd-badge text="Foo" badge=badge}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'Foo', 'Has correct text');
  assert.equal($component.attr('data-badge'), 13, 'Has correct badge count');
  assert.equal($component.hasClass('mdl-badge'), true, 'has badge class');
});

test('it renders badge with no background', function(assert) {

  this.set('badge', 6);
  this.set('noBadgeBackground', true);

  this.render(hbs `{{smd-badge text="Foo" badge=badge noBadgeBackground=noBadgeBackground}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'Foo', 'Has correct text');
  assert.equal($component.attr('data-badge'), 6, 'Has correct badge count');
  assert.equal($component.hasClass('mdl-badge--no-background'), true, 'has no-background class');
});

test('it renders badge with overlap', function(assert) {

  this.set('badge', 7);
  this.set('badgeOverlap', true);

  this.render(hbs `{{smd-badge text="Foo" badge=badge badgeOverlap=badgeOverlap}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'Foo', 'Has correct text');
  assert.equal($component.attr('data-badge'), 7, 'Has correct badge count');
  assert.equal($component.hasClass('mdl-badge--overlap'), true, 'has overlap class');
});
