(function () {
	'use strict';

	angular
		.module('app.confirmation')
		.controller('ConfirmationController', ConfirmationController);

	ConfirmationController.$inject = ['$stateParams', '$state', 'patientFactory', 'visitFactory', 'twilioFactory'];

	function ConfirmationController($stateParams, $state, patientFactory, visitFactory, twilioFactory) {
		/* jshint validthis:true */
		var vm = this;
		vm.text = text;

		activate();

		function activate() {
			visitFactory
				.getById($stateParams.state2[0])
				.then(function (visit) {
					vm.visit = visit;
				});
		}

		function text(number) {
			twilioFactory
				.sendText(number)
				.then(function () {
					alert('Text Sent');
				});
		}
	}
})();
