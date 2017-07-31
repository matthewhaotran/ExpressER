(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('emergencyContactFactory', emergencyContactFactory);

	emergencyContactFactory.$inject = ['$http'];

	function emergencyContactFactory($http) {
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
				.get('/api/emergencyContact')
				.then(function (response) {
					return response.data;
				});
		}

		function getById(id) {
			return $http
				.get('/api/emergencyContact/' + id)
				.then(function (response) {
					return response.data;
				});
		}

		function create(emergencyContact) {
			return $http
				.post('/api/emergencyContact', emergencyContact)
				.then(function (response) {
					return response.data;
				});
		}

		function update(emergencyContact) {
			return $http
				.put('/api/emergencyContact/' + emergencyContact.id, emergencyContact)
				.then(function (response) {
					return response.data;
				});
		}

		function remove(emergencyContact) {
			return $http
				.delete('/api/emergencyContact/' + emergencyContact.id)
				.then(function (response) {
					return response.data;
				});


		}

	}
})();
