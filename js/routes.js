angular.module('pokemon', []).config(function ($stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('login', {
            url: '/',
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
    $urlRouterProvider.otherwise("/");
});

