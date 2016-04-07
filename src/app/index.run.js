(function() {
  'use strict';

  angular
    .module('thabeatJs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
