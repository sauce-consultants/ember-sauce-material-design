// BEGIN-SNIPPET smd-button-action
actions: {
  clickButton: function(button) {
    window.alert('button text = ' + button.get('text') + ', value = ' + button.get('value'));
  },
}
// END-SNIPPET
