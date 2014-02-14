angular.module('ngsandbox.hello', [
  'ui.router'
])



  .config(function ($stateProvider, $httpProvider) {
    $stateProvider
      .state('main.hello', {
        url: '/',
        templateUrl: 'hello/hello.tpl.html',
        controller: 'HelloController as hello'
      })
    ;
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })

  .controller('HelloController', function HelloController(HelloService) {
    var helloCtrl = this;
    helloCtrl.hello = "Hello, World!";
//    helloCtrl.hello = HelloService.sayHello();
  })

  .service('HelloService', function HelloService($http, $q) {
    var helloService = this;

    helloService.sayHello = function() {
      return $http.get('http://localhost:8080/spring-data-rest-service').then(function(result) {
        return result;
      })
    }
  })

;
