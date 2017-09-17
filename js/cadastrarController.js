(function(){
    angular.module('pokemon').controller('CadastrarController', function($scope, $location){
        var vm = this;
        var usuario = {};

            vm.cadastrar = function(){

                if ($scope.login != undefined && $scope.login.trim() ===""){
                    alert("Login é um campo obrigatório.");
                    return false;
                }
                if ($scope.senha != undefined && $scope.senha.trim() ===""){
                    alert("Login é um campo obrigatório.");
                    return false;
                }
                if ($scope.senhaCheck != undefined && $scope.senhaCheck.trim() ===""){
                    alert("Login é um campo obrigatório.");
                    return false;
                }
                if($scope.senha.trim() != $scope.senhaCheck.trim()){
                    alert("As senhas devem ser iguais.");
                    return false;
                }
                usuario.login = $scope.login;
                usuario.senha = $scope.senha;
                if (!UsuariosSite.hasUser(usuario)){
                    UsuariosSite.addUser(usuario);
                    window.sessionStorage.setItem("login",usuario.login);
                    $location.path("/time");
                }

                /*
                cadastro.onsuccess = function(){
                    window.sessionStorage.addItem("login",usuario.login);
                    $location.path("/time");
                }

                db.select().from(users).
                where(users.login.eq($scope.login)).exec().
                then(function(res){
                    if(res.length > 0){
                        alert("Já existe um usuário com este login.")
                        return false;
                    }
                    usuario.login = $scope.login;
                    usuario.senha = $scope.senha;
                    return cadastrarUsuario(usuario,db,users);
                }).
                then(function(res){
                    console.log(res);
                    alert("OK");
                    $location.path("/time");
                });*/

            };

    });
})();
