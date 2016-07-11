(function () {
  'use strict';
  
  angular.module('oms', ['ngRoute'])
      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'app/login/login.controller.html',
            controller: 'LoginController'
          })
          .when('/orders',{
            templateUrl: 'app/orders/orders.controller.html',
            controller: 'OrdersController'
          });
      }
  ]);

})();
