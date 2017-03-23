/**
 * Provider
 */

app.factory("clientProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle/client";
	function findAllClients(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/clients'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);}, 
			function errorCallback(response) {console.log("erreur : " + response.statusText);});

	}
	function addClient(clientForm, callback){
		$http({
			method : 'POST',
			url: urlglobal+'/add',
			data: angular.toJson(clientForm),
			headers :{
				'Content-Type' : 'application/json'
			}
			
		}).success(function (response){
			console.log(response);
			callback(response);
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
	function deleteClient(id, callback){
		$http({
			method : 'GET',
			url: urlglobal+'/delete?id_param='+id
			
			
		}).success(function (response){
			console.log(response);
			callback(response);
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
	function updateClient(clientForm, callback){
		$http({
			method : 'PUT',
			url: urlglobal+'/update',
			data: angular.toJson(clientForm),
			headers :{
				'Content-Type' : 'application/json'
			}
			
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
			url: urlglobal+'/client/'+id
			
			
		}).success(function (response){
			console.log(response);
			callback(response);
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}

	return {
		findAllClients : findAllClients,
		findClient : findClient,
		addClient : addClient,
		updateClient : updateClient,
		deleteClient : deleteClient
	}
})