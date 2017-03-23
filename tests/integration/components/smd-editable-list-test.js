import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-drawer', 'Integration | Component | smd drawer', {
  integration: true
});

test('it renders', function(assert) {

  this.set('title', 'My Title');

  this.render(hbs `{{smd-drawer title=title}}`);

  let $content = this.$('.ember-view').first(),
    $title = $content.find('.smd-form__legend');

  assert.equal($title.text().trim(), 'My Title', 'it renders title');
});
