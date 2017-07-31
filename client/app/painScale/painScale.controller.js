(function () {
	'use strict';

	angular
		.module('app.painScale')
		.controller('PainScaleController', PainScaleController);

	PainScaleController.$inject = ['$stateParams', '$state', 'visitFactory'];

	function PainScaleController($stateParams, $state, visitFactory) {
		/* jshint validthis:true */
		var vm = this;
        
		vm.addPainScale = addPainScale;

		activate();

		function activate() {
			visitFactory
				.getById($stateParams.id)
				.then(function(visit) {
					vm.visit = visit;
				});
		}

		function addPainScale (visit) {
			visitFactory
				.update(visit)
				.then(function(visit) {
					$state.go('consent', {state: [visit.id, visit.patientId]});    
				});
		}
	}
})();
