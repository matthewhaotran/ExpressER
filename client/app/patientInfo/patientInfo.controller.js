(function () {
    'use strict';

    angular
        .module('app.patientInfo')
        .controller('PatientInfoController', PatientInfoController);

    PatientInfoController.$inject = ['$stateParams', '$state', 'patientFactory'];

    function PatientInfoController($stateParams, $state, patientFactory) {
        var vm = this;

        vm.save = save;

        //activate();

        

        //function activate() {}

        function save(patient){
            console.log(patient);
            if(patient.id){
                patientFactory
                .update(patient)
                .then(function(){
                    alert('patient Updated!');
                   // $state.go('patient-grid');
                });
            } else {
                patientFactory
                .create(patient)
                .then(function(){
                    alert('patient Created!');
                    //$state.go('patient-grid');
                });
             }
            
        }

    }
})();


