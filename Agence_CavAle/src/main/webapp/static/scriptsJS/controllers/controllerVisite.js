/**
 * 
 */

app.controller("getAllVisiteCtrl",function($scope, visiteProvider, $location){
	visiteProvider.findAllVisite(function(callback){
		
		$scope.visites = callback.data;	
		
	})
	
}).controller("getbyIdVisiteCtrl",function($scope, visiteProvider){
	
	$scope.id=undefined;
	$scope.indice = false;
	
	$scope.rechercher= function(){
	visiteProvider.getVisite($scope.id,function(callback){
		
			if (callback != undefined && callback != ""){
				$scope.indice = true;
				$scope.visite = callback.data;
			}else{
				$scope.indice=false;
			}
		})
	}
}).controller("addVisiteCtrl", function($scope, $rootScope, visiteProvider, $location ){
	$scope.visiteForm = {
			date : "",
			client : "",
			agent : "",
			bienALouer : "",
			bienAAcheter : ""
		};

		$scope.ajouter = function() {
			visiteProvider.addVisite($scope.clientForm, function(callback) {
				
				if(callback !=undefined && callback!=""){
					$location.path("visiteListe.html");
				}
			})
		}
	
	
})