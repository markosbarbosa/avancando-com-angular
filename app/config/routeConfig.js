module.exports = function($routeProvider) {

    $routeProvider
        .when('/home', {

            templateUrl: 'view/home.html',
            controller: 'MainController',
            resolve: {
                routeInfo: function() {
                    return {
                        'routeName': 'HOME',
                        'navClass': 'navbar-default'
                    };
                }
            }

        })
        .when('/clients', {

            templateUrl: 'view/clients.html',
            controller: 'MainController',
            resolve: {
                routeInfo: function() {
                    return {
                        'routeName': 'Client list',
                        'navClass': 'navbar-inverse'
                    };
                }
            }

        })
        .otherwise({
            redirectTo: '/home'
        });

}