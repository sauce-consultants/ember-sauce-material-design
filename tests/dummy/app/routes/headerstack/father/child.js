import Ember from 'ember';
import StackableRoute from 'ember-sauce-material-design/mixins/smd-stackable-header-route';

const {
  Route,
} = Ember;

export default Route.extend(StackableRoute, {
  headerProps: {
    crumb: 'Father',
    title: 'Father Child',
    backIcon: 'keyboard_arrow_left',
    toolbarIconThree: 'more_vert',
    toolbarOptionsThree: [{
      text: 'by surname',
      value: 'lastName',
    }, {
      text: 'by team',
      value: 'team',
    }, {
      text: 'by job title',
      value: 'jobTitle',
    }, {
      text: 'by balance',
      value: 'balance',
    }, ],
    toolbarSelectedOptionThree: 'team',
  },
});
