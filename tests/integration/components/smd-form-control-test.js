import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smd-form-control', 'Integration | Component | smd form control', {
  integration: true
});

function have_class_names(assert, $element, classNames, label) {
  let elementClasses = $element.attr('class').split(/\s+/);

  if (label === undefined) {
    label = 'element';
  }

  classNames.forEach(
    (className) => {
      let message = label + ' has ' + className + ' class';
      assert.equal(elementClasses.includes(className), true, message);
    }
  );
}

function does_not_have_class_names(assert, $element, classNames, label) {
  let elementClasses = $element.attr('class').split(/\s+/);

  if (label === undefined) {
    label = 'element';
  }

  classNames.forEach(
    (className) => {
      let message = label + ' has ' + className + ' class';
      assert.equal(elementClasses.includes(className), false, message);
    }
  );
}

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs(`{{smd-form-control}}`));

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs(`{{#smd-form-control}}template block text{{/smd-form-control}}`));

  assert.equal(this.$().text().trim(), 'template block text');
});

test('creates a label', function(assert) {

  this.render(hbs(`{{smd-form-control label='My Label' name='foo'}}`));

  let $label = this.$().find('.smd-form__label');

  assert.equal($label.text().trim(), 'My Label', 'The label text is rendered');

  assert.equal($label.attr('for'), 'foo', 'The for attribute is rendered');
});

test('creates a tip', function(assert) {

  this.render(hbs(`{{smd-form-control tip='This is my tip'}}`));

  let $tip = this.$().find('.smd-form__tip');

  assert.equal($tip.text().trim(), 'This is my tip', 'The tip text is rendered');
});

test('creates a disabled input', function(assert) {

  this.render(hbs(`{{smd-form-control label='My Text Field' name='foo' value='bar' disabled=true}}`));

  let $control = this.$().find('.smd-form__control'),
    $input = this.$().find('.smd-form__input');

  have_class_names(assert, $control, ['is-disabled'], 'control');
  assert.equal($input.attr('disabled'), 'disabled', 'The disabled attribute is rendered');
});

test('creates an input without a floating label', function(assert) {

  this.render(hbs(`{{smd-form-control label='My Text Field' name='foo' isFloating=false}}`));

  let $control = this.$().find('.smd-form__control');

  does_not_have_class_names(assert, $control, ['mdl-textfield--floating-label'], 'control');
});

test('creates a text input', function(assert) {

  this.render(hbs(`{{smd-form-control label='My Text Field' name='foo' value='bar'}}`));

  let $control = this.$().find('.smd-form__control'),
    $label = this.$().find('.smd-form__label'),
    $input = this.$().find('.smd-form__input');

  // control test
  have_class_names(assert, $control, ['mdl-js-textfield', 'mdl-textfield', 'smd-form__control'], 'control'); // base classes
  have_class_names(assert, $control, ['smd-form__control--text', 'mdl-textfield--floating-label'], 'control'); // binding classes

  // label tests
  assert.equal($label.text().trim(), 'My Text Field', 'The label text is rendered');
  assert.equal($label.attr('for'), 'foo', 'The for attribute is rendered');

  // input tests
  assert.equal($input.attr('name'), 'foo', 'The input name is rendered');
  assert.equal($input.attr('type'), 'text', 'The type attribute is rendered');
  assert.equal($input.val(), 'bar', 'The value attribute is rendered');
  assert.equal($input.attr('disabled'), undefined, 'The disabled attribute is missing');
  have_class_names(assert, $input, ['mdl-textfield__input', 'smd-form__input', 'smd-form__input--text'], 'input');
});

test('creates a select input', function(assert) {

  this.render(hbs(`{{smd-form-control type='select' label='My Select Field' name='foo'}}`));

  let $control = this.$().find('.smd-form__control'),
    $label = this.$().find('.smd-form__label'),
    $input = this.$().find('.smd-form__input'),
    $options = this.$().find('option');

  // control test
  have_class_names(assert, $control, ['mdl-js-textfield', 'mdl-textfield', 'smd-form__control'], 'control'); // base classes
  have_class_names(assert, $control, ['smd-form__control--select', 'mdl-textfield--floating-label'], 'control'); // binding classes

  // label tests
  assert.equal($label.text().trim(), 'My Select Field', 'The label text is rendered');
  assert.equal($label.attr('for'), 'foo', 'The for attribute is rendered');

  // input tests
  assert.equal($input.attr('name'), 'foo', 'The input name is rendered');
  assert.equal($input.attr('disabled'), undefined, 'The disabled attribute is missing');
  have_class_names(assert, $input, ['mdl-textfield__input', 'smd-form__input', 'smd-form__input--select'], 'input');

  // option tests
  assert.equal($options.length, 0, 'The correct number of options are rendered');

});


test('creates a radio input', function(assert) {

  this.render(hbs(`{{smd-form-control type='radio' label='My Radio Field' name='foo'}}`));

  let $control = this.$().find('.smd-form__control'),
    $label = this.$().find('.smd-form__label');
  // control test
  have_class_names(assert, $control, ['mdl-js-textfield', 'mdl-textfield', 'smd-form__control'], 'control'); // base classes
  have_class_names(assert, $control, ['smd-form__control--radio', 'mdl-textfield--floating-label'], 'control'); // binding classes

  // label tests
  assert.equal($label.text().trim(), 'My Radio Field', 'The label text is rendered');
  assert.equal($label.attr('for'), 'foo', 'The for attribute is rendered');

  this.render(hbs(`{{smd-form-control type='radio' label='My Radio Field' name='foo' isInline=true}}`));

  $control = this.$().find('.smd-form__control');

  // control test
  have_class_names(assert, $control, ['mdl-js-textfield', 'mdl-textfield', 'smd-form__control'], 'control'); // base classes
  have_class_names(assert, $control, ['smd-form__control--inline-radio', 'smd-form__control--radio', 'mdl-textfield--floating-label'], 'control'); // binding classes

});
