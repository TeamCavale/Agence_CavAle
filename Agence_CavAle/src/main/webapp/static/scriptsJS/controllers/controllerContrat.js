/**
 * Controleur Agent
 */

app.controller("addContratCtrl", 
		function($scope, $rootScope, $window, contratProvider, $location) {
	
	var agent = {id:1,
				 mail:"a@a",
				 mdp:"a",
				 nom:"a",
				 telephone:"0515515"
				}  //$rootScope.agentAuth;
	
	$scope.contrat = {
			"id" : 0,
			"prixEffectif" : 0,
			"dateAchat" : 0,
			"agent" : agent,
			"client" : null,
			"bienALouer" : null,
			"bienAAcheter" : null,		
	}
	
	contratProvider.getAllClient(function(callback) {
		if (callback != undefined && callback != "") {
			$scope.listeClient = callback.data;
		}
	});
	

	contratProvider.getAllBienAAcheter(function(callback) {
		if (callback != undefined && callback != "") {
			$scope.listeBienAAcheter = callback.data;
		}
	});
	
	contratProvider.getAllBienALouer(function(callback) {
		if (callback != undefined && callback != "") {
			$scope.listeBienAAcheter = callback.data;
		}
	});
	
	$scope.getClient = function() {

		var id = $scope.clientSelectedId;
		if (id == undefined) {
			id = 0;
		}

		contratProvider.getClientById(id, function(
				callback) {
			if (callback != undefined && callback != "") {
				$scope.contrat.client = callback.data;
			}
		});
	};
	
	
	$scope.getBienAAcheter = function() {

		var id = $scope.bienAAcheterSelectedId;
		if (id == undefined) {
			id = 0;
		}

		contratProvider.getBienAAcheterById(id, function(
				callback) {
			if (callback != undefined && callback != "") {
				$scope.contrat.bienAAcheter = callback.data;
			}
		});
	};
	
	
	$scope.getBienALouer = function() {

		var id = $scope.bienALouerSelectedId;
		if (id == undefined) {
			id = 0;
		}

		contratProvider.getBienALouerById(id, function(
				callback) {
			if (callback != undefined && callback != "") {
				$scope.contrat.bienALouer = callback.data;
			}
		});
	};
	
	
	$scope.addContratView = function() {
		$scope.contrat.dateAchat = new Date();
		var bi = $scope.contrat;

		contratProvider.addContrat(contratForm, function(
				callback) {
			if (callback != undefined && callback != "") {
				$location.path("getAllContratsAgent");
			}
		});
	};
	
	

	
});