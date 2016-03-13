"use strict";

angular.module("project3App").controller("ProductController",

function ProductController($scope, $routeParams, AppResource, ProductDlg){

	var sellerid = parseInt($routeParams.sid); 

	AppResource.getSellerProducts(sellerid).success (function(products){
		$scope.products = products;
	});

	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show().then(function(product){
			AppResource.getSellerProducts(sellerid).success(function(products){
				
				var product_found = false;
				
				for (var i = 0; i < products.length; i++) {
					if(products[i].name === product.name){
				
						AppResource.updateProduct(sellerid,product).success(function(product){
						});
						product_found = true;
					}
				}
				if(product_found === false){

					AppResource.addSellerProduct(sellerid, product).success(function(product){

						var newproduct = product;
						$scope.products.push(newproduct);
						}).error(function() {
						//centrisNotify.error(sellers.Message.SaveFailed);
						//TODO
						});

				}
			});
		});			
	};

});

