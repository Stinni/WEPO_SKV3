"use strict";

angular.module("project3App").controller("SellerEditDlgController", ["$scope", "AppResource", "centrisNotify", "id",
function SellerEditDlgController($scope, AppResource, centrisNotify, id){

	AppResource.getSellerDetails(id).success(function(seller) {
		$scope.seller = seller;
	}).error(function() {
		$scope.$dismiss();
		centrisNotify.error("seller-dlg.Messages.LoadSellerFailed");
	});

	$scope.onOk = function onOk(){
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
}]);