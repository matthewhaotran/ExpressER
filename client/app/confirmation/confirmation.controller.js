(function(){
    'use strict';

    angular
        .module('app.confirmation')
        .controller('ConfirmationController', ConfirmationController)

    ConfirmationController.$inject = ['$stateParams', '$state'];

    function ConfirmationController($stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
