import {
  tabTransitions
} from 'ember-sauce-material-design/utils/smd-transitions';

export default function() {

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

  tabTransitions(this, ['tabs.index', 'tabs.two', 'tabs.three', 'tabs.four']);
  tabTransitions(this, ['list.index', 'list.item', 'list.subheading', 'list.empty', 'list.scrollable', 'list.example']);

}
