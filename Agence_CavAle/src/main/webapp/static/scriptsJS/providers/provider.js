/**
 * Provider
 */

app.factory("immoProvider", function($http) {
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

	return {
		findAllClients : findAllClients
	}
})