"use strict";

angular.module("project3App").controller("SellersController", ["$scope", "AppResource", "SellerDlg", "centrisNotify",
function SellersController($scope, AppResource, SellerDlg, centrisNotify) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	//$scope.isLoading = true;
	AppResource.getSellers().success(function(sellers){
		$scope.sellers = sellers;
	//}).error(function(){
	//	$scope.isLoading = false;
	});

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller){
			AppResource.getSellers().success(function(sellers){
				var seller_found = false;
				for (var i = 0; i < sellers.length; i++) {
					if(sellers[i].name === seller.name){
						AppResource.updateSeller(sellers[i].id, seller).success(function(seller){
					
						});
							seller_found = true;
					}
				}
				if(seller_found === false){
					AppResource.addSeller(seller).success(function(seller){
					//var newSeller = seller;
					//$scope.sellers.push(newSeller);
						centrisNotify.success("sellers.Messages.SaveSucceeded");
					}).error(function() {
						centrisNotify.error("sellers.Messages.SaveFailed");
					});
				}
			});
		});	
	};
}]);