(function () {
    'use strict';

    angular
        .module('app.symptom')
        .controller('SymptomController', SymptomController);

    SymptomController.$inject = ['$stateParams', '$state'];

    function SymptomController($stateParams, $state) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            vm.items = [1, 2, 3, 4, 5];
            vm.selected = [];

            vm.toggle = function (item, list) {
                var idx = list.indexOf(item);
                console.log(idx);
                if (idx > -1) {
                    list.splice(idx, 1);
                } else {
                    list.push(item);
                }
            };

            vm.exists = function (item, list) {
                return list.indexOf(item) > -1;
            };
        }

    }
})();
