import {
  test
} from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | forms/select');

test('visiting /forms/select', function(assert) {
  visit('/forms/select');

  andThen(function() {

    assert.equal(currentURL(), '/forms/select');

    // flat select
    let $flatInput = find('[name="color"]'),
      $flatOptions = $flatInput.find('option'),
      $flatFirstOption = $flatInput.find('option:first'),
      $flatSelectedOption = $flatInput.find('option:selected');

    assert.equal($flatInput.length, 1, 'form control is present');
    assert.equal($flatOptions.length, 5, 'select box has 4 options');
    assert.equal($flatFirstOption.text(), '-- Select Color --', 'has null option');
    assert.equal($flatSelectedOption.text(), 'Green', 'correct option is selected');

    // object select
    let $objectInput = find('[name="number"]'),
      $objectOptions = $objectInput.find('option'),
      $objectSelectedOption = $objectInput.find('option:selected');

    assert.equal($objectInput.length, 1, 'form control is present');
    assert.equal($objectOptions.length, 8, 'select box has 8 options');
    assert.equal($objectSelectedOption.text(), 'Seven', 'correct option is selected');

    // model select
    let $modelInput = find('[name="animal"]'),
      $modelOptions = $modelInput.find('option'),
      $modelSelectedOption = $modelInput.find('option:selected');

    assert.equal($modelInput.length, 1, 'form control is present');
    assert.equal($modelOptions.length, 6, 'select box has 6 options');
    assert.equal($modelSelectedOption.text(), 'Rabbit', 'correct option is selected');
  });
});
