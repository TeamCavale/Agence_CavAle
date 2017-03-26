/**
 * 
 */
app
		.controller(
				"addPropCtrl",
				function($scope, $rootScope, $window, $location, propProvider) {

					$scope.addProp = function(callback) {
						propProvider
								.addProp(
										$scope.proprietaire,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												propProvider
														.findAllProp(function(
																callback) {
															if (callback != undefined
																	&& callback != "") {
																$location
																		.path("getAllProprietaire");
															}
														});
											}
										})
					}

				})
		.controller(
				"findAllPropCtrl",
				function($scope, $rootScope, $window, $location, propProvider) {

					propProvider.findAllProp(function(callback) {
						if (callback != undefined && callback != "") {
							propProvider.findAllProp(function(callback) {
								if (callback != undefined && callback != "") {
									$scope.proprietaires = callback.data;
								}
							});
						}
					})

					$scope.delProp = function(id, callback) {
						propProvider
								.delProp(
										id,
										function(callbackdel) {
											if (callbackdel != undefined
													&& callbackdel != "") {
												propProvider
														.findAllProp(function(
																callback) {
															if (callback != undefined
																	&& callback != "") {
																propProvider
																		.findAllProp(function(
																				callback) {
																			if (callback != undefined
																					&& callback != "") {
																				$scope.proprietaires = callback.data;
																			}
																		});
															}
														})
											}
										})
					}

				})
		.controller(
				"updatePropCtrl",
				function($scope, $rootScope, $window, $location, $routeParams,
						propProvider) {

					propProvider
							.findDetailsProp(
									$routeParams.idProp,
									function(callback) {
										if (callback != undefined
												&& callback != "") {
											var prp = callback.data;
											if (prp.adresse != null) {
												if (prp.adresse.codePostal != null) {
													prp.adresse.codePostal = Number(prp.adresse.codePostal);
												}
											}
											$scope.proprietaire = prp;
										}
									})

					$scope.addProp = function(callback) {
						propProvider
								.updateProp(
										$scope.proprietaire,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												propProvider
														.findAllProp(function(
																callback) {
															if (callback != undefined
																	&& callback != "") {
																$location
																		.path("getAllProprietaire");
															}
														});
											}
										})
					}

				}).controller("findPropCtrl",
				function($scope, $rootScope, $window, $location, propProvider) {
					$scope.findProp = false;
					$scope.getProp = function(id, callback) {
						propProvider.findDetailsProp(id, function(callback) {
							if (callback != undefined && callback != "") {
								$scope.proprietaire = callback.data;
								if($scope.proprietaire!=null || $scope.proprietaire.id != 0){
									$scope.findProp = true;
								}else{
									$scope.findProp = false;
								}
							}
						})
					}
				})