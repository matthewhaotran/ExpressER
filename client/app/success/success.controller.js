(function(){
	'use strict';

	angular
		.module('app.success')
		.controller('SuccessController', SuccessController);


	SuccessController.$inject = ['$stateParams','$state'];

	function SuccessController($stateParams, $state) {
		/* jshint validthis:true */
		var vm = this;


		activate();

		function activate() {
			setTimeout(function(){ $state.go('splash'); }, 10000);
		}
	}

})();
