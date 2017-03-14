import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-tab', 'Integration | Component | smd tab', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs `{{smd-tab "Title" "route"}}`);

  let $tab = this.$('.ember-view');

  assert.equal($tab.text().trim(), 'Title', 'Has link title');

  assert.equal($tab.hasClass('mdl-tabs__tab--undefined'), false, 'does not have theme class');

  this.render(hbs `
    {{#smd-tab "route"}}Link Title{{/smd-tab}}
  `);

  $tab = this.$('.ember-view');

  assert.equal($tab.text().trim(), 'Link Title', 'Yields content');
});
