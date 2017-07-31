(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('symptomFactory', symptomFactory);

	symptomFactory.$inject = ['$http'];

	function symptomFactory($http) {
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
				.get('/api/symptom')
				.then(function (response) {
					return response.data;
				});
		}

		function getById(id) {
			return $http
				.get('/api/symptom/' + id)
				.then(function (response) {
					return response.data;
				});
		}

		function create(symptom) {
			return $http
				.post('/api/symptom', symptom)
				.then(function (response) {
					return response.data;
					console.log(response.data);
				});
		}

		function update(symptom) {
			return $http
				.put('/api/symptom/' + symptom.id, symptom)
				.then(function (response) {
					return response.data;
				});
		}

		function remove(symptom) {
			return $http
				.delete('/api/symptom/' + symptom.id)
				.then(function (response) {
					return response.data;
				});


		}

	}
})();
