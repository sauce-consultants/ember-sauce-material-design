import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-navigation', 'Integration | Component | smd navigation', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs `{{smd-navigation}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), '');
  assert.equal($component.hasClass('mdl-navigation'), true, 'Has class');

});

test('it renders with content', function(assert) {

  // Template block usage:
  this.render(hbs `
    {{#smd-navigation}}
      template block text
    {{/smd-navigation}}
  `);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'template block text');
});
