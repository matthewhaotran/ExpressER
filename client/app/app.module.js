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
		'app.doctorLogin',
		'app.doctorIncomingPatient',
		'app.doctorGlance',
		'app.activePatientsList',
		'app.twilio',

		// 3rd Party Modules
		'ui.router'
	]).config(appConfig);

	appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

	function appConfig($urlRouterProvider, $stateProvider) {
		// define default page-where should the first page of the app begin
		$urlRouterProvider.otherwise('/splash');

		// define a state : $stateProvider.state(<name>, <options>)
		$stateProvider.state('splash', {
			url: '/splash',
			controller: 'SplashController as splashCtrl',
			templateUrl: 'app/splash/splash.template.html'
		});
        
		$stateProvider.state('emergencyContact', {
			url: '/emergencyContact?id',
			controller: 'EmergencyContactController as emergencyContactCtrl',
			templateUrl: 'app/emergencyContact/emergencyContact.template.html'
		});

		$stateProvider.state('success', {
			url: '/success',
			controller: 'SuccessController as successCtrl',
			templateUrl: 'app/success/success.template.html'
		});

		$stateProvider.state('symptom', {
			url: '/symptom?id',
			controller: 'SymptomController as symptomCtrl',
			templateUrl: 'app/symptom/symptom.template.html'
		});

		$stateProvider.state('consent', {
			url: '/consent?state',
			controller: 'ConsentController as consentCtrl',
			templateUrl: 'app/consent/consent.template.html'
		});

      
		$stateProvider.state('patient', {

			url: '/patient',
			controller: 'PatientInfoController as patientInfoCtrl',
			templateUrl: 'app/patientInfo/patientInfo.template.html'
		});

		$stateProvider.state('confirmation', {
			url: '/confirmation?state2',
			controller: 'ConfirmationController as confirmCtrl',
			templateUrl: 'app/confirmation/confirmation.template.html'
		});

      
		$stateProvider.state('painScale', {

			url: '/painScale?id',
			controller: 'PainScaleController as painScaleCtrl',
			templateUrl: 'app/painScale/painScale.template.html'
		});

		$stateProvider.state('doctorLogin', {

			url: '/doctorLogin?id',
			controller: 'DoctorLoginController as doctorLoginCtrl',
			templateUrl: 'app/doctorLogin/doctorLogin.template.html'
		});

		$stateProvider.state('doctorIncomingPatient', {

			url: '/doctorIncomingPatient?id',
			controller: 'DoctorIncomingPatientController as doctorIncomingPatientCtrl',
			templateUrl: 'app/doctorIncomingPatient/doctorIncomingPatient.template.html'
		});

		$stateProvider.state('doctorGlance', {

			url: '/doctorGlance?id',
			controller: 'DoctorGlanceController as doctorGlanceCtrl',
			templateUrl: 'app/doctorGlance/doctorGlance.template.html'
		});

		$stateProvider.state('activePatientsList', {

			url: '/activePatientsList?id',
			controller: 'ActivePatientsListController as activePatientsListCtrl',
			templateUrl: 'app/activePatientsList/activePatientsList.template.html'
		});
	}
})();
