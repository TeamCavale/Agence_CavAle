/**
 * Provider
 */

app.factory("classeStandardProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";
	function findAllClasseStandard(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/classeStandard/classeStandards'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);}, 
			function errorCallback(response) {console.log("erreur : " + response.statusText);});

	}
	function findAllClients(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/client/clients'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);}, 
			function errorCallback(response) {console.log("erreur : " + response.statusText);});

	}
	
	function addClasseStandard(classeStandardForm, callback){
		$http({
			method : 'POST',
			url: urlglobal+'/classeStandard/add',
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
			url: urlglobal+'/classeStandard/delete?id_param='+id
			
			
		}).success(function (response){
			
			callback("OK");
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
	function updateClasseStandard(classeStandardForm, callback){
		$http({
			method : 'PUT',
			url: urlglobal+'/classeStandard/update',
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
			url: urlglobal+'/classeStandard/classeStandard/'+id
			
			
		}).success(function (response){
			console.log(response);
			callback(response);
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
function findClient(id, callback){
	
		$http({
			
			method : 'GET',
			url: urlglobal+'/client/client/'+id
			
			
		}).success(function (response){
			console.log(response);
			callback(response);
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}

	return {
		findAllClasseStandard : findAllClasseStandard,
		findAllClients :findAllClients,
		findClasseStandard : findClasseStandard,
		addClasseStandard : addClasseStandard,
		updateClasseStandard : updateClasseStandard,
		deleteClasseStandard : deleteClasseStandard,
		findClient : findClient
	}
})