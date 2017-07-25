(function(){
    'use strict';

    angular
        .module('app.doctorIncomingPatient')
        .controller('DoctorIncomingPatientController', DoctorIncomingPatientController)

    DoctorIncomingPatientController.$inject = ['doctorFactory'];

    function DoctorIncomingPatientController(doctorFactory) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
