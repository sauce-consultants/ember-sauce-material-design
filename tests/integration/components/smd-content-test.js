import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-content', 'Integration | Component | smd content', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs `{{smd-content}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), '', 'Yields content');
  assert.equal($component.hasClass('mdl-layout__content'), true, 'Has class');

});

test('it renders content', function(assert) {

  // Template block usage:
  this.render(hbs `
    {{#smd-content}}
      template block text
    {{/smd-content}}
  `);

  let $component = this.$('.ember-view');

  assert.equal($component.text().trim(), 'template block text', 'Yields content');
  assert.equal($component.hasClass('mdl-layout__content'), true, 'Has class');
});
