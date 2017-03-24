/**
 * Provider
 */

app.factory("classeStandardProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle/classeStandard";
	function findAllClasseStandard(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/classeStandards'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);}, 
			function errorCallback(response) {console.log("erreur : " + response.statusText);});

	}
	function addClasseStandard(classeStandardForm, callback){
		$http({
			method : 'POST',
			url: urlglobal+'/add',
			data: angular.toJson(classeStandardForm),
			headers :{
				'Content-Type' : 'application/json'
			}
			
		}).success(function (response){
			console.log(response);
			callback("ok");
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
	function deleteClasseStandard(id, callback){
		$http({
			method : 'GET',
			url: urlglobal+'/delete?id_param='+id
			
			
		}).success(function (response){
			
			callback("OK");
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
	function updateClasseStandard(classeStandardForm, callback){
		$http({
			method : 'PUT',
			url: urlglobal+'/update',
			data: angular.toJson(classeStandardForm),
			headers :{
				'Content-Type' : 'application/json'
			}
			
		}).success(function (response){
			console.log(response);
			callback("ok");
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
	function findClasseStandard(id, callback){
		
		$http({
			
			method : 'GET',
			url: urlglobal+'/classeStandard/'+id
			
			
		}).success(function (response){
			console.log(response);
			callback(response);
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}

	return {
		findAllClasseStandard : findAllClasseStandard,
		findClasseStandard : findClasseStandard,
		addClasseStandard : addClasseStandard,
		updateClasseStandard : updateClasseStandard,
		deleteClasseStandard : deleteClasseStandard
	}
})