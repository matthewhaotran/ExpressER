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
        'app.success',
        // 'app.symptom',
        'app.failure',
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

        $stateProvider.state('success', {
            url: '/success',
            controller: 'SuccessController as SuccessCtrl',
            templateUrl: 'app/success/success.template.html'
        });

        $stateProvider.state('failure', {
            url: '/failure',
            controller: 'FailureController as FailureCtrl',
            templateUrl: 'app/failure/failure.template.html'
        });
    }

})();
