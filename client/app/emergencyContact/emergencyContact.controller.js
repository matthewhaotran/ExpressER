(function () {
	'use strict';

	angular
		.module('app.emergencyContact')
		.controller('EmergencyContactController', EmergencyContactController);

	EmergencyContactController.$inject = ['$stateParams', '$state', 'patientFactory', 'emergencyContactFactory'];

	function EmergencyContactController($stateParams, $state, patientFactory, emergencyContactFactory) {
		var vm = this;
		vm.createEmergencyContact = createEmergencyContact;
		vm.contact = {
			patientId: $stateParams.id
		};



		activate();

		////////////////

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

		}

		function createEmergencyContact(contact) {
			emergencyContactFactory
				.create(contact)
				.then(function () {
					$state.go('symptom', {
						id: contact.patientId
					});
				});

		}


	}
})();
