(function(){
    'use strict';

    angular
        .module('app.consent')
        .controller('ConsentController', ConsentController)

    ConsentController.$inject = ['$stateParams', '$state'];

    function ConsentController($stateParams, $state) {
        var vm = this;

        activate();

        function activate() { }
    }
})();
