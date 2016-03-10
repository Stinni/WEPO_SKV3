"use strict";

angular.module("project3App").controller("LanguageController", ["$scope", "$translateProvider", "pascalprecht.translate",
function LanguageController($scope,$translateProvider) {

	$scope.switchLanguage = function (languageKey) {
		console.log("sfd");
		$translateProvider.use(languageKey);
	};
}]);