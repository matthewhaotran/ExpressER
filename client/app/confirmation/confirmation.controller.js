(function () {
	'use strict';

	angular
		.module('app.confirmation')
		.controller('ConfirmationController', ConfirmationController);

	ConfirmationController.$inject = ['$stateParams', '$state', 'patientFactory', 'visitFactory', 'symptomFactory', 'twilioFactory'];

	function ConfirmationController($stateParams, $state, patientFactory, visitFactory, symptomFactory, twilioFactory) {
		/* jshint validthis:true */
		var vm = this;
		vm.selected = {};
		vm.selectedSymptoms = {};
		vm.text = text;
		vm.symptomToDelete = [];
		vm.symptomToAdd = [];

		activate();

		function activate() {

			visitFactory
				.getById($stateParams.state2[0])
				.then(function (visit) {
					vm.visit = visit;
					vm.selected = visit.patientSymptoms;
					visit.patientSymptoms.forEach(function(ps) { 
						vm.selectedSymptoms[ps.symptom.id] = true; 
						console.log(vm.selectedSymptoms);
					});
				});

			symptomFactory
				.getAll()
				.then(function (symptoms) {
					vm.symptoms = symptoms;
				});
		}

		vm.toggle = function (symptom, list) {
			var symptomEdit={
				visitId: vm.visit.id,
				symptomId: symptom.id
			}
			var idx = list.indexOf(symptom);
			//console.log(idx);
			if (idx > -1) {
				list.splice(idx, 1);
			} else {
				list.push(symptomEdit);
			}
		};

		vm.exists = function (symptom, list) {
			//console.log("list.indexOf");
			//console.log(list.indexOf(symptom));
			
			return list.map(function(L) { return L.id; }).indexOf(symptom.id) > -1;
		};

		function text(visit) {

			twilioFactory
				.sendText(visit)
				.then(function () {
					// alert('Text Sent');
				});
		}
	}
})();
