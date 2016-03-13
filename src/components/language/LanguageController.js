"use strict";

angular.module("project3App").controller("LanguageController", ["$scope", "$translate",
function LanguageController($scope, $translate) {

	$scope.switchLanguage = function (languageKey) {
		$translate.use(languageKey);
	};

	$scope.status = {
		isopen: false
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
	};
}]);