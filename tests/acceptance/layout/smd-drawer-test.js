import {
  test
} from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | layout/smd-drawer');

test('opening drawer using menu button', function(assert) {
  visit('/layout');

  andThen(function() {

    let $toggleButton = find('.mdl-layout__drawer-button');
    let $drawer = find('.mdl-layout__drawer').first();

    $toggleButton.click();

    assert.equal($drawer.hasClass('is-visible'), true, 'is-visible class is added.');
  });
});
