(function () {
    'use strict';

    var pokeApi = "http://pokeapi.co/api/v2/";

    var app = angular.module('services');
    angular.module('pokemon').service('PokemonService', PokemonService);
    PokemonService.$inject = ['$http'];

    function PokemonService($http){
        var vm = this;
        vm.getPokemon = getPokemon;
        function getPokemon(valor) {
           return $http.get("http://pokeapi.co/api/v2/pokemon/" +valor);
        }

        vm.getPokemons = getPokemons;
        function getPokemons(valor){
            return !!valor ? $http.get(valor) : $http.get("http://pokeapi.co/api/v2/pokemon/");
        }

        vm.getMove = getMove;
        function getMove(valor){
            return $http.get("http://pokeapi.co/api/v2/move/" +valor);
        }

        vm.getMoves = getMoves;
        function getMoves(valor){
            return !!valor ? $http.get(valor) : $http.get("http://pokeapi.co/api/v2/move/");
        }
    }



})();
