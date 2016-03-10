"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", /*"pascalprecht.translate"*/])
.config(function ($routeProvider) {
	$routeProvider
	.when("/home", {
		templateUrl: "components/sellers/index.html",
		controller: "SellersController"
	})
	.when("/seller/:sid", {
		templateUrl: "components/seller-details/sellersdetails.html",
		controller: "SellersDetailsController"
	})
	.otherwise({
		redirectTo: "/home"
	});
	//$translateProvider.use("is");
});
