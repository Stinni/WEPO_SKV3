"use strict";

angular.module("project3App").controller("SellerEditDlgController", ["$scope", "AppResource", "centrisNotify", "id",
function SellerEditDlgController($scope, AppResource, centrisNotify, id){

	console.log("SellerEditDlgController called");
	console.log("The id that follows is: " + id);

	AppResource.getSellerDetails(id).success(function(seller) {
		$scope.seller = seller;
	}).error(function() {
		$scope.$dismiss();
		centrisNotify.error("seller-dlg.Messages.LoadSellerFailed");
	});

	$scope.onOk = function onOk(){
	/*	if($scope.seller.name.length === 0) {
				//error message
			return;
		}*/
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
}]);