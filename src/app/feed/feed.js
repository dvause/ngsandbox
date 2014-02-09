angular.module('ngsandbox.feed', [
  'ui.router'
])

  .config(function($stateProvider) {
    $stateProvider
      .state('main.feed', {
        url: '/feed',
        templateUrl: 'feed/feed.tpl.html',
        controller: 'FeedController as feed'
      })
    ;
  })

  .controller('FeedController', function FeedController() {
    var feedController = this;
    feedController.feed = "My Feed";
  })
;
