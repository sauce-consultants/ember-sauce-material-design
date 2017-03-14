import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-list', 'Integration | Component | smd list', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs `{{smd-list}}`);

  let $list = this.$('.ember-view'),
    $scroll = $list.find('.smd-list__scroll');

  assert.equal($list.text().trim(), '');
  assert.equal($scroll.length, 0);

  // Template block usage:
  this.render(hbs `
    {{#smd-list}}
      template block text
    {{/smd-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});


test('it renders scrollable', function(assert) {

  // Template block usage:
  this.render(hbs `
    {{#smd-list scrollable=true}}
      template block text
    {{/smd-list}}
  `);

  let $list = this.$('.ember-view'),
    $scroll = $list.find('.smd-list__scroll');

  assert.equal($list.hasClass('smd-list--scrollable'), true);
  assert.equal($scroll.text().trim(), 'template block text');
});

test('it renders sticky', function(assert) {

  // Template block usage:
  this.render(hbs `
    {{#smd-list scrollable=true sticky=true}}
      template block text
    {{/smd-list}}
  `);

  let $list = this.$('.ember-view'),
    $scroll = $list.find('.smd-list__scroll');

  assert.equal($list.hasClass('smd-list--scrollable'), true);
  assert.equal($list.hasClass('smd-list--sticky'), true);
  assert.equal($scroll.text().trim(), 'template block text');
});
