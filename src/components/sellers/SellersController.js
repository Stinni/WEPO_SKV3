"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, SellerDlg) {
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
			AppResource.addSeller(seller).success(function(seller){
				//var newSeller = seller;
				//$scope.sellers.push(newSeller);
			}).error(function() {
				//centrisNotify.error(sellers.Message.SaveFailed);
				//TODO
			});
		});
	};
});