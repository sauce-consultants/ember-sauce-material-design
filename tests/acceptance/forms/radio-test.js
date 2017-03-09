/*
import {
  test
} from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | forms/radio');

test('visiting /forms/radio', function(assert) {
  visit('/forms/radio');

  andThen(function() {
    assert.equal(currentURL(), '/forms/radio');

    // flat select
    let $flatInput = find('.smd-form__control--radio').eq(0),
      $flatOptions = $flatInput.find('.mdl-radio'),
      $flatSelectedOption = $flatInput.find('.mdl-radio.is-checked');

    assert.equal($flatInput.length, 1, 'form control is present');
    assert.equal($flatOptions.length, 4, 'radio input has 4 options');
    assert.equal($flatSelectedOption.text().trim(), 'Green', 'correct option is selected');

    // object select
    let $objectInput = find('.smd-form__control--radio').eq(1),
      $objectOptions = $objectInput.find('.mdl-radio'),
      $objectSelectedOption = $objectInput.find('.mdl-radio.is-checked');

    assert.equal($objectInput.length, 1, 'form control is present');
    assert.equal($objectOptions.length, 8, 'radio input has 8 options');
    assert.equal($objectSelectedOption.text().trim(), 'Seven', 'correct option is selected');

    // model select
    let $modelInput = find('.smd-form__control--radio').eq(2),
      $modelOptions = $modelInput.find('.mdl-radio'),
      $modelSelectedOption = $modelInput.find('.mdl-radio.is-checked');

    assert.equal($modelInput.length, 1, 'form control is present');
    assert.equal($modelOptions.length, 6, 'radio input has 6 options');
    assert.equal($modelSelectedOption.text().trim(), 'Rabbit', 'correct option is selected');
  });
});
*/
