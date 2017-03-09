import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-drawer', 'Integration | Component | smd drawer', {
  integration: true
});

test('it renders', function(assert) {

  this.set('title', 'Foo');

  this.render(hbs `{{smd-drawer title=title}}`);

  let $content = this.$('.ember-view').first(),
    $title = $content.find('.mdl-layout-title');

  assert.equal($title.text().trim(), 'Foo', 'it renders title');
});

test('it renders with content', function(assert) {

  this.set('title', 'Bar');

  // Template block usage:
  this.render(hbs `
    {{#smd-drawer title=title}}
      <div class="content">template block text</div>
    {{/smd-drawer}}
  `);

  let $component = this.$('.ember-view').first(),
    $title = $component.find('.mdl-layout-title'),
    $content = $component.find('.content');

  assert.equal($title.text().trim(), 'Bar', 'it renders title');
  assert.equal($content.text().trim(), 'template block text', 'it renders content');
});
