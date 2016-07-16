(function(){
  
  'use strict';
  
  var OrderService = function (){
    this.websocket = undefined;
    this.callbacks = [];
  };

  OrderService.prototype = {

    subscribe: function (onMessageCallback) {
      this.callbacks.push(onMessageCallback);

      if (!this.websocket){
        this.websocket = new WebSocket('ws://localhost:9000/ws');
        this.websocket.onmessage = function (message) {
          for (var i = 0; i < this.callbacks.length; i++){
              this.callbacks[i](message);
          }
        }.bind(this);
      }
    },

    unsubscribe: function (onMessageCallback) {
      var index = this.callbacks.indexOf(onMessageCallback);
      this.callbacks.splice(index, 1);

      if (this.websocket && this.callbacks.length <= 0) {
        this.websocket.close();
        this.websocket = undefined;
      }
    }
  };
  
  angular.module('oms').service('OrderService', OrderService);
})();