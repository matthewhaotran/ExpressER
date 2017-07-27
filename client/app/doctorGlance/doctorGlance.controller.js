(function () {
	'use strict';

	angular
		.module('app.doctorGlance')
		.controller('DoctorGlanceController', DoctorGlanceController);

	DoctorGlanceController.$inject = ['$stateParams', '$state', 'patientFactory', 'visitFactory'];

	function DoctorGlanceController($stateParams, $state, patientFactory, visitFactory) {
		/* jshint validthis:true */
		var vm = this;
		vm.checkOutPatient = checkOutPatient;
		vm.addNote = addNote;
		vm.goToActivePatientsList = goToActivePatientsList;

		activate();

		function activate() {
			visitFactory
				.getById($stateParams.id)
				.then(function (visit) {
					vm.visit = visit;
				});

		}

		function checkOutPatient(visit) {
			visit.checkOutTime = Date.now();
			console.log(visit);

			visitFactory
				.update(visit)
				.then(function () {
					$state.go('doctorIncomingPatient', {
						id: visit.doctorId
					});
				});
		}

		function addNote (visit) {
			visitFactory
				.update(visit)
				.then(function(visit) {
					vm.visit = visit;
					$state.reload();
				})
		}

		function goToActivePatientsList(visit) {
			$state.go('activePatientsList', {id: visit.doctorId});   
		}

	}
})();
