  angular.module("cadastroUser", []);
  angular.module("cadastroUser").controller("cadastroUserCtrl", function ($scope) {
    $scope.app = "Cadastro de Usuários";
    $scope.usuarios = [
      {nome: "Maria", endereco: "johann Gil 266", endereco2: "Null", email: "carol@saaa.com", email2:"joao@gmail.com", telefone:"999999999", telefone2:"888888888"}
    ];
    $scope.adicionarUsuario = function (usuario) {
      $scope.usuarios.push(angular.copy(usuario));
      delete $scope.usuario;
    };
    $scope.apagarUsuarios = function (usuarios) {
      $scope.usuarios = usuarios.filter(function (usuario) {
        if (!usuario.selecionado) return usuario;
      });
    };
    $scope.isUsuarioSelecionado = function (usuarios) {
      return usuarios.some(function (usuario) {
        return usuario.selecionado;
      });
    };
  });
