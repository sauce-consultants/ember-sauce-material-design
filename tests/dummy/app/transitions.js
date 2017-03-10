export default function() {
  /*
   * Login
   */
  this.transition(
    this.fromRoute('home'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

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
}
