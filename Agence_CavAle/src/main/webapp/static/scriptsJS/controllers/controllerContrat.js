/**
 * Controleur Agent
 */

app.controller("addContratCtrl",
		function($scope, $rootScope, $window, contratProvider, $location,bienImmoAchatProvider) {

			var agent = {
				id : 1,
				mail : "a@a",
				mdp : "a",
				nom : "a",
				telephone : "0515515"
			} // $rootScope.agentAuth;

			$scope.contrat = {
				"id" : 0,
				"prixEffectif" : 0,
				"dateAchat" : 0,
				"agent" : agent,
				"client" : null,
				"bienALouer" : null,
				"bienAAcheter" : null,
			}

			contratProvider.getAllClient(function(callback) {
				if (callback != undefined && callback != "") {
					$scope.listeClient = callback.data;
				}
			});

			bienImmoAchatProvider.findAllBiensImmoAchat(function(callback) {
				console.log("je suis dans controller getall")
				if (callback != undefined && callback != "") {
					$scope.listeBienAAcheter = callback.data;
				}
			});

			contratProvider.getAllBienALouer(function(callback) {
				if (callback != undefined && callback != "") {
					$scope.listeBienALouer = callback.data;
				}
			});

			$scope.getClient = function() {

				var id = $scope.clientSelectedId;
				if (id == undefined) {
					id = 0;
				}

				contratProvider.getClientById(id, function(callback) {
					if (callback != undefined && callback != "") {
						$scope.contrat.client = callback.data;
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
						$scope.contrat.bienAAcheter = callback.data;
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
						$scope.contrat.bienALouer = callback.data;
					}
				});
			};

			$scope.addContratView = function() {
				var contratForm = $scope.contrat;

				contratProvider.addContrat(contratForm, function(callback) {
					if (callback != undefined && callback != "") {
						$location.path("getAllContratsAgent");
					}
				});
			};

		}).controller(
		"updateContratCtrl",
		function($scope, $rootScope, $window, contratProvider, $location,
				$routeParams) {

			$scope.contrat = {
				"id" : 0,
				"prixEffectif" : 0,
				"dateAchat" : 0,
				"agent" : agent,
				"client" : null,
				"bienALouer" : null,
				"bienAAcheter" : null,
			}

			contratProvider.getContratFromView($routeParams.idContrat,
					function(callback) {

						if (callback != undefined && callback != "") {
							var cont = callback.data;
							if (cont.dateAchat != null) {
								cont.dateAchat = new Date(cont.dateAchat);
							}
							$scope.contrat = cont;
						}
					});

			contratProvider.getAllClient(function(callback) {
				if (callback != undefined && callback != "") {
					$scope.listeClient = callback.data;
				}
			});

			bienImmoAchatProvider.findAllBiensImmoAchat(function(callback) {
				console.log("je suis dans controller getall")
				if (callback != undefined && callback != "") {
					
					$scope.listeBienAAcheter = callback.data;
					console.log($scope.listeBienAAcheter[0]);
				}
			});

			contratProvider.getAllBienALouer(function(callback) {
				if (callback != undefined && callback != "") {
					$scope.listeBienAAcheter = callback.data;
				}
			});

			$scope.getClient = function() {

				var id = $scope.clientSelectedId;
				if (id == undefined) {
					id = 0;
				}

				contratProvider.getClientById(id, function(callback) {
					if (callback != undefined && callback != "") {
						$scope.contrat.client = callback.data;
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
						$scope.contrat.bienAAcheter = callback.data;
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
						$scope.contrat.bienALouer = callback.data;
					}
				});
			};

			$scope.addContratView = function() {
				
				var contratForm = $scope.contrat;
				
				if (contratForm.id == 0) {
					contratProvider.addContrat(contratForm, function(callback) {
						if (callback != undefined && callback != "") {
							$location.path("getAllContratsAgent");
						}
					});
				}else{
					contratProvider.updContrat(contratForm, function(callback) {
						if (callback != undefined && callback != "") {
							$location.path("getAllContratsAgent");
						}
					});
					
				}
				
			};

		});