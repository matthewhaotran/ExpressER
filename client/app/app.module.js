(function () {
    'use strict';

    angular.module('app', [
        // Angular modules
        'ngMaterial',
        'ngMdIcons',
        // Custom modules
        'app.core',
        'app.consent',
        'app.patientInfo',
        'app.confirmation',
        'app.emergencyContact',
        'app.painScale',
        'app.splash',
        'app.success',
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
            controller: 'SplashController as splashCtrl',
            templateUrl: 'app/splash/splash.template.html'
        });


          $stateProvider.state('wizard', {
            url: '/wizard',
            controller: 'WizardController as wizardCtrl',
            templateUrl: '/app/wizard/wizard.html'
        });
        
         $stateProvider.state('wizard.emergencyContact', {
            url: '/emergencyContact?id',
            controller: 'EmergencyContactController as emergencyContactCtrl',
            templateUrl: 'app/emergencyContact/emergencyContact.template.html'
        });

        $stateProvider.state('wizard.success', {
            url: '/success',
            controller: 'SuccessController as successCtrl',
            templateUrl: 'app/success/success.template.html'
        });

        $stateProvider.state('wizard.symptom', {
            url: '/symptom?id',
            controller: 'SymptomController as symptomCtrl',
            templateUrl: 'app/symptom/symptom.template.html'
        });

        $stateProvider.state('wizard.consent', {
            url: '/consent?id',
            controller: 'ConsentController as consentCtrl',
            templateUrl: 'app/consent/consent.template.html'
        });

      
        $stateProvider.state('wizard.patient', {

            url: '/patient',
            controller: 'PatientInfoController as patientInfoCtrl',
            templateUrl: 'app/patientInfo/patientInfo.template.html'
        });

        $stateProvider.state('wizard.confirmation', {
            url: '/confirmation?id',
            controller: 'ConfirmationController as confirmCtrl',
            templateUrl: 'app/confirmation/confirmation.template.html'
        });

      
        $stateProvider.state('wizard.painScale', {

            url: '/painScale?id',
            controller: 'PainScaleController as painScaleCtrl',
            templateUrl: 'app/painScale/painScale.template.html'
        });
    }
})();
