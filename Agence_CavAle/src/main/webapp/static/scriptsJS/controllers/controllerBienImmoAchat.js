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

					$scope.delBI = function(id, callback) {
						bienImmoAchatProvider
								.delBIAchat(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												bienImmoAchatProvider
														.findAllBiensImmoAchat(function(
																callback) {
															if (callback != undefined
																	&& callback != "") {
																$scope.biAchat = callback.data;
															}
														});
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
				})
		.controller(
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
						if (id == undefined) {
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
						if (id == undefined) {
							id = 0;
						}

						bienImmoAchatProvider.getClientById(id, function(
								callback) {
							if (callback != undefined && callback != "") {
								$scope.bienImmo.client = callback.data;
							}
						});
					};

					$scope.getProp = function() {

						var id = $scope.propSelectId;
						if (id == undefined) {
							id = 0;
						}

						bienImmoAchatProvider
								.getPropById(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												$scope.bienImmo.proprietaire = callback.data;
											}
										});
					};

					$scope.addBI = function() {
						$scope.bienImmo.dateSoumission = new Date();
						var bi = $scope.bienImmo;

						bienImmoAchatProvider.addBienImmoAchat(bi, function(
								callback) {
							if (callback != undefined && callback != "") {
								$location.path("getAllBienAAcheter");
							}
						});
					};

				})
		.controller(
				"updateBIAAcheterCtrl",
				function($scope, $rootScope, $window, $location, $routeParams,
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
					bienImmoAchatProvider.findDetailsBiensImmoAchat(
							$routeParams.idBI, function(callback) {
								if (callback != undefined && callback != "") {
									var bi = callback.data;
									if (bi.dateSoumission != null) {
										bi.dateSoumission = new Date(
												bi.dateSoumission);
									}
									if (bi.dateDispo != null) {
										bi.dateDispo = new Date(bi.dateDispo);
									}
									if (bi.contrat != null) {
										if (bi.contrat.dateAchat != null) {
											bi.contrat.dateAchat = new Date(
													bi.contrat.dateAchat);
										}
										if (bi.contrat.client != null) {
											if (bi.contrat.client.id != null) {
												$scope.clselected = [false];
												$scope.clselected[bi.contrat.client.id] = true;
											}
										}
									}
									if (bi.adresse != null) {
										if (bi.adresse.codePostal != null) {
											bi.adresse.codePostal = Number(bi.adresse.codePostal);
										}
									}
									
									if (bi.proprietaire != null) {
										if (bi.proprietaire.id != null) {
											$scope.propselected = [false];
											$scope.propselected[bi.proprietaire.id] = true;
										}
									}
									$scope.bienImmo = bi;
								}
							})

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
						if (id == undefined) {
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
						if (id == undefined) {
							id = 0;
						}

						bienImmoAchatProvider.getClientById(id, function(
								callback) {
							if (callback != undefined && callback != "") {
								$scope.bienImmo.contrat.client = callback.data;
							}
						});
					};

					$scope.getProp = function() {

						var id = $scope.propSelectId;
						if (id == undefined) {
							id = 0;
						}

						bienImmoAchatProvider
								.getPropById(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												$scope.bienImmo.proprietaire = callback.data;
											}
										});
					};

					$scope.addBI = function() {
						var bi = $scope.bienImmo;
						if (bi.id == 0) {
							bienImmoAchatProvider
									.addBienImmoAchat(
											bi,
											function(callback) {
												if (callback != undefined
														&& callback != "") {
													$location
															.path("getAllBienAAcheter");
												}
											});
						} else {
							bienImmoAchatProvider
									.updateBienImmoAchat(
											bi,
											function(callback) {
												if (callback != undefined
														&& callback != "") {
													$location
															.path("getAllBienAAcheter");
												}
											});
						}
					};

				})