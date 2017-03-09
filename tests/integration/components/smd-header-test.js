import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-header', 'Integration | Component | smd header', {
  integration: true
});


test('it yields content', function(assert) {

  this.render(hbs `{{#smd-header}}FooBar{{/smd-header}}`);

  let $component = this.$(),
    $bottomToolbar = $component.find('.smd-header__toolbar--bottom');

  assert.equal($bottomToolbar.text().trim(), 'FooBar');

});

test('it renders with correct title', function(assert) {

  this.set('title', 'FooBar');

  this.render(hbs `{{smd-header title=title}}`);

  let $component = this.$(),
    $title = $component.find('.smd-header__title');

  assert.equal($title.text().trim(), 'FooBar');

});

test('it renders with a back button', function(assert) {

  this.set('title', 'FooBar');

  this.render(hbs `{{smd-header title=title backIcon='arrow_back'}}`);

  let $component = this.$(),
    $back = $component.find('.smd-header__action--back');

  assert.equal($back.length, 1, 'Has back button');
  assert.equal($back.text().trim(), 'arrow_back', 'Has correct back icon');

});

test('fires action "action" on back button click', function(assert) {

  assert.expect(2);

  this.on('action', (event, header) => {
    assert.equal(event, 'back');
    assert.ok(header.element.className.indexOf('this-is-my-header') >= 0, 'Header component is passed as argument to action');
  });

  this.render(hbs `{{smd-header backIcon='arrow_back' action="action" class="this-is-my-header"}}`);

  let $component = this.$(),
    $back = $component.find('.smd-header__action--back');

  $back.click();

});

test('fires action "backAction" on back button click', function(assert) {

  assert.expect(1);

  this.on('backAction', (header) => {
    assert.ok(header.element.className.indexOf('this-is-my-header') >= 0, 'Header component is passed as argument to action');
  });

  this.render(hbs `{{smd-header backIcon='arrow_back' backAction="backAction" class="this-is-my-header"}}`);

  let $component = this.$(),
    $back = $component.find('.smd-header__action--back');

  $back.click();

});

test('it renders with a fab button', function(assert) {

  this.render(hbs `{{smd-header fabIcon='add'}}`);

  let $component = this.$(),
    $fab = $component.find('.smd-header__fab');

  assert.equal($fab.length, 1, 'Has fab button');
  assert.equal($fab.text().trim(), 'add', 'Has correct fab icon');

});

test('it renders with a right aligned fab button', function(assert) {

  this.render(hbs `{{smd-header fabIcon='flag' isRightFab=true}}`);

  let $component = this.$(),
    $fab = $component.find('.smd-header__fab');

  assert.equal($fab.length, 1, 'Has fab button');
  assert.equal($fab.hasClass('smd-header__fab--right'), true, 'Has correct right class');
  assert.equal($fab.text().trim(), 'flag', 'Has correct fab icon');

});

test('it renders with a mini fab button', function(assert) {

  this.render(hbs `{{smd-header fabIcon='add' isMiniFab=true}}`);

  let $component = this.$(),
    $fab = $component.find('.smd-header__mini-fab');

  assert.equal($fab.length, 1, 'Has fab button');
  assert.equal($fab.text().trim(), 'add', 'Has correct fab icon');

});

test('it renders with a right aligned mini fab button', function(assert) {

  this.render(hbs `{{smd-header fabIcon='flag' isMiniFab=true isRightFab=true}}`);

  let $component = this.$(),
    $fab = $component.find('.smd-header__mini-fab');

  assert.equal($fab.length, 1, 'Has fab button');
  assert.equal($fab.hasClass('smd-header__mini-fab--right'), true, 'Has correct right class');
  assert.equal($fab.text().trim(), 'flag', 'Has correct fab flag');

});

test('fires action "action" on fab button click', function(assert) {

  assert.expect(2);

  this.on('action', (event, header) => {
    assert.equal(event, 'fab');
    assert.ok(header.element.className.indexOf('this-is-my-header') >= 0, 'Header component is passed as argument to action');
  });

  this.render(hbs `{{smd-header fabIcon='fab' action="action" class="this-is-my-header"}}`);

  let $component = this.$(),
    $fab = $component.find('.smd-header__fab');

  $fab.click();

});

test('fires action "fabAction" on fab button click', function(assert) {

  assert.expect(1);

  this.on('fabAction', (header) => {
    assert.ok(header.element.className.indexOf('this-is-my-header') >= 0, 'Header component is passed as argument to action');
  });

  this.render(hbs `{{smd-header fabIcon='add' fabAction="fabAction" class="this-is-my-header"}}`);

  let $component = this.$(),
    $fab = $component.find('.smd-header__fab');

  $fab.click();

});

test('it renders three toolbar buttons', function(assert) {

  this.render(hbs `{{smd-header toolbarIconOne='one' toolbarIconTwo='two' toolbarIconThree='three'}}`);

  let $component = this.$(),
    $toolbarOne = $component.find('.smd-header__action').eq(0),
    $toolbarTwo = $component.find('.smd-header__action').eq(1),
    $toolbarThree = $component.find('.smd-header__action').eq(2);

  assert.equal($toolbarOne.length, 1, 'Has toolbar 1 button');
  assert.equal($toolbarOne.text().trim(), 'one', 'Has correct toolbar 1 icon');

  assert.equal($toolbarTwo.length, 1, 'Has toolbar 2 button');
  assert.equal($toolbarTwo.text().trim(), 'two', 'Has correct toolbar 2 icon');

  assert.equal($toolbarThree.length, 1, 'Has toolbar 3 button');
  assert.equal($toolbarThree.text().trim(), 'three', 'Has correct toolbar 3 icon');

});

test('fires "action" on toolbar button clicks', function(assert) {

  assert.expect(2);

  this.on('action', (event, header) => {
    assert.equal(event, 'toolbarTwo');
    assert.ok(header.element.className.indexOf('this-is-my-header') >= 0, 'Header component is passed as argument to action');
  });

  this.render(hbs `{{smd-header action='action' toolbarIconOne='one' toolbarIconTwo='two' toolbarIconThree='three' class="this-is-my-header"}}`);

  let $component = this.$(),
    $toolbarTwo = $component.find('.smd-header__action').eq(1);

  $toolbarTwo.click();

});

test('fires action for all three toolbar items on button click', function(assert) {

  assert.expect(3);

  this.on('toolbarActionOne', (header) => {
    assert.ok(header.element.className.indexOf('this-is-my-header') >= 0, 'Header component is passed as argument to action');
  });

  this.on('toolbarActionTwo', (header) => {
    assert.ok(header.element.className.indexOf('this-is-my-header') >= 0, 'Header component is passed as argument to action');
  });

  this.on('toolbarActionThree', (header) => {
    assert.ok(header.element.className.indexOf('this-is-my-header') >= 0, 'Header component is passed as argument to action');
  });

  this.render(hbs `{{smd-header
    toolbarActionOne='toolbarActionOne'
    toolbarActionTwo='toolbarActionTwo'
    toolbarActionThree='toolbarActionThree'
    toolbarIconOne='one'
    toolbarIconTwo='two'
    toolbarIconThree='three'
    class="this-is-my-header"}}`);

  let $component = this.$(),
    $toolbarOne = $component.find('.smd-header__action').eq(0),
    $toolbarTwo = $component.find('.smd-header__action').eq(1),
    $toolbarThree = $component.find('.smd-header__action').eq(2);

  $toolbarOne.click();
  $toolbarTwo.click();
  $toolbarThree.click();

});

test('it renders minimized', function(assert) {

  this.set('title', 'FooBar');

  this.render(hbs `{{smd-header title=title isMinimized=true}}`);

  let $component = this.$('.ember-view');

  assert.equal($component.hasClass('smd-header--minimized'), true, 'Has minisized classs');

});
