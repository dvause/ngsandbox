angular.module('seed.hello', [
  'ui.router'
])

  .config(function ($stateProvider) {
    $stateProvider
      .state('hello', {
        url: '/',
        templateUrl: 'hello/hello.tpl.html',
        controller: 'HelloController as hello'
      })
    ;
  })

  .controller('HelloController', function HelloController($log) {
    var helloCtrl = this;
    $log.debug(helloCtrl)
    helloCtrl.hello = "Hello, World!";
  })

;
