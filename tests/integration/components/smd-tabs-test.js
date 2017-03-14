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

test('it renders with theme class', function(assert) {

  this.set('theme', 'default');

  this.render(hbs `{{smd-tabs theme=theme}}`);

  let $tabs = this.$('.mdl-tabs');

  assert.equal($tabs.hasClass('mdl-tabs--default'), true);

  this.set('theme', 'primary');
  assert.equal($tabs.hasClass('mdl-tabs--primary'), true);

  this.set('theme', 'accent');
  assert.equal($tabs.hasClass('mdl-tabs--accent'), true);

});

test('it passes theme to child tab', function(assert) {

  this.set('theme', 'default');

  this.render(hbs `
    {{#smd-tabs theme=theme}}
      {{smd-tab 'One' 'one'}}
    {{/smd-tabs}}
    `);

  let $tabs = this.$('.mdl-tabs'),
    $tab = $tabs.find('.mdl-tabs__tab');

  assert.equal($tab.hasClass('mdl-tabs__tab--default'), true);

  this.set('theme', 'primary');
  assert.equal($tab.hasClass('mdl-tabs__tab--primary'), true);

  this.set('theme', 'accent');
  assert.equal($tab.hasClass('mdl-tabs__tab--accent'), true);

});
