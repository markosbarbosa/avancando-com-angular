module.exports = function($http) {

    this.getClients = function () {
        return $http.get('http://localhost:8080');
    };

    this.postClients = function (client) {
        return $http.post('http://localhost:8080', client);
    };

};