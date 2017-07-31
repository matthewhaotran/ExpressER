(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('patientFactory', patientFactory);

	patientFactory.$inject = ['$http'];

	function patientFactory($http) {
		var service = {
			getAll: getAll,
			getById: getById,
			create: create,
			update: update,
			remove: remove,
			getByPatient: getByPatient
		};

		return service;

		function getAll() {
			return $http
				.get('/api/patient')
				.then(function (response) {
					return response.data;
				});
		}

		function getById(id) {
			return $http
				.get('/api/patient/' + id)
				.then(function (response) {
					return response.data;
				});
		}

		function getByPatient(id) {
			return $http
				.get('/api/patient/' + id + '/emergencyContact')
				.then(function (response) {
					return response.data;
				});
		}

		function create(patient) {
			return $http
				.post('/api/patient', patient)
				.then(function (response) {
					return response.data;
					console.log(response.data);
				});
		}

		function update(patient) {
			return $http
				.put('/api/patient/' + patient.id, patient)
				.then(function (response) {
					return response.data;
				});
		}

		function remove(patient) {
			return $http
				.delete('/api/patient/' + patient.id)
				.then(function (response) {
					return response.data;
				});


		}

	}
})();
