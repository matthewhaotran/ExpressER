(function () {
    'use strict';

    angular.module('app', [
        // Angular modules

        // Custom modules
        'app.core',
        'app.consent',
        'app.patientInfo',
        'app.confirmation',
        'app.emergencyContact',
        'app.painScale',
        'app.splash',
        'app.success',
        'app.failure',
        // 'app.successFailure',
         'app.symptom',

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
        
         $stateProvider.state('emergencyContact', {
            url: '/emergencyContact',
            controller: 'EmergencyContactController as EmergencyContactCtrl',
            templateUrl: 'app/emergencyContact/emergencyContact.template.html'
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

        $stateProvider.state('symptom', {
            url: '/symptom',
            controller: 'SymptomController as SymptomCtrl',
            templateUrl: 'app/symptom/symptom.template.html'
        });

        $stateProvider.state('consent', {
            url: '/consent',
            controller: 'ConsentController as ConsentCtrl',
            templateUrl: 'app/consent/consent.template.html'
        });
      
        $stateProvider.state('patientInfo', {
            url: '/patientInfo',
            controller: 'PatientInfoController as PatientInfoCtrl',
            templateUrl: 'app/patientInfo/patientInfo.template.html'
        });

        $stateProvider.state('confirmation', {
            url: '/confirmation',
            controller: 'ConfirmationController as confirmCtrl',
            templateUrl: 'app/confirmation/confirmation.template.html'
        });
      
        $stateProvider.state('painScale', {
            url: '/painScale',
            controller: 'PainScaleController as PainScaleCtrl',
            templateUrl: 'app/painScale/painScale.template.html'
        });
    }
})();
