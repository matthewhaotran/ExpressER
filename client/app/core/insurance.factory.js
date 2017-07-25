(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('insuranceFactory', insuranceFactory);

	insuranceFactory.$inject = ['$http'];

	function insuranceFactory($http) {
		var service = {
			getAll: getAll,
			getById: getById,
			create: create,
			update: update,
			remove: remove
		};

		return service;

		function getAll() {
			return $http
				.get('/api/insurance')
				.then(function (response) {
					return response.data;
				});
		}

		function getById(id) {
			return $http
				.get('/api/insurance/' + id)
				.then(function (response) {
					return response.data;
				});
		}

		function create(insurance) {
			return $http
				.post('/api/insurance', insurance)
				.then(function (response) {
					return response.data;
					console.log(response.data);
				});
		}

		function update(insurance) {
			return $http
				.put('/api/insurance/' + insurance.id, insurance)
				.then(function (response) {
					return response.data;
				});
		}

		function remove(insurance) {
			return $http
				.delete('/api/insurance/' + insurance.id)
				.then(function (response) {
					return response.data;
				});


		}

	}
})();
