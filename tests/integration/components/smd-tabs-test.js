import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-tabs', 'Integration | Component | smd tabs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{smd-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#smd-tabs}}
      template block text
    {{/smd-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});


test('it renders with alignment class', function(assert) {

  this.set('align', 'left');

  this.render(hbs `{{smd-tabs align=align}}`);

  let $tabContainer = this.$('.mdl-tabs__tab-bar');

  assert.equal($tabContainer.hasClass('mdl-tabs__tab-bar--left'), true);

  this.set('align', 'right');
  assert.equal($tabContainer.hasClass('mdl-tabs__tab-bar--right'), true);

  this.set('align', 'center');
  assert.equal($tabContainer.hasClass('mdl-tabs__tab-bar--center'), true);

});
