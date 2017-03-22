angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, $http){
	var carregarContatos = function(){
		$http.get("http://listatelefonica.dev/contatosBackend.php").then(
			function(response){
				if(response.data)
					$scope.contatos = response.data;
			}, 
			function(response){
				alert('Erro: ' + response.status);
			}
		);
	};
	var carregarOperadoras = function(){
		$http.get("http://listatelefonica.dev/operadorasBackend.php").then(
			function(response){
				$scope.operadoras = response.data;
			}, 
			function(response){
				alert('Erro: ' + response.status);
			}
		);
	};
	$scope.app = "Lista Telefônica";
	$scope.contatos = [];
	$scope.operadoras = [];
	$scope.adicionarContato = function(contato){
		contato.data = new Date();
		contato.nome = $filter("uppercase")(contato.nome);
		$http.post("http://listatelefonica.dev/contatosBackend.php", contato).then(
			function(response){
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
			}, 
			function(response){
				alert('Erro: ' + response.status);
			}
		);
	};
	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if (!contato.selecionado) return contato;
		});
	};
	$scope.temContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	carregarContatos();
	carregarOperadoras();
});