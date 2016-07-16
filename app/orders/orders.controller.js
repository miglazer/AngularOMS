(function () {
  'use strict';

  angular.module('oms').controller('OrdersController', OrdersController);

  OrdersController.$inject = ['OrderService', '$scope', '$http'];

  function OrdersController(orderService, $scope, $http) {

    $scope.$on('submitOrderEvent', function(event, order){
      console.log("Order", order);
      var promise = $http.post('http://localhost:9000/orders', order);
      promise.then(function(response){
        var order = response.data;
        console.log(order);
      },function (error) {
        console.log(error);
      });

    });
    
    orderService.subscribe(function (message) {
      console.log(message);
    });

  }


})();
