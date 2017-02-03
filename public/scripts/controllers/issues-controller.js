gitApp.controller('issuesController', function($scope, issuesFactory) {
	'use strict';

	$scope.pageDate = [];

	$scope.submitQuery = function() {
		$scope.pageData = issuesFactory.get($scope.owner, $scope.repo).success(function(data) {
			$scope.pageData = data;
		});
	};
});