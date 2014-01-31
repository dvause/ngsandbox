angular.module('ngsandbox', [
  'common',
  'event-dispatcher',
  'ui.router',
  'ui.bootstrap',
  'ngsandbox.hello',
  'templates-app',
  'templates-common'
])

  .constant('foo', 'bar')

  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })

  .controller('AppController', function AppController($scope, DispatchingController) {
    var appCtrl = this;
    angular.extend(appCtrl, new DispatchingController($scope));
  })

;