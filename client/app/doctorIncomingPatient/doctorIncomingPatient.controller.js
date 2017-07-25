(function(){
    'use strict';

    angular
        .module('app.doctorIncomingPatient')
        .controller('DoctorIncomingPatientController', DoctorIncomingPatientController)

    DoctorIncomingPatientController.$inject = ['doctorFactory','patientFactory','visitFactory','$state'];

    function DoctorIncomingPatientController(doctorFactory,patientFactory,visitFactory, $state) {
        
        var vm = this;
        vm.acceptPatient = acceptPatient;

        activate();

        function activate() {
            visitFactory
                .getAll()
                .then(function(visits) {
                    vm.visits = visits;

                    patientFactory
                        .getById(visits[0].patientId)
                        .then(function(patient) {
                            vm.patient = patient;
                        });
                })
                
            
        }

        function acceptPatient(visit) {
            visit.checkOutTime = Date.now();
            
            visitFactory
                .update(visit)
                .then(function(visit) {
                    $state.reload();
                })
        }
    }
})();
