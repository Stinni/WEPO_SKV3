"use strict";

describe("SellersController", function() {

	var theController, scope;

	var mockNewSeller1 = {
		name: "Loftleiðir",
		category: "Flug",
		imagePath: ""
	};

	var mockNewSeller2 = {
		id: 1,
		name: "Loftleiðir",
		category: "Flug",
		imagePath: ""
	};

	var mockNewSeller3 = {
		name: "Hannyrðaþjónusta Hannesar",
		category: "Fatnaður",
		imagePath: ""
	};

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

	var mockSellers = [{
		id: 1,
		name: "Hannyrðaþjónusta Hannesar",
		category: "Fatnaður",
		imagePath: ""
	}];

	var mockAppResourceTrue = {
		getSellers: function getSellers() {
			return mockHttpPromise(true, mockSellers);
		}
	};

	var mockAppResourceFalse = {
		getSellers: function getSellers() {
			return mockHttpPromise(false, null);
		},
		addSeller: function addSeller(seller) {
			return mockHttpPromise(false, seller);
		},
		updateSeller: function updateSeller(id, seller) {
			return mockHttpPromise(false, seller);
		}
	};

	var mockAppResourceGetTrueAndAddFalse = {
		getSellers: function getSellers() {
			return mockHttpPromise(true, mockSellers);
		},
		addSeller: function addSeller(seller) {
			return mockHttpPromise(false, seller);
		}
	};

	var mockSellerDlgNewSeller = {
		show: function() {
			return {
				then: function(fn) {
				 	fn(mockNewSeller1);
				}
			};
		},
		showEdit: function showEdit(id) {
			return {
				then: function(fn) {
					fn(mockNewSeller2);
				}
			};
		}
	};

	var mockSellerDlgExistingSeller = {
		show: function() {
			return {
				then: function(fn) {
					fn(mockNewSeller3);
				}
			};
		}
	};

	var mockCentrisNotify = {
		success: function() {},
		error: function() {}
	};

	beforeEach(module("project3App"));

	describe("when everything should be fine and dandy with real AppResource", function() {

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			theController = $controller("SellersController", {
				$scope: scope,
				SellerDlg: mockSellerDlgNewSeller
			});
		}));

		it("should have the isLoading scope variable set to true", function() {
			expect(scope.isLoading).toBeFalsy();
		});

		it("should recieve success from getSellers and keep displayError as false", function() {
			expect(scope.displayError).toBeFalsy();
		});

		it("should have 4 sellers at the start", function() {
			expect(scope.sellers.length).toEqual(4);
		});

		it("should have the onAddSeller function", function() {
			expect(scope.onAddSeller).toBeDefined();
		});

		it("should call the onAddSeller function", function() {
			spyOn(scope, "onAddSeller");
			scope.onAddSeller();
			expect(scope.onAddSeller).toHaveBeenCalled();
		});

		it("should be able to add a new seller", function() {
			scope.onAddSeller();
			expect(scope.sellers.length).toEqual(5);
		});

		it("should have the onEditSeller function", function() {
			expect(scope.onEditSeller).toBeDefined();
		});

		it("should have seller 0 name as Hannyrðaþjónusta Hannesar", function() {
			expect(scope.sellers[0].name).toEqual("Hannyrðaþjónusta Hannesar");
		});

		it("should call the onEditSeller function", function() {
			spyOn(scope, "onEditSeller");
			scope.onEditSeller(1);
			expect(scope.onEditSeller).toHaveBeenCalled();
		});

		it("should edit seller nr 0's name to Loftleiðir", function() {
			scope.onEditSeller(1);
			expect(scope.sellers[0].name).toEqual("Loftleiðir");
		});
	});

	describe("when everything should be fine and dandy with mock AppResource", function() {

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			theController = $controller("SellersController", {
				$scope: scope,
				AppResource: mockAppResourceTrue,
				SellerDlg: mockSellerDlgExistingSeller,
				centrisNotify: mockCentrisNotify
			});
		}));

		it("should have 1 seller at the start", function() {
			expect(scope.sellers.length).toEqual(1);
		});

		it("should not be able to add a seller with the same name as an existing one", function() {
			spyOn(mockCentrisNotify, "error");
			scope.onAddSeller();
			expect(mockCentrisNotify.error).toHaveBeenCalled();
		});
	});

	describe("when everything fails or returns false with mock AppResource", function() {

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			theController = $controller("SellersController", {
				$scope: scope,
				AppResource: mockAppResourceFalse,
				SellerDlg: mockSellerDlgNewSeller,
				centrisNotify: mockCentrisNotify
			});
		}));

		it("should recieve error from getSellers and change displayError to true", function() {
			expect(scope.displayError).toBeTruthy();
		});

		it("should recieve error from updateSeller and call centrisNotify.error", function() {
			spyOn(mockCentrisNotify, "error");
			scope.onEditSeller();
			expect(mockCentrisNotify.error).toHaveBeenCalled();
		});
	});

	describe("when get sellers works but adding returns false with mock AppResource", function() {

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			theController = $controller("SellersController", {
				$scope: scope,
				AppResource: mockAppResourceGetTrueAndAddFalse,
				SellerDlg: mockSellerDlgNewSeller,
				centrisNotify: mockCentrisNotify
			});
		}));

		it("should add existing seller, recieve error from addSeller and call centrisNotify.error", function() {
			spyOn(mockCentrisNotify, "error");
			scope.onAddSeller();
			expect(mockCentrisNotify.error).toHaveBeenCalled();
		});
	});
});