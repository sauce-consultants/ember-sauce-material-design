import {
  test
} from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | forms/select');

test('visiting /forms/select', function(assert) {
  visit('/forms/select');

  andThen(function() {
    let $control = find('.smd-form__control'),
      $options = find('.smd-form__control option'),
      $selectedOption = find('.smd-form__control option:selected');

    assert.equal(currentURL(), '/forms/select');
    assert.equal($control.length, 1, 'form control is present');
    assert.equal($options.length, 4, 'select box has 4 options');
  });
});
