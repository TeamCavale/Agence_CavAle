/**
 * 
 */

$(".btn").click(function(){
	$("#accueil").removeClass("active");
	$(".btn").addClass("active");
});

$("#accueil").click(function(){
	$("#accueil").addClass("active")
	$(".btn").removeClass("active");
});