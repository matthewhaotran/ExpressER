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
			patientFactory
				.getById($stateParams.state[1])
				.then(function (patient) {
					vm.patient = patient;
				});

		}

		function addConsent (patient) {
			patientFactory
				.update(patient)
				.then(function(patient){
					$state.go('confirmation', {state2: [ $stateParams.state[0], patient.id]});
					//
				});
		}
	}
})();
