(function () {
    'use strict';

    angular
        .module('app.painScale')
        .controller('PainScaleController', PainScaleController)

    PainScaleController.$inject = ['$stateParams', '$state', 'visitFactory'];

    function PainScaleController($stateParams, $state, visitFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.addPainScale = addPainScale;

        activate();

        function activate() {}

        function addPainScale () {
            
        }
    }
})();
