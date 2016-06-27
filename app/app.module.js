(function () {
  'use strict';
  
  angular.module('oms', ['ngRoute'])
      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'app/login/login.html',
            controller: 'LoginController'
          })
      }
  ])

})();
