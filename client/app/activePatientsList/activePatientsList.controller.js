(function () {
	'use strict';

	angular
		.module('app.activePatientsList')
		.controller('ActivePatientsListController', ActivePatientsListController);

	ActivePatientsListController.$inject = ['$stateParams', '$state', 'patientFactory', 'visitFactory', 'patientSymptomFactory'];

	function ActivePatientsListController($stateParams, $state, patientFactory, visitFactory) {
		/* jshint validthis:true */
		var vm = this;
		vm.openGlanceView = openGlanceView;

		activate();

		function activate() {
			visitFactory
				.getAll()
				.then(function (visits) {
					vm.visits = visits;
				});

		}

		function openGlanceView(visit) {
			$state.go('doctorGlance', {
				id: visit.id
			});
		}
	}
})();
