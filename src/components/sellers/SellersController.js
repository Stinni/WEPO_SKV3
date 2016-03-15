"use strict";

angular.module("project3App").controller("SellersController", ["$scope", "AppResource", "SellerDlg", "centrisNotify",
function SellersController($scope, AppResource, SellerDlg, centrisNotify) {

	$scope.isLoading = true;
	$scope.displayError = false;
	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.isLoading = false;
		$scope.displayError = false;
	}).error(function() {
		$scope.isLoading = false;
		$scope.displayError = true;
		centrisNotify.error("sellers.Messages.LoadFailed");
	});

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.getSellers().success(function(sellers) {
				var seller_found = false;
				for (var i = 0; i < sellers.length; i++) {
					if(sellers[i].name === seller.name) {
						seller_found = true;
					}
				}
				if(!seller_found) {
					AppResource.addSeller(seller).success(function() {
						centrisNotify.success("sellers.Messages.SaveSucceeded");
					}).error(function() {
						centrisNotify.error("sellers.Messages.SaveFailed");
					});
				} else {
					centrisNotify.error("sellers.Messages.CantAddAgain");
				}
			});
		});
	};

	$scope.onEditSeller = function onEditSeller(id) {
		SellerDlg.showEdit(id).then(function(seller) {
			AppResource.updateSeller(id, seller).success(function() {
				centrisNotify.success("sellers.Messages.UpdateSucceeded");
			}).error(function() {
				centrisNotify.error("sellers.Messages.UpdateFailed");
			});
		});
	};
}]);