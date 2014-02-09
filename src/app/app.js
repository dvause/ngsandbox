angular.module('ngsandbox', [
  'common',
  'event-dispatcher',
  'ui.router',
  'ui.bootstrap',
  'ngsandbox.hello',
  'ngsandbox.feed',
  'templates-app',
  'templates-common'
])

  .constant('foo', 'bar')

  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'layout/layout.tpl.html',
        controller: 'AppController'
      })
    ;
  })

  .controller('AppController', function AppController($scope, DispatchingController) {
    var appCtrl = this;
    angular.extend(appCtrl, new DispatchingController($scope));
  })

  .directive('header', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'layout/header.tpl.html'
    }
  })

  .directive('footer', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'layout/footer.tpl.html'
    }
  })

;