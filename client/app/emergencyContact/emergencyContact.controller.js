(function () {
	'use strict';

	angular
		.module('app.emergencyContact')
		.controller('EmergencyContactController', EmergencyContactController);

	EmergencyContactController.$inject = ['$stateParams', '$state', 'patientFactory', 'emergencyContactFactory'];

	function EmergencyContactController($stateParams, $state, patientFactory, emergencyContactFactory) {
		var vm = this;
		vm.createEmergencyContact = createEmergencyContact;
		vm.goToSymptom = goToSymptom;
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

			vm.contact = {
				patientId: $stateParams.id,
				firstName: '',
				lastName: '',
				mobilePhone: '',
				relationship: ''
			};

		}

		function createEmergencyContact(contact) {
			emergencyContactFactory
				.create(contact)
				.then(function () {
					activate();
				});


		}

		function goToSymptom(contact) {
			$state.go('symptom', {
				id: $stateParams.id
			});
		}


	}
})();
