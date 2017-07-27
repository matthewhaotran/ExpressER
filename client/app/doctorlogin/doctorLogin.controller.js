(function () {
	'use strict';

	angular
		.module('app.doctorLogin')
		.controller('DoctorLoginController', DoctorLoginController);

    DoctorLoginController.$inject = ['$stateParams', '$state', 'doctorFactory'];

    function DoctorLoginController($stateParams, $state, doctorFactory) {

        var vm = this;
        vm.goToIncPat = goToIncPat;

		activate();

        function activate() {
            doctorFactory
                .getAll()
                .then(function (doctors) {
                    vm.doctors = doctors;
                });
        }

        function goToIncPat(doctor) {
                    $state.go('doctorIncomingPatient', {
                        id: doctor.id
                    });
        }
    }
})();
