(function(){
  'use strict';

  angular.module('oms').service('OrderService', OrderService);

  function OrderService($http) {
    this.stomp = undefined;
    this.callbacks = [];
    this.$http = $http;
  }

  OrderService.prototype = {

    subscribe: function (onMessageCallback) {
      this.callbacks.push(onMessageCallback);

      if (!this.stomp){
        this.stomp = Stomp.client('ws://localhost:9000/ws');
        this.stomp.connect({}, function () {
          this.stomp.subscribe("/topic/orderstatus", function (message) {
            for (var i = 0; i < this.callbacks.length; i++){
              this.callbacks[i](message);
            }
          }.bind(this));
        }.bind(this));
      }
    },

    unsubscribe: function (onMessageCallback) {
      var index = this.callbacks.indexOf(onMessageCallback);
      this.callbacks.splice(index, 1);

      if (this.stomp && this.callbacks.length <= 0) {
        this.stomp.disconnect(function () {
          this.stomp = undefined;
        }.bind(this));
      }
    },

    submit: function (order) {
      return this.$http.post('http://localhost:9000/orders', order);
    }
  };

})();