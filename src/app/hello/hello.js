angular.module('ngsandbox.hello', [
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

  .controller('HelloController', function HelloController() {
    var helloCtrl = this;
    helloCtrl.hello = "Hello, World!";
  })

;
