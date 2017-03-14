// BEGIN-SNIPPET smd-transitions-tab-import
import {
  tabTransitions
} from 'ember-sauce-material-design/utils/smd-transitions';
// END-SNIPPET

export default function() {

  // BEGIN-SNIPPET smd-transitions-tab
  tabTransitions(
    this, [
      'tabs.index',
      'tabs.two',
      'tabs.three',
      'tabs.four'
    ]
  );
  // END-SNIPPET

  // BEGIN-SNIPPET smd-transitions-tab-manual
  this.transition(
    this.fromRoute('tabs.index'),
    this.toRoute('tabs.two'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('tabs.index'),
    this.toRoute('tabs.three'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('tabs.index'),
    this.toRoute('tabs.four'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('tabs.two'),
    this.toRoute('tabs.three'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('tabs.two'),
    this.toRoute('tabs.four'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('tabs.three'),
    this.toRoute('tabs.four'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  // END-SNIPPET
}
