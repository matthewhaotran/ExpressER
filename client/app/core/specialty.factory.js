(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('specialtyFactory', specialtyFactory);

	specialtyFactory.$inject = ['$http'];

	function specialtyFactory($http) {
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
				.get('/api/specialty')
				.then(function (response) {
					return response.data;
				});
		}

		function getById(id) {
			return $http
				.get('/api/specialty/' + id)
				.then(function (response) {
					return response.data;
				});
		}

		function create(specialty) {
			return $http
				.post('/api/specialty', specialty)
				.then(function (response) {
					return response.data;
				});
		}

		function update(specialty) {
			return $http
				.put('/api/specialty/' + specialty.id, specialty)
				.then(function (response) {
					return response.data;
				});
		}

		function remove(specialty) {
			return $http
				.delete('/api/specialty/' + specialty.id)
				.then(function (response) {
					return response.data;
				});


		}

	}
})();
