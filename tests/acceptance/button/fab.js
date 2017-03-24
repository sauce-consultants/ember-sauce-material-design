import {
  test
} from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | forms/radio');

test('visiting /examples/button/fab', function(assert) {

  visit('/examples/button/fab');

  andThen(function() {
    assert.equal(currentURL(), '/examples/button/fab');

    let $fab = find('.smd-fab').eq(0);

    assert.equal($fab.text().trim(), "send", "Has correct icon");
    assert.equal($fab.hasClass("smd-fab--right"), true, "Has right align class");
    assert.equal($fab.hasClass("smd-fab--hidden"), false, "Does not have hidden class");

  });

});
