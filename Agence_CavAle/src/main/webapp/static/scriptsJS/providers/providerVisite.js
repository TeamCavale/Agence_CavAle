/**
 * 
 */

app.factory("visiteProvider", function ($http){
	
	var urlglobal= "http://localhost:8080/Agence_CavAle/visite";
	
	function findAllVisite (callback){
		
		$http({
			method : 'GET',
			url : urlglobal+'/visites'
		}).then(function sucessCallBack (response){
			
			console.log(response.data);
			
			callback(response);
			
		}, function errorCallBack(response){
			console.log("erreur : "+response.statusText);
		});
	}
	
	function getVisite(id, callback){
		
		$http({
			method : 'GET',
			
			url : urlglobal+"/visite/"+id
				
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});
		
	}
	function addVisite(visiteForm, callback){
		$http({
			method : 'POST',
			url: urlglobal+'/add',
			data: angular.toJson(visiteForm),
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
	function deleteVisite(id, callback){
		$http({
			method : 'GET',
			url : urlglobal+'/del?id_param='+id
			
			
		}).success(function (response){
			
			callback("OK");
			
		}).error(function(response){
			console.log('Erreur : ' + response.statusText);
			
		})
		
		
		
	}
	
	function updateVisite(visiteForm, callback){
	$http({
		method : 'PUT',
		url: urlglobal+'/update',
		data: angular.toJson(visiteForm),
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
	return {
		findAllVisite : findAllVisite,
		getVisite : getVisite,
		addVisite : addVisite,
		deleteVisite : deleteVisite,
		updateVisite : updateVisite
	}
	
	
})