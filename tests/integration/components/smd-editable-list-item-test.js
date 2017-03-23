import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-editable-list-item', 'Integration | Component | smd editable list item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{smd-editable-list-item}}`);
  assert.ok(this.$());
});


test('it render and yields content',function(assert) {
  this.render(hbs`
    {{#smd-editable-list-item}}
          <div class="content">template block text</div>
    {{/smd-editable-list-item}}
  `);

  let $component = this.$('.ember-view').first(),
    $content = $component.find('.content');

  assert.equal($content.text().trim(), 'template block text', 'it renders content');
});
