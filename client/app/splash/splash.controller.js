(function () {
	'use strict';

	angular
		.module('app.splash')
		.controller('SplashController', SplashController);

	SplashController.$inject = ['$stateParams', '$state'];

	function SplashController($stateParams, $state) {
		var vm = this;


		activate();

		////////////////

		function activate() {
			// Get the modal
			var modal = document.getElementById('myModal');

			// Get the button that opens the modal
			var btn = document.getElementById("myBtn");

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on the button, open the modal 
			btn.onclick = function () {
				modal.style.display = "block";
			}

			// When the user clicks on <span> (x), close the modal
			span.onclick = function () {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
			$("document").ready(function () {
				setTimeout(function () {
					$("ul.galleria li:first-child img").trigger('click');
				}, 10);
			});
			$("document").ready(function() {
				setTimeout(function() {
					$("#myBtn").trigger('click');
				},10);
			});
		}
	}
})();
