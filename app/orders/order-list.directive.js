(function(){
  'use strict';

  angular.module('oms').directive('omsOrderList', orderListDirective);

  function orderListDirective() {
    return {
      scope: false,
      restrict: 'E',
      templateUrl: 'app/orders/order-list.directive.html'
    };
  }
})();

