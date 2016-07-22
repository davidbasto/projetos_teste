angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, serialGenerator, operadoras) {
	console.log(operadoras.data);

	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
		});
	};
});