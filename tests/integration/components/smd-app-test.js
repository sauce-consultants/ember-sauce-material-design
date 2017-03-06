import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-app', 'Integration | Component | smd app', {
  integration: true
});

test('it renders', function(assert) {

  this.set('fixedDrawer', false);
  this.set('fixedHeader', false);
  this.set('noDrawerButton', false);
  this.set('noDesktopDrawerButton', false);

  this.render(hbs(`{{smd-app fixedDrawer=fixedDrawer fixedHeader=fixedHeader noDrawerButton=noDrawerButton noDesktopDrawerButton=noDesktopDrawerButton}}`));

  let $component = this.$('.ember-view').first();

  assert.equal($component.hasClass('mdl-layout--fixed-drawer'), false, 'Does not have fixed drawer class');
  assert.equal($component.hasClass('mdl-layout--fixed-header'), false, 'Does not have fixed header class');
  assert.equal($component.hasClass('mdl-layout--no-drawer-button'), false, 'Does not have no drawer button class');
  assert.equal($component.hasClass('mdl-layout--no-desktop-drawer-button'), false, 'Does not have no desktop drawer button class');

  // turn on fixed drawer
  this.set('fixedDrawer', true);
  assert.equal($component.hasClass('mdl-layout--fixed-drawer'), true, 'Has fixed drawer class');

  // turn on fixed header
  this.set('fixedHeader', true);
  assert.equal($component.hasClass('mdl-layout--fixed-header'), true, 'Has fixed header class');

  // hide drawer button
  this.set('noDrawerButton', true);
  assert.equal($component.hasClass('mdl-layout--no-drawer-button'), true, 'Has no drawer button class');

  // Hide drawer button on desktop
  this.set('noDesktopDrawerButton', true);
  assert.equal($component.hasClass('mdl-layout--no-desktop-drawer-button'), true, 'Has no desktop drawer button class');
});

test('it renders as with content', function(assert) {

  // Template block usage:
  this.render(hbs(`
    {{#smd-app}}
      template block text
    {{/smd-app}}
  `));

  let $content = this.$('.ember-view').first();

  assert.equal($content.text().trim(), 'template block text', 'it renderes content');
});
