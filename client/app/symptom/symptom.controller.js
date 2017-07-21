(function() {
    'use strict';

    angular
        .module('app.symptom')
        .controller('SymptomController', SymptomController);

    SymptomController.$inject = ['$stateParams','$state'];
    function SymptomController($stateParams,$state) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
        
    }
})();
