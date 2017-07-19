(function () {
    'use strict';

    angular
        .module('app.painScale')
        .controller('PainScaleController', PainScaleController)

    PainScaleController.$inject = ['$stateParams', '$state'];

    function PainScaleController($stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() {}
    }
})();
