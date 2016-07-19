(function () {
  'use strict';

  angular.module('oms').controller('OrdersController', OrdersController);

  OrdersController.$inject = ['OrderService', '$scope'];

  function OrdersController(orderService, $scope) {

    $scope.$on('submitOrderEvent', function (event, order) {
      orderService.submit(order).then(
          function (response) { console.log(response.data); },
          function (error) { console.error(error); } );

    });
    
    orderService.subscribe(function (message) {
      console.log(message);
    });
  }

})();
