/**
 * 
 */


cal.factory("visiteProvider", function ($http){
	
	var urlglobal= "http://localhost:8080/Agence_CavAle/visite";
	
	function findAllVisite2 (callback){
		
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
	return {
		findAllVisite2 : findAllVisite2
	}
});	