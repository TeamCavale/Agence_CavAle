/**
 * Routing pour les biens immobiliers
 */
app.config(function($routeProvider) {
	$routeProvider.when("/getAllBienAAcheter", {
		templateUrl : "pages/bienImmo_Achat_getAll.html",
		controller : "findAllBIAAcheterCtrl"
	}).when("/getbyIdBienAAcheter", {
		templateUrl : "pages/bienImmo_Achat_find.html",
		controller : "findBIAAcheterCtrl"
	}).when("/addBienAAcheter", {
		templateUrl : "pages/bienImmo_Achat_add.html",
		controller : "addBIAAcheterCtrl"
	}).when("/updateBienAAcheter/:idBI", {
		templateUrl : "pages/bienImmo_Achat_add.html",
		controller : "updateBIAAcheterCtrl"
	}).when("/getAllBienALouer", {
		templateUrl : "pages/bienImmo_Location_getAll.html",
		controller : "findAllBIALouerCtrl"
	}).when("/getbyIdBienALouer", {
		templateUrl : "pages/bienImmo_Location_find.html",
		controller : "findBIALouerCtrl"
	}).when("/addBienALouer", {
		templateUrl : "pages/bienImmo_Location_add.html",
		controller : "addBIALouerCtrl"
	}).when("/updateBienALouer/:idBI", {
		templateUrl : "pages/bienImmo_Location_add.html",
		controller : "updateBIALouerCtrl"
	}).otherwise({
		redirectTo : "/accueil"
	})
});
