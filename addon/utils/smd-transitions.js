export function tabTransitions(scope, routeNames) {
  let inTransition = 'toRight',
    outTransition = 'toLeft';

  routeNames.forEach(function(routeName, index, routeNames) {
    let currentRouteName = routeName;
    for (var i = index + 1; i < routeNames.length; i++) {
      let targetRoute = routeNames[i];
      scope.transition(
        scope.fromRoute(currentRouteName),
        scope.toRoute(targetRoute),
        scope.use(outTransition),
        scope.reverse(inTransition)
      );
    }
  });
}

export default {
  tabTransitions: tabTransitions,
};
