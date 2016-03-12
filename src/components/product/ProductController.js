"use strict";

angular.module("project3App").controller("ProductController",

function ProductController($scope, $routeParams, AppResource, ProductDlg){

	var sellerid = parseInt($routeParams.sid); 

	AppResource.getSellerProducts(sellerid).success (function(product){
		$scope.products = product;
	});

	$scope.onAddProduct = function onAddProduct() {
		
	ProductDlg.show().then(function(product){
		
		AppResource.addSellerProduct(sellerid,product).success(function(product){
			
	AppResource.getSellerProducts(sellerid).success (function(product){
		$scope.products = product;
	});
				/*var seller_found = false;
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
						}).error(function() {
						//centrisNotify.error(sellers.Message.SaveFailed);
						//TODO
						});
					}
			*/
			});
		});	
	};
});

