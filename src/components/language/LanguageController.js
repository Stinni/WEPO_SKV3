"use strict";

angular.module("project3App").controller("LanguageController", ["$scope", "$translateProvider",
function LanguageController($scope, $translateProvider) {

	$scope.switchLanguage = function (languageKey) {
		console.log("sfd");
		$translateProvider.use(languageKey);
	};
}]);