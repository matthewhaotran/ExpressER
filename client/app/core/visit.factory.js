(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('visitFactory', visitFactory);

    visitFactory.$inject = ['$http'];

    function visitFactory($http) {
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
                .get('/api/visit')
                .then(function (response) {
                    return response.data
                });
        }

        function getById(id) {
            return $http
                .get('/api/visit/' + id)
                .then(function (response) {
                    return response.data;
                })
        }

        function create(visit) {
            return $http
                .post('/api/visit', visit)
                .then(function (response) {
                    return response.data;
                    console.log(response.data);
                })
        }

        function update(visit) {
            return $http
                .put('/api/visit/' + visit.id, visit)
                .then(function (response) {
                    return response.data;
                    console.log(response.data);
                })
        }

        function remove(visit) {
            return $http
                .delete('/api/visit/' + visit.id)
                .then(function (response) {
                    return response.data;
                })


        }

    }
})();
