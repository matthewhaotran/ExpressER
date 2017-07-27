(function () {
	'use strict';

	angular
		.module('app.doctorIncomingPatient')
		.controller('DoctorIncomingPatientController', DoctorIncomingPatientController);

	DoctorIncomingPatientController.$inject = ['doctorFactory', 'patientFactory', 'visitFactory', '$state', '$stateParams'];

	function DoctorIncomingPatientController(doctorFactory, patientFactory, visitFactory, $state, $stateParams) {

		var vm = this;
		vm.checkInPatient = checkInPatient;
		vm.checkOutPatient = checkOutPatient;
		vm.myFilter = myFilter;

		activate();

		function activate() {
			visitFactory
				.getAll()
				.then(function (visits) {
					vm.visits = visits;

					patientFactory
						.getById(visits[0].patientId)
						.then(function (patient) {
							vm.patient = patient;
						});
				});

			doctorFactory
				.getById($stateParams.id)
				.then(function (doctor) {
					vm.doctor = doctor;
				});
		}

		function checkInPatient(visit) {
			visit.checkInTime = Date.now();
			visit.doctorId = $stateParams.id;

			visitFactory
				.update(visit)
				.then(function (visit) {
					$state.go('doctorGlance', {
						id: visit.id
					});
				});
		}

		function checkOutPatient(visit) {
			visit.checkOutTime = Date.now();

			visitFactory
				.update(visit)
				.then(function (visit) {
					$state.reload();
				});
		}

		function myFilter(firstName) {
			return firstName === 'Joe';
		}
	}
})();
