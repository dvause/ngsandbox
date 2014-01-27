angular.module('seed', [
  'common',
  'event-dispatcher',
  'ui.router',
  'ui.bootstrap'
])

  .constant('foo', 'bar')

  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })

  .controller('AppCtrl', function AppCtrl($scope, DispatchingController) {
    var appCtrl = this;
    angular.extend(appCtrl, new DispatchingController($scope));
  })

;