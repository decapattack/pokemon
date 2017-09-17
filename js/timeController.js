(function(){
    angular.module('pokemon').controller('TimeController', function($scope, PokemonService,$location){
        var vm = this;

        $scope.team = {};
        $scope.team.listPokemons = [];
        $scope.pokemonMoves = {};
        $scope.teams = [];
        var editar = false;
        $scope.listaMoves = [];
        var usuario = {};

        $scope.$on('$viewContentLoaded', function() {
            if(!!window.sessionStorage.getItem("login")){
                usuario = UsuariosSite.getUser(window.sessionStorage.getItem("login"));
                if(!!usuario.teams && usuario.teams.length > 0){
                    $scope.teams = usuario.teams;
                }
            }
        });

        vm.selecionaPokemon = function(nome){
            if (timeLotado()){
                alert("Seu time já está lotado.");
                return false;
            }
            if(mesmoPokemon(nome)){
                alert("Esse Pokemon já está no seu time.");
                return false;
            }
            if(confirm ("Deseja adicionar {{ "+ nome +" }} ao seu time?")){
                PokemonService.getPokemon(nome).then(function(response){
                    response.data.moves = [];
                    $scope.team.listPokemons.push(response.data);
                });
            }
        };

        vm.excluirPokemon = function(id){
            if(confirm("Deseja excluir este Pokémon?")){
                for(var i = 0; i < $scope.team.listPokemons.length; i++){
                    if($scope.team.listPokemons[i].id === id){
                        $scope.team.listPokemons.splice([i],1);
                        break;
                    }
                }
            }
        };

        vm.buscarPokemon = function(valor){
            if($scope.nomePokemon){
                $scope.listaPokemons = [];
                PokemonService.getPokemon($scope.nomePokemon).
                then(function(res){
                    $scope.listaPokemons = [res.data];
                });
            }else{
                $scope.listaPokemons = [];
                $scope.pokeData = {};
                PokemonService.getPokemons(valor).
                then(function(res){
                    $scope.pokeData = res.data;
                    $scope.listaPokemons = $scope.pokeData.results;

                });
            }
        };

        vm.buscarMoves = function(valor){
            if($scope.nomeMove){
                PokemonService.getMove($scope.nomeMove).
                then(function(res){

                    $scope.listaMoves = [res.data];
                });
            }else{
                $scope.moveData = {};
                PokemonService.getMoves(valor).
                then(function(res){
                    $scope.moveData = res.data;
                    $scope.listaMoves = res.data.results;
                });
            }
        };

        vm.selecionarMove = function(pokemon){
            $scope.pokemonMoves = pokemon;
        };

        vm.adicionaNovoMove = function(move){
            if(mesmoMove(move.name)){
                alert("Você já adicionou esta habilidade.");
                return false;
            }
            if(movesLotado()){
                alert("Não é possível adicionar mais habilidades para este Pokemon.");
                return false;
            }
            $scope.pokemonMoves.moves.push(move);
        };

        vm.excluirMove = function(move){
            if(confirm("Deseja excluir esta habilidade?")){
                for(var i = 0; i < $scope.pokemonMoves.moves.length; i++){
                    if($scope.pokemonMoves.moves[i].name == move.name){
                        $scope.pokemonMoves.moves.splice([i],1);
                        break;
                    }
                }
            }
        };

        vm.editarTime = function(time){
            $scope.team.listPokemons = time.listPokemons;
            editar = true;
        };

        vm.excluirTime = function(time){
            if(confirm("Deseja excluir este time?")){
                for(var i = 0; i < $scope.teams.length; i++){
                    if($scope.teams[i].name == time.name){
                        $scope.teams.splice([i],1);
                        break;
                    }
                }
            }
        };

        var mesmoMove = function(nome){
            var retorno = false;
            for (var i = 0; i < $scope.pokemonMoves.moves.length; i++){
                if ($scope.pokemonMoves.moves[i].name === nome){
                    retorno = true;
                    break;
                }
            }
            return retorno;
        };

        var mesmoPokemon = function(nome){
            var retorno = false;
            for (var i = 0; i < $scope.team.listPokemons.length; i++){
                if ($scope.team.listPokemons[i].name == nome){
                    retorno = true;
                    break;
                }
            }
            return retorno;
        };

        var timeLotado = function(){
            return $scope.team.listPokemons.length >= 6 ? true : false;
        };

        var movesLotado = function(){
            return $scope.pokemonMoves.moves.length >= 4 ? true : false;
        };

        vm.salvarHabilidades = function(){
            for (var i = 0; i < $scope.team.listPokemons.length; i++){
                if($scope.team.listPokemons[i].id === $scope.pokemonMoves.id){
                    $scope.team.listPokemons[i].moves = $scope.pokemonMoves.moves;
                    break;
                }
            }

            $scope.listaMoves = [];
            $scope.pokemonMoves = {};
        };

        vm.salvarTime = function(){
            if($scope.nomeTime == undefined){
                alert("Seu time precisa de um nome.");
                return false;
            }
            if($scope.nomeTime != undefined &&  $scope.nomeTime.trim() === ""){
                alert("Seu time precisa de um nome.");
                return false;
            }
            if(timeNomeRepetido($scope.nomeTime) && !editar){
                alert("Você já tem um time com este nome.");
                return false;
            }
            if($scope.team.listPokemons.length > 0){
                $scope.team.name = $scope.nomeTime;
                $scope.teams.push($scope.team);
                usuario.teams = $scope.teams;
                $scope.team = {};
                $scope.team.listPokemons = [];
                $scope.listaPokemons = [];
                editar = false;
            }else{
                alert("Você precisa de, pelo menos, um Pokemon em seu time.");
                return false;
            }
        };

        var timeNomeRepetido = function(nomeTime){
            var retorno = false;
            for(var i = 0; i < $scope.teams.length; i++){
                if(nomeTime.toLowerCase() === $scope.teams[i].name.toLowerCase()){
                    retorno = true;
                    break;
                }
            }
            return retorno;
        }
    });
})();
