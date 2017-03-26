/**
 * 
 */
app
		.controller(
				"findAllBIALouerCtrl",
				function($scope, $rootScope, $window, $location,
						bienImmoLocationProvider) {
					bienImmoLocationProvider.findAllBiensImmoLocation(function(
							callback) {
						if (callback != undefined && callback != "") {
							$scope.biLocation = callback.data;
						}
					});
					
					$scope.getDetail = function(id, callback) {

						bienImmoLocationProvider
								.findDetailsBiensImmoLocation(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												$scope.bienImmo = callback.data;
											}
										})
					}

					$scope.delBI = function(id, callback) {
						bienImmoLocationProvider
								.delBILocation(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												bienImmoLocationProvider
														.findAllBiensImmoLocation(function(
																callback) {
															if (callback != undefined
																	&& callback != "") {
																$scope.biLocation = callback.data;
															}
														});
											}
										})
					}

				})
		.controller(
				"findBIALouerCtrl",
				function($scope, $rootScope, $window, $location,
						bienImmoLocationProvider) {

					$scope.getBI = function() {
						var id = $scope.id_bi;
						bienImmoLocationProvider
								.findDetailsBiensImmoLocation(
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
				"addBIALouerCtrl",
				function($scope, $rootScope, $window, $location,
						bienImmoLocationProvider) {
					$scope.bienImmo = {
						"id" : 0,
						"statut" : "",
						"dateSoumission" : 0,
						"dateDispo" : 0,
						"revenuCadastral" : 0,
						"prixLocation" : 0,
						"etat" : "",
						"classeStandard" : null,
						"adresse" : null,
						"contrat" : null,
						"proprietaire" : null
					}

					bienImmoLocationProvider.getAllProp(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeProp = callback.data;
						}
					});

					bienImmoLocationProvider.getAllClient(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeClient = callback.data;
						}
					});

					bienImmoLocationProvider
							.getAllClassStand(function(callback) {
								if (callback != undefined && callback != "") {
									$scope.listeCS = callback.data;
								}
							});

					$scope.getCS = function() {

						var id = $scope.classStandSelectId;
						if (id == undefined) {
							id = 0;
						}

						bienImmoLocationProvider.getCSById(id, function(
								callback) {
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

						bienImmoLocationProvider.getClientById(id, function(
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

						bienImmoLocationProvider.getPropById(id, function(
								callback) {
							if (callback != undefined && callback != "") {
								$scope.bienImmo.proprietaire = callback.data;
							}
						});
					};

					$scope.addBI = function() {
						$scope.bienImmo.dateSoumission = new Date();
						var bi = $scope.bienImmo;

						bienImmoLocationProvider
								.addBienImmoLocation(
										bi,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												$location
														.path("getAllBienALouer");
											}
										});
					};

				})
		.controller(
				"updateBIALouerCtrl",
				function($scope, $rootScope, $window, $location, $routeParams,
						bienImmoLocationProvider) {
					$scope.bienImmo = {
						"id" : 0,
						"statut" : "",
						"dateSoumission" : 0,
						"dateDispo" : 0,
						"revenuCadastral" : 0,
						"prixLocation" : 0,
						"etat" : "",
						"classeStandard" : null,
						"adresse" : null,
						"contrat" : null,
						"proprietaire" : null
					}
					bienImmoLocationProvider
							.findDetailsBiensImmoLocation(
									$routeParams.idBI,
									function(callback) {
										if (callback != undefined
												&& callback != "") {
											var bi = callback.data;
											if (bi.dateSoumission != null) {
												bi.dateSoumission = new Date(
														bi.dateSoumission);
											}
											if (bi.dateDispo != null) {
												bi.dateDispo = new Date(
														bi.dateDispo);
											}

											if (bi.contrat != null) {
												if (bi.contrat.dateAchat != null) {
													bi.contrat.dateAchat = new Date(
															bi.contrat.dateLocation);
												}
												if (bi.contrat.client != null) {
													if (bi.contrat.client.id != null) {
														$scope.clselected = [ false ];
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
													$scope.propselected = [ false ];
													$scope.propselected[bi.proprietaire.id] = true;
												}
											}

											if (bi.classeStandard != null) {
												if (bi.classeStandard.id != null) {
													$scope.csselected = [ false ];
													$scope.csselected[bi.classeStandard.id] = true;
												}
											}
											$scope.bienImmo = bi;
										}
									})

					bienImmoLocationProvider.getAllProp(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeProp = callback.data;
						}
					});

					bienImmoLocationProvider.getAllClient(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeClient = callback.data;
						}
					});

					bienImmoLocationProvider
							.getAllClassStand(function(callback) {
								if (callback != undefined && callback != "") {
									$scope.listeCS = callback.data;
								}
							});

					$scope.getCS = function() {

						var id = $scope.classStandSelectId;
						if (id == undefined) {
							id = 0;
						}

						bienImmoLocationProvider.getCSById(id, function(
								callback) {
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

						bienImmoLocationProvider.getClientById(id, function(
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

						bienImmoLocationProvider.getPropById(id, function(
								callback) {
							if (callback != undefined && callback != "") {
								$scope.bienImmo.proprietaire = callback.data;
							}
						});
					};

					$scope.addBI = function() {
						var bi = $scope.bienImmo;
						if (bi.id == 0) {
							bienImmoLocationProvider.addBienImmoLocation(bi,
									function(callback) {
										if (callback != undefined
												&& callback != "") {
											$location.path("getAllBienALouer");
										}
									});
						} else {
							bienImmoLocationProvider.updateBienImmoLocation(bi,
									function(callback) {
										if (callback != undefined
												&& callback != "") {
											$location.path("getAllBienALouer");
										}
									});
						}
					};

				})