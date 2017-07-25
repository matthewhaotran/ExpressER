(function(){
    'use strict';

    angular
        .module('app.doctorLogin')
        .controller('DoctorLoginController', DoctorLoginController)

    DoctorLoginController.$inject = ['doctorFactory'];

    function DoctorLoginController(doctorFactory) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
