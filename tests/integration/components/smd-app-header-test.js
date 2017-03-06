import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-app-header', 'Integration | Component | smd app header', {
  integration: true
});

test('it renders', function(assert) {

  this.set('scroll', false);
  this.set('waterfall', false);
  this.set('hideTop', false);
  this.set('transparent', false);
  this.set('noShadow', false);

  this.render(hbs(`{{smd-app-header scroll=scroll waterfall=waterfall hideTop=hideTop transparent=transparent noShadow=noShadow}}`));

  let $component = this.$('.ember-view').first();

  assert.equal($component.hasClass('mdl-layout__header--scroll'), false, 'Does not have scroll class');
  assert.equal($component.hasClass('mdl-layout__header--waterfall'), false, 'Does not have waterfall class');
  assert.equal($component.hasClass('mdl-layout__header--waterfall-hide-top'), false, 'Does not have waterfall hide top class');
  assert.equal($component.hasClass('mdl-layout__header--transparent'), false, 'Does not have transparent class');
  assert.equal($component.hasClass('mdl-layout__header--seamed'), false, 'Does not have seamed class');

  // turn on fixed drawer
  this.set('scroll', true);
  assert.equal($component.hasClass('mdl-layout__header--scroll'), true, 'Has scroll class');

  // turn on fixed header
  this.set('waterfall', true);
  assert.equal($component.hasClass('mdl-layout__header--waterfall'), true, 'Has waterfall class');

  // turn on fixed header
  this.set('waterfall', false);
  this.set('hideTop', true);
  assert.equal($component.hasClass('mdl-layout__header--waterfall'), true, 'Has waterfall class');
  assert.equal($component.hasClass('mdl-layout__header--waterfall-hide-top'), true, 'Has waterfall class');

  // hide drawer button
  this.set('transparent', true);
  assert.equal($component.hasClass('mdl-layout__header--transparent'), true, 'Has transparent class');

  // Hide drawer button on desktop
  this.set('noShadow', true);
  assert.equal($component.hasClass('mdl-layout__header--seamed'), true, 'Has seamed class');
});

test('it renders with content', function(assert) {

  // Template block usage:
  this.render(hbs(`
    {{#smd-app-header}}
      template block text
    {{/smd-app-header}}
  `));

  let $content = this.$('.ember-view').first();

  assert.equal($content.text().trim(), 'template block text', 'it renderes content');
});
