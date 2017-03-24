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
			
			url : urlglobal+"/visite"+id
				
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});
		
	}
	
	
	return {
		findAllVisite : findAllVisite
		
	}
	
	
})