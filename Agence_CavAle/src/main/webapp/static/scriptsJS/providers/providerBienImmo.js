/**
 * 
 */

app.factory("bienImmoAchatProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle/bienimmo";
	
	function findAllBiensImmoAchat(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/achat/getAll'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function findDetailsBiensImmoAchat(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/achat/getById/' + id
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	return {
		findAllBiensImmoAchat : findAllBiensImmoAchat,
		findDetailsBiensImmoAchat : findDetailsBiensImmoAchat
	}
})