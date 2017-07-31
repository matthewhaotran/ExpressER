(function() {
	'use strict';

	angular
		.module('app.splash')
		.controller('SplashController', SplashController);

	SplashController.$inject = ['$stateParams','$state'];
	function SplashController($stateParams,$state) {
		var vm = this;
        

		activate();

		////////////////

		function activate() { }
	}
})();
