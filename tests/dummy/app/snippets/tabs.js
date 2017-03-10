// BEGIN-SNIPPET smd-tabs-transitions

// Animate from the tabs index route
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

// Animate from the tabs second route
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

// Animate from the tabs third route
this.transition(
  this.fromRoute('tabs.three'),
  this.toRoute('tabs.four'),
  this.use('toLeft'),
  this.reverse('toRight')
);

// END-SNIPPET
