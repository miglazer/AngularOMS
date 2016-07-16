(function(){
  'use strict';

  angular.module('oms').directive('omsOrderForm', ordersFormFactory);

  function ordersFormFactory() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'app/orders/order-form.directive.html',
      controller: OrderFormController,
      controllerAs: 'ctrl'
    };
  }

  function OrderFormController($scope) {

      this.order = {
        symbol: 'MSFT',
        qty: 25.34
      };

    this.submitOrder = function () {
      $scope.$emit('submitOrderEvent', this.order);
    };
  }

})();
