export default function() {
  /*
   * Login
   */
  this.transition(
    this.fromRoute('home'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
