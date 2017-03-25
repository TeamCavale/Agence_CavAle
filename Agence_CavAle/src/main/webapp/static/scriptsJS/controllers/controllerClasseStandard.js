/**
 * Controlleur
 */

app.controller("findAllClasseStandardCtrl", function($scope, $rootScope, $window, classeStandardProvider, $location) {
	classeStandardProvider.findAllClasseStandard(function(callback) {
		
		$scope.classeStandard = callback.data;
	});
	
	//methode supprimer avec un lien
	$scope.deleteLien=function(id){
		classeStandardProvider.deleteClasseStandard(id, function(callback){
			if(callback !=undefined && callback!=""){
				
				classeStandardProvider.findAllClasseStandard(function(callback_cl){
					if(callback_cl !=undefined && callback_cl!=""){
					$scope.classeStandard = callback_cl.data;
					$location.path("getAllClasseStandard")
					}
				});
			}
		})
	}
	//declarer le client dans le rootscope
	$rootScope.classeStandardForm={
			id:undefined,
			code: "",
			typeOffre: "",
			prixMax: undefined,
			superficieMin: ""
	}
	//appelé la methode du provider avec le lien de l'index
	$scope.updateLien=function(classeStandard){
		$rootScope.classeStandardForm.id=classeStandard.id;
		$rootScope.classeStandardForm.code=classeStandard.code;
		$rootScope.classeStandardForm.typeOffre=classeStandard.typeOffre;
		$rootScope.classeStandardForm.prixMax=classeStandard.prixMax;
		$rootScope.classeStandardForm.superficieMin=classeStandard.superficieMin;
		$location.path("updateClasseStandard")
	}
})

.controller("addClasseStandardCtrl", function($scope, $rootScope, classeStandardProvider, $location) {
	
	
	classeStandardProvider.findAllClients(function(callback) {

		$scope.listeClient = callback.data;
		
	});
	
	$scope.classeStandardForm = {
			code: "",
			typeOffre: "",
			prixMax: undefined,
			superficieMin: "",
			listeClients:[]
				};
	$scope.getCl = function() {

		var id = $scope.clientSelectId;
		if(id == undefined){
			id = 0;
		}
		
		classeStandardProvider.findClient(id, function(callback) {
			
			if (callback != undefined && callback != "") {
				
				var client = callback;
			
				$scope.classeStandardForm.listeClients[0]=client;
				
			}
		});
	};
	$scope.ajouter = function() {
		classeStandardProvider.addClasseStandard($scope.classeStandardForm, function(callback) {

			if(callback !=undefined && callback!=""){
				
				$location.path("getAllClasseStandard");
			}
		})
	}
})
.controller("deleteClasseStandardCtrl", function($scope, classeStandardProvider, $location) {
	
	$scope.id=undefined;
	$scope.supprimer=function(){
		classeStandardProvider.deleteClasseStandard($scope.id,function(callback) {
			
			if(callback !=undefined && callback!=""){
				$location.path("getAllClasseStandard");
			}
		})
	}
})
.controller("updateClasseStandardCtrl", function($scope, $rootScope, classeStandardProvider, $location) {
	
	if($rootScope.classeStandardForm.id==undefined){
		$scope.classeStandardForm = {
				id:undefined,
				code: "",
				typeOffre: "",
				prixMax: undefined,
				superficieMin: ""
			};
		
	}else{
		
		$scope.updateLien=function(classeStandard){
			$rootscope.classeStandardForm.id=classeStandard.id;
			$rootScope.classeStandardForm.code=classeStandard.code;
			$rootScope.classeStandardForm.typeOffre=classeStandard.typeOffre;
			$rootScope.classeStandardForm.prixMax=classeStandard.prixMax;
			$rootScope.classeStandardForm.superficieMin=classeStandard.superficieMin;
			
		}
		
	}
	
	
	$scope.modifier=function(){
		classeStandardProvider.updateClasseStandard($scope.classeStandardForm,function(callback) {
			
			if(callback !=undefined && callback!=""){
				$location.path("getAllClasseStandard");
			}
		})
	}
})
.controller("findClasseStandardCtrl", function($scope, classeStandardProvider, $location) {

	$scope.id=undefined;
	$scope.indice = false;
	$scope.chercher=function(){
		
		classeStandardProvider.findClasseStandard($scope.id, function(callback) {
			
			if(callback !=undefined && callback!=""){
				$scope.indice = true;
				$scope.classeStandard=callback;
				}else{
					$scope.indice = false;
				}
		})
	}
})