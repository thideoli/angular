angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, config, contatosAPI, operadorasAPI, serialGenerator){
	console.log(serialGenerator.generate());
	var carregarContatos = function(){
		contatosAPI.getContatos().then(
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
		operadorasAPI.getOperadoras().then(
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
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contato.nome = $filter("uppercase")(contato.nome);
		contatosAPI.saveContato(contato).then(
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