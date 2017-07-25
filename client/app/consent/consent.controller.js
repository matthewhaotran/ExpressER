(function () {
	'use strict';

	angular
		.module('app.consent')
		.controller('ConsentController', ConsentController);

	ConsentController.$inject = ['$stateParams', '$state', 'patientFactory'];

	function ConsentController($stateParams, $state, patientFactory) {
		var vm = this;
		vm. addConsent = addConsent;

		activate();

		function activate() {
			console.log('consent controller ' + $stateParams.id);
			patientFactory
				.getById($stateParams.id)
				.then(function (patient) {
					vm.patient = patient;
				});

		}

		function addConsent (patient) {
			patientFactory
				.update(patient)
				.then(function(patient){
					console.log(patient);
					$state.go('confirmation', {id: patient.id});
				});
		}
	}
})();
