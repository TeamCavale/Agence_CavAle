/**
 * 
 */

app.controller(
		"getAllVisiteCtrl",
		function($scope, $window, visiteProvider, $rootScope, $location) {
			visiteProvider.findAllVisite(function(callback) {

				$scope.visites = callback.data;

			})

			// methode supprimer avec un lien
			$scope.deleteLien = function(id) {
				visiteProvider.deleteVisite(id, function(callback) {
					if (callback != undefined && callback != "") {

						visiteProvider.findAllVisite(function(callback_visite) {
							if (callback_visite != undefined
									&& callback_visite != "") {
								$scope.visites = callback_visite.data;
								$location.path("getAllVisite")
							}
						});
					}
				})
			}
			// declarer la visite dans le rootscope
			$rootScope.visiteForm = {
				id : undefined,
				date : "",
				client : null,
				agent : null,
				bienALouer : null,
				bienAAcheter : null
			}
			// appelé la methode du provider avec le lien de l'index
			$scope.updateLien = function(visite) {
				$rootScope.visiteForm.id = visite.id;
				$rootScope.visiteForm.date = visite.date;
				$rootScope.visiteForm.client = visite.client;
				$rootScope.visiteForm.agent = visite.agent;
				$rootScope.visiteForm.bienALouer = visite.bienALouer;
				$rootScope.visiteForm.bienAAcheter = visite.bienAAcheter;
				$location.path("updateVisite")
			}

		}).controller("getbyIdVisiteCtrl", function($scope, visiteProvider) {

	$scope.id = undefined;
	$scope.indice = false;

	$scope.rechercher = function() {
		visiteProvider.getVisite($scope.id, function(callback) {

			if (callback != undefined && callback != "") {
				$scope.indice = true;
				$scope.visite = callback.data;
			} else {
				$scope.indice = false;
			}
		})
	}
}).controller(
		"addVisiteCtrl",
		function($scope, $rootScope, visiteProvider, classeStandardProvider,
				agentProvider, bienImmoAchatProvider, bienImmoLocationProvider, contratProvider, $location) {

			$scope.visiteForm = {
				"date" : "",
				"client" : null,
				"agent" : null,
				"bienALouer" : null,
				"bienAAcheter" : null
			};

			classeStandardProvider.findAllClients(function(callback) {
				if (callback != undefined && callback != "") {
					$scope.listeClient = callback.data;
				}
			});

			bienImmoAchatProvider.findAllBiensImmoAchat(function(callback) {

				$scope.listebienAA = callback.data;

			});

			bienImmoLocationProvider
					.findAllBiensImmoLocation(function(callback) {

						$scope.listebienAL = callback.data;

					});

			$scope.getClient = function() {

				var id = $scope.clientSelectId;
				if (id == undefined) {
					id = 0;
				}

				bienImmoAchatProvider.getClientById(id, function(callback) {
					if (callback != undefined && callback != "") {
						$scope.visiteForm.client = callback.data;
					}
				});
			};

			
			$scope.getBienALouer = function() {

				var id = $scope.bienALouerSelectedId;
				if (id == undefined) {
					id = 0;
				}

				contratProvider.getBienALouerById(id, function(callback) {
					if (callback != undefined && callback != "") {
						$scope.visiteForm.bienALouer = callback.data;
					}
				});
			};

			$scope.getBienAAcheter = function() {

				var id = $scope.bienAAcheterSelectedId;
				if (id == undefined) {
					id = 0;
				}

				contratProvider.getBienAAcheterById(id, function(callback) {
					if (callback != undefined && callback != "") {
						$scope.visiteForm.bienAAcheter = callback.data;
					}
				});
			};

			$scope.ajouter = function() {
				var gne = $scope.visiteForm;
				visiteProvider.addVisite(gne, function(callback) {
					if (callback != undefined && callback != "") {
						$location.path("getAllVisite");
					}
				});

			};

		}).controller(
		"delVisiteCtrl",
		function($scope, visiteProvider, $location) {

			$scope.visiteForm = {
				"id" : undefined,
				"date" : "",
				"client" : null,
				"agent" : null,
				"bienALouer" : null,
				"bienAAcheter" : null
			};

			$scope.supprimer = function() {

				visiteProvider.deleteVisite($scope.visiteForm.id, function(
						callback) {

					if (callback != undefined && callback != "") {
						$location.path("getAllVisite");
					}
				})
			}
		}).controller(
		"updateVisiteCtrl",
		function($scope, $rootScope, visiteProvider, $location) {

			if ($rootScope.visiteForm.id == undefined) {
				$scope.visiteForm = {
					id : undefined,
					date : "",
					client : null,
					agent : null,
					bienALouer : null,
					bienAAcheter : null
				};

			} else {

				$scope.updateLien = function(visite) {

					$rootScope.visiteForm.id = visite.id;
					$rootScope.visiteForm.date = visite.date;
					$rootScope.visiteForm.client = visite.client;
					$rootScope.visiteForm.agent = visite.agent;
					$rootScope.visiteForm.bienALouer = visite.bienALouer;
					$rootScope.visiteForm.bienAAcheter = visite.bienAAcheter;

				}

			}

			$scope.modifier = function() {
				visiteProvider.updateVisite($scope.visiteForm, function(
						callback) {

					if (callback != undefined && callback != "") {
						$location.path("getAllVisite");
					}
				})
			}
		})