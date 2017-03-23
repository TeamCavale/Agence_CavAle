/**
 * Controlleur
 */

app.controller("findAllClientCtrl", function($scope, $rootScope, $window, clientProvider, $location) {
	clientProvider.findAllClients(function(callback) {
		
		$scope.clients = callback.data;
	});
	
	//methode supprimer avec un lien
	$scope.deleteLien=function(id){
		clientProvider.deleteClient(id, function(callback){
			if(callback !=undefined && callback!=""){
				
				clientProvider.findAllClients(function(callback){
					$scope.clients = callback.data;
					$location.path("getAllClient")
				});
			}
		})
	}
	//declarer le client dans le rootscope
	$rootScope.clientForm={
			id:undefined,
			nom: "",
			telephone: ""
	}
	//appelé la methode du provider avec le lien de l'index
	$scope.updateLien=function(client){
		$rootScope.clientForm.id=client.id;
		$rootScope.clientForm.nom=client.nom;
		$rootScope.clientForm.population=client.population;
		$location.path("updateClient")
	}
})

.controller("addClientCtrl", function($scope, $rootScope, clientProvider, $location) {
	$scope.clientForm = {
		nom : "",
		telephone : ""
	};

	$scope.ajouter = function() {
		clientProvider.addClient($scope.clientForm, function(callback) {
			
			if(callback !=undefined && callback!=""){
				$location.path("listeClients");
			}
		})
	}
})
.controller("deleteClientCtrl", function($scope, clientProvider, $location) {
	
	$scope.id=undefined;
	$scope.supprimer=function(){
		clientProvider.deleteClient($scope.id,function(callback) {
			
			if(callback !=undefined && callback!=""){
				$location.path("listeClients");
			}
		})
	}
})
.controller("updateClientCtrl", function($scope, $rootScope, clientProvider, $location) {
	
	if($rootScope.clientForm.id==undefined){
		$scope.clientForm = {
				id:undefined,
				nom : "",
				telephone : ""
			};
		
	}else{
		
		$scope.updateLien=function(client){
			$rootscope.clientForm.id=client.id;
			$rootscope.clientForm.nom=client.nom;
			$rootscope.clientForm.telephone=client.telephone;
			
		}
		
	}
	
	
	$scope.modifier=function(){
		clientProvider.updateClient($scope.clientForm,function(callback) {
			
			if(callback !=undefined && callback!=""){
				$location.path("listeClients");
			}
		})
	}
})
.controller("findClientCtrl", function($scope, clientProvider, $location) {

	$scope.id=undefined;
	$scope.indice = false;
	$scope.chercher=function(){
		
		clientProvider.findClient($scope.id, function(callback) {
			
			if(callback !=undefined && callback!=""){
				$scope.indice = true;
				$scope.client=callback;
				}else{
					$scope.indice = false;
				}
		})
	}
})