/**
 * 
 */

app.config(function($routeProvider) {

	$routeProvider.when("/getAllVisite", {

		templateUrl : "pages/visiteListe.html",

		controller : "getAllVisiteCtrl"

	}).when("/getbyIdVisite", {
		templateUrl : "pages/visiteFind.html",

		controller : "getbyIdVisiteCtrl"
	}).when("/addVisite", {
		templateUrl : "pages/visiteAdd.html",

		controller : "addVisiteCtrl"
	}).when("/delVisite", {
		templateUrl : "pages/visiteDel.html",

		controller : "delVisiteCtrl"
	}).when("/updateVisite", {
		templateUrl : "visiteUpdate.html",
		controller : "updateVisiteCtrl"
	})
})