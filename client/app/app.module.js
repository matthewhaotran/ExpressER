(function () {
    'use strict';

    angular.module('app', [
        // Angular modules

        // Custom modules
        'app.core',
        // 'app.patientInfo',
        // 'app.confirmation',
        // 'app.consent',
        // 'app.emergencyContact',
        // 'app.painScale',
        'app.splash',
        // 'app.successFailure',
        // 'app.symptom',

        // 3rd Party Modules
        "ui.router"
    ]).config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function appConfig($urlRouterProvider, $stateProvider) {
        //define default page-where should the first page of the app begin
        $urlRouterProvider.otherwise('/splash');

        // define a state : $stateProvider.state(<name>, <options>)
        $stateProvider.state('splash', {
            url: '/splash',
            controller: 'SplashController as SplashCtrl',
            templateUrl: 'app/splash/splash.template.html'
        });
    }

})();
