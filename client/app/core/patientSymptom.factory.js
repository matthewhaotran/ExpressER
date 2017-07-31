(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('patientSymptomFactory', patientSymptomFactory);

	patientSymptomFactory.$inject = ['$http'];

	function patientSymptomFactory($http) {
		var service = {
			getAll: getAll,
			getById: getById,
			getByVisit: getByVisit,
			create: create,
			update: update,
			remove: remove
		};

		return service;

		function getAll() {
			return $http
				.get('/api/patientSymptom')
				.then(function (response) {
					return response.data;
				});
		}

		function getById(id) {
			return $http
				.get('/api/patientSymptom/' + id)
				.then(function (response) {
					return response.data;
				});
		}

		function getByVisit(id) {
			return $http
				.get('/api/patientSymptom/' + id + '/patientSymptom')
				.then(function (response) {
					return response.data;
				});
		}

		function create(patientSymptom) {
			return $http
				.post('/api/patientSymptom', patientSymptom)
				.then(function (response) {
					return response.data;
					console.log(response.data);
				});
		}

		function update(patientSymptom) {
			return $http
				.put('/api/patientSymptom/' + patientSymptom.id, patientSymptom)
				.then(function (response) {
					return response.data;
				});
		}

		function remove(patientSymptom) {
			return $http
				.delete('/api/patientSymptom/' + patientSymptom.id)
				.then(function (response) {
					return response.data;
				});


		}

	}
})();
