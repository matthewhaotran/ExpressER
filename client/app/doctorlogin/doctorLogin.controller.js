(function () {
    'use strict';

    angular
        .module('app.doctorLogin')
        .controller('DoctorLoginController', DoctorLoginController);

    DoctorLoginController.$inject = ['doctorFactory'];

    function DoctorLoginController(doctorFactory) {

        var vm = this;

        activate();

        function activate() {
            doctorFactory
                .getAll()
                .then(function (doctors) {
                    vm.doctors = doctors;
                });
        }
    }
})();
