/**
 * 
 */

app.controller("getAllVisiteCtrl", function($scope, $window, visiteProvider, $rootScope , $location) {
	visiteProvider.findAllVisite(function(callback) {

		$scope.visites = callback.data;
	
		
		
	})
	
	//methode supprimer avec un lien
	$scope.deleteLien=function(id){
		visiteProvider.deleteVisite(id, function(callback){
			if(callback !=undefined && callback!=""){
				
				visiteProvider.findAllVisite(function(callback_visite){
					if(callback_visite !=undefined && callback_visite!=""){
					$scope.visites = callback_visite.data;
					$location.path("getAllVisite")
					}
				});
			}
		})
	}
	//declarer la visite dans le rootscope
	$rootScope.visiteForm={
			id:undefined,
			date : "",
			client : null,
			agent : null,
			bienALouer : null,
			bienAAcheter : null
	}
	//appelé la methode du provider avec le lien de l'index
	$scope.updateLien=function(visite){
		$rootScope.visiteForm.id=visite.id;
		$rootScope.visiteForm.date=visite.date;
		$rootScope.visiteForm.client=visite.client;
		$rootScope.visiteForm.agent=visite.agent;
		$rootScope.visiteForm.bienALouer=visite.bienALouer;
		$rootScope.visiteForm.bienAAcheter=visite.bienAAcheter;
		$location.path("updateVisite")
	}

})
.controller("getbyIdVisiteCtrl", function($scope, visiteProvider) {

	$scope.id = undefined;
	$scope.indice = false;

	$scope.rechercher = function() {
		visiteProvider.getVisite($scope.id, function(callback) {

			if (callback != undefined && callback != "") {
				$scope.indice = true;
				$scope.visite = callback.data;
			} else {
				$scope.indice = false;
			}
		})
	}
}).controller("addVisiteCtrl",
		function($scope, $rootScope, visiteProvider, $location) {
			$scope.visiteForm = {
				date : "",
				client : null,
				agent : null,
				bienALouer : null,
				bienAAcheter : null
			};

			$scope.ajouter = function() {
				visiteProvider.addVisite($scope.visiteForm, function(callback) {

					if (callback != undefined && callback != "") {
						$location.path("getAllVisite");
					}
				})
			}

		}).controller("delVisiteCtrl", function($scope, visiteProvider, $location) {

			$scope.id = undefined;
			$scope.supprimer = function() {
				visiteProvider.deleteVisite($scope.id, function(callback) {

					if (callback != undefined && callback != "") {
						$location.path("getAllVisite");
					}
				})
			}
		}).controller("updateVisiteCtrl", function($scope, $rootScope, visiteProvider, $location) {
			
			if($rootScope.visiteForm.id==undefined){
				$scope.visiteForm = {
						id : undefined,
						date : "",
						client : null,
						agent : null,
						bienALouer : null,
						bienAAcheter : null
					};
				
			}else{
				
				$scope.updateLien=function(visite){
					
					$rootScope.visiteForm.id=visite.id;
					$rootScope.visiteForm.date=visite.date;
					$rootScope.visiteForm.client=visite.client;
					$rootScope.visiteForm.agent=visite.agent;
					$rootScope.visiteForm.bienALouer=visite.bienALouer;
					$rootScope.visiteForm.bienAAcheter=visite.bienAAcheter;
					
				
					
				}
				
			}
			
			
			$scope.modifier=function(){
				visiteProvider.updateVisite($scope.visiteForm,function(callback) {
					
					if(callback !=undefined && callback!=""){
						$location.path("getAllVisite");
					}
				})
			}
		})