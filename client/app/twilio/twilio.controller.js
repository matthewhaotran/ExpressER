(function () {
	'use strict';

	angular
		.module('app.twilio')
		.controller('TwilioController', TwilioController)

	TwilioController.$inject = ['twilioFactory'];

	function TwilioController(twilioFactory) {
		/* jshint validthis:true */
		var vm = this;

		activate();

		function activate() {}
	}
})();
