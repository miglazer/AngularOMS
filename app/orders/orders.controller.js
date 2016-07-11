(function () {
  'use strict';

  angular.module('oms').controller('OrdersController', OrdersController);

  function OrdersController($scope) {

    $scope.$on('submitOrderEvent', function(event, order){
      console.log("Order", order);
    });

  }

})();
