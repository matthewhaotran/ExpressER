(function () {
    'use strict';

    angular
        .module('app.symptom')
        .controller('SymptomController', SymptomController);

    SymptomController.$inject = ['$stateParams', '$state','symptomFactory'];

    function SymptomController($stateParams, $state, symptomFactory) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            symptomFactory
            .getAll()
            .then(function(symptoms){
                vm.symptoms=symptoms;
                console.log(symptoms);
            });

            // vm.items = [1, 2, 3, 4, 5];
             vm.selected = [];

            vm.toggle = function (symptom, list) {
                var idx = list.indexOf(symptom);
                console.log(idx);
                if (idx > -1) {
                    list.splice(idx, 1);
                } else {
                    list.push(symptom);
                }
            };

            vm.exists = function (symptom, list) {
                return list.indexOf(symptom) > -1;
            };
        }

    }
})();
