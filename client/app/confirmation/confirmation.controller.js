(function () {
	'use strict';

	angular
		.module('app.confirmation')
		.controller('ConfirmationController', ConfirmationController);

	ConfirmationController.$inject = ['$stateParams', '$state', 'patientFactory', 'visitFactory'];

	function ConfirmationController($stateParams, $state, patientFactory, visitFactory) {
		/* jshint validthis:true */
		var vm = this;

		activate();

		function activate() {
			patientFactory
				.getById($stateParams.id)
				.then(function (patient) {
					vm.patient = patient;
				});

			patientFactory
				.getByPatient($stateParams.id)
				.then(function (emergencyContacts) {
					vm.emergencyContacts = emergencyContacts;
				});

			visitFactory
				.getByPatient($stateParams.id)
				.then(function (visit) {
					vm.visit = visit;
				});
        }
    }
})();
