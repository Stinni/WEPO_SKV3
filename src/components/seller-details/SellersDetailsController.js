"use strict";

angular.module("project3App").controller("SellersDetailsController",["$scope", "$routeParams","AppResource",/*"$translateProvider", "pascalprecht.translate",*/
function SellersDetailsController($scope, $routeParams, AppResource) {
	
		var sellerid = parseInt($routeParams.sid); 
/*
		var sel = { 
		id:"",
		name: "",
		category: "",
		imagePath: ""
		};
*/
		AppResource.getSellerDetails(sellerid).success(function(seller){
	
		$scope.seller = seller;
		});
			
	}]);