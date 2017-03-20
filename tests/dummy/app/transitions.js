import {
  tabTransitions
} from 'ember-sauce-material-design/utils/smd-transitions';

export default function() {

  // Top Level Transitions
  tabTransitions(this, [
    'home',
    'layout',
    'header',
    'button',
    'icon',
    'dropdown',
    'tabs',
    'list',
    'animation',
  ]);

  // Tab Transitions
  tabTransitions(this, ['tabs.index', 'tabs.two', 'tabs.three', 'tabs.four']);
  tabTransitions(this, ['list.index', 'list.item', 'list.subheading', 'list.empty', 'list.scrollable', 'list.example']);
  tabTransitions(this, ['header.index', 'header.service']);
  tabTransitions(this, ['dialog.index', 'dialog.modal']);
  tabTransitions(this, ['button.index', 'button.link', 'button.icon', 'button.badge']);

  // Modal Transitions
  this.transition(
    this.fromRoute('dialog.index'),
    this.toRoute('dialog.open'),
    this.use('fade'),
    this.reverse('fade')
  );
}
