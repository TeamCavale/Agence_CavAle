/**
 * Provider
 */

app.factory("clientProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";
	function findAllClients(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/client/clients'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);}, 
			function errorCallback(response) {console.log("erreur : " + response.statusText);});

	}
	function addClient(clientForm, callback){
		$http({
			method : 'POST',
			url: urlglobal+'/client/add',
			data: angular.toJson(clientForm),
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
	function deleteClient(id, callback){
		$http({
			method : 'GET',
			url: urlglobal+'/client/delete?id_param='+id
			
			
		}).success(function (response){
			
			callback("OK");
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
	function updateClient(clientForm, callback){
		$http({
			method : 'PUT',
			url: urlglobal+'/client/update',
			data: angular.toJson(clientForm),
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
	
	function getAllClassStand(callback) {
		
		$http({
			method : 'GET',
			url : urlglobal + '/classeStandard/classeStandards'
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function getCSById(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/classeStandard/classeStandard/'+id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	

	return {
		findAllClients : findAllClients,
		findClient : findClient,
		addClient : addClient,
		updateClient : updateClient,
		deleteClient : deleteClient,
		getCSById : getCSById,
		getAllClassStand : getAllClassStand
		
	}
})