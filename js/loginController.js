(function(){
    angular.module('pokemon').controller('LoginController', function($scope, $location){
        var vm = this;
        $scope.login = '';
        $scope.senha = '';
        var usuario = {};
        vm.login = function(){
            if($scope.login != undefined && $scope.login.trim() == ""){
                alert("O campo Login deve ser preenchido.");
                return false;
            }
            if($scope.senha != undefined && $scope.senha.trim() == ""){
                alert("O campo Login deve ser preenchido.");
                return false;
            }
            usuario.login = $scope.login;
            usuario.senha = $scope.senha;
            if (UsuariosSite.findUser(usuario)){
                $location.path("/time");
            }else{
                alert("Usuário não encontrado. Favor tentar novamente.");
            }
        };
    });
})();
