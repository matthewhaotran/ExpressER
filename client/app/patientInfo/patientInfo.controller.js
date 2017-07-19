(function () {
    'use strict';

    angular
        .module('app.patientInfo')
        .controller('PatientInfoController', PatientInfoController);

    PatientInfoController.$inject = ['$stateParams', '$state', 'patientFactory'];

    function PatientInfoController($stateParams, $state, patientFactory) {
        var vm = this;


        activate();

        ////////////////

        function activate() {}
    }
})();
