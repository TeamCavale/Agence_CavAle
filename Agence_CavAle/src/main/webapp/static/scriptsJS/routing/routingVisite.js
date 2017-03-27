/**
 * 
 */

app.config(function($routeProvider) {

	$routeProvider.when("/getAllVisite", {

		templateUrl : "pages/visiteListe.html",

		controller : "CalendarDemoCtrl"

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
		templateUrl : "pages/visiteUpdate.html",
		controller : "updateVisiteCtrl"
	})
})