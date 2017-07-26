(function () {
	'use strict';

	angular
		.module('app.confirmation')
		.controller('ConfirmationController', ConfirmationController);

	ConfirmationController.$inject = ['$stateParams', '$state', 'patientFactory', 'visitFactory', 'patientSymptomFactory'];

	function ConfirmationController($stateParams, $state, patientFactory, visitFactory) {
		/* jshint validthis:true */
		var vm = this;

		activate();

		function activate() {
			visitFactory
				.getById($stateParams.state2[0])
				.then(function(visit){
					vm.visit = visit;
				});
		}
	}
})();
