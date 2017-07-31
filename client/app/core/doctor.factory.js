(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('doctorFactory', doctorFactory);

	doctorFactory.$inject = ['$http'];

	function doctorFactory($http) {
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
				.get('/api/doctor')
				.then(function (response) {
					return response.data;
				});
		}

		function getById(id) {
			return $http
				.get('/api/doctor/' + id)
				.then(function (response) {
					return response.data;
				});
		}

		function create(doctor) {
			return $http
				.post('/api/doctor', doctor)
				.then(function (response) {
					return response.data;
				});
		}

		function update(doctor) {
			return $http
				.put('/api/doctor/' + doctor.id, doctor)
				.then(function (response) {
					return response.data;
				});
		}

		function remove(doctor) {
			return $http
				.delete('/api/doctor/' + doctor.id)
				.then(function (response) {
					return response.data;
				});
		}

	}
})();
