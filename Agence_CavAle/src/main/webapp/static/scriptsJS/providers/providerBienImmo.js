/**
 * 
 */

app.factory("bienImmoAchatProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle/bienimmo";
	function findAllBiensImmo(callback) {
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

	return {
		findAllBiensImmo : findAllBiensImmo
	}
})