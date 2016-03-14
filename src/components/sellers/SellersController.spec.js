"use strict";

describe("SellersController", function() {

	var theController, scope;
	var mockHttpPromise = function(condition, data) {
		return {
			success: function(fn) {
				if (condition) {
					fn(data);
				}
				return {
					error: function(f) {
						if (!condition) {
							f();
						}
					}
				};
			}
		};
	};
	var mockAppResourceFalse = {
		getSellers: function getSellers() {
			return mockHttpPromise(false, null);
		}
	};

	beforeEach(module("project3App"));

	describe("when everything should be fine and dandy", function() {

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			theController = $controller("SellersController", {
				$scope: scope
			});
		}));

		it("should have the isLoading scope variable set to true", function() {
			expect(scope.isLoading).toBeFalsy();
		});

		it("should recieve success from getSellers and keep displayError as false", function() {
			expect(scope.displayError).toBeFalsy();
		});

		it("should have 4 sellers at the start", function() {
			var nrOfSellers = scope.sellers.length;
			expect(nrOfSellers).toEqual(4);
		});

		it("should have the onAddSeller function", function() {
			expect(scope.onAddSeller).toBeDefined();
		});

		it("should have the onEditSeller function", function() {
			expect(scope.onEditSeller).toBeDefined();
		});

//		it("should be able to add a new seller", function() {
//			scope.onAddSeller();
//		});
	});

	describe("when everything fails or returns false", function() {

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			theController = $controller("SellersController", {
				$scope: scope,
				AppResource: mockAppResourceFalse
			});
		}));

		it("should recieve error from getSellers and change displayError to true", function() {
			expect(scope.displayError).toBeTruthy();
		});
	});
});
/*
$scope.isLoading
	$scope.onAddSeller
	$scope.onEditSeller
*/