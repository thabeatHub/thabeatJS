(function() {
  'use strict';

  angular
    .module('thabeatJS')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.test = "This Text!"
  }
})();
