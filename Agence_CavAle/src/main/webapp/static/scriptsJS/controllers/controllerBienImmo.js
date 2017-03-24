/**
 * 
 */
app
		.controller(
				"findAllBIAAcheterCtrl",
				function($scope, $rootScope, $window, $location,
						bienImmoAchatProvider) {
					bienImmoAchatProvider.findAllBiensImmoAchat(function(
							callback) {
						if (callback != undefined && callback != "") {
							$scope.biAchat = callback.data;
						}
					});

					$scope.getDetail = function(id, callback) {

						bienImmoAchatProvider
								.findDetailsBiensImmoAchat(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												$scope.bienImmo = callback.data;
											}
										})
					}
				})
		.controller(
				"findBIAAcheterCtrl",
				function($scope, $rootScope, $window, $location,
						bienImmoAchatProvider) {

					$scope.getBI = function() {
						var id = $scope.id_bi;
						bienImmoAchatProvider
								.findDetailsBiensImmoAchat(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												$scope.bienImmo = callback.data;
											}
										})
					}
				}).controller(
				"addBIAAcheterCtrl",
				function($scope, $rootScope, $window, $location,
						bienImmoAchatProvider) {
					$scope.bienImmo = {
						"id" : 0,
						"statut" : "",
						"dateSoumission" : 0,
						"dateDispo" : 0,
						"revenuCadastral" : 0,
						"prixAchat" : 0,
						"etat" : "",
						"classeStandard" : null,
						"adresse" : null,
						"contrat" : null,
						"proprietaire" : null
					}

					bienImmoAchatProvider.getAllProp(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeProp = callback.data;
						}
					});

					bienImmoAchatProvider.getAllClient(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeClient = callback.data;
						}
					});

					bienImmoAchatProvider.getAllClassStand(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeCS = callback.data;
						}
					});

					$scope.getCS = function() {

						var id = $scope.classStandSelectId;
						if(id == undefined){
							id = 0;
						}

						bienImmoAchatProvider.getCSById(id, function(callback) {
							if (callback != undefined && callback != "") {
								$scope.bienImmo.classeStandard = callback.data;
							}
						});
					};
					
					$scope.getClient = function() {

						var id = $scope.clientSelectId;
						if(id == undefined){
							id = 0;
						}

						bienImmoAchatProvider.getClientById(id, function(callback) {
							if (callback != undefined && callback != "") {
								$scope.bienImmo.client = callback.data;
							}
							console.log($scope.bienImmo.client);
						});
					};

				})