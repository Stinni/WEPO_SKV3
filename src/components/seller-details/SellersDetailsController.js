"use strict";

angular.module("project3App").controller("SellersDetailsController",["$scope", "$routeParams","AppResource",/*"$translateProvider", "pascalprecht.translate",*/
function SellersDetailsController($scope, $routeParams, AppResource) {
	
		var sellerid = parseInt($routeParams.sid); 

		AppResource.getSellerDetails(sellerid).success(function(seller){
	
		$scope.seller = seller;
		});
			
	}]);