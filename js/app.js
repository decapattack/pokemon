(function(){
    angular.module('services', []);
    angular.module('controllers',[]);
    angular.module('pokemon',['controllers','services','ui.router']);

    angular.module('pokemon', ['ui.router']).config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('cadastrar', {
            url: '/cadastrar',
            templateUrl: 'templates/cadastrar.html',
            controller: 'CadastrarController'
        })
        .state('time', {
            url: '/time',
            templateUrl: 'templates/time-pokemon.html',
            controller: 'TimeController'
        });

        $urlRouterProvider.otherwise('login');
    }]);
    angular.module('pokemon').filter('capitalize', function() {
        return function(text) {
            return (!!text) ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() : '';
        }
    });
/*
    angular.module('pokemon', []).config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            })
            .state('cadastrar', {
                url: '/cadastrar',
                templateUrl: 'templates/cadastrar.html',
                controller: 'CadastrarController'
            })
            .state('time', {
                url: '/time',
                templateUrl: 'templates/time-pokemon.html',
                controller: 'TimeController'
            });
        $urlRouterProvider.otherwise("/login");
    });
*/


})();
