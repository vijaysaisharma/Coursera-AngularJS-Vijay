(function() {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('Assignment1Controller', Assignment1Controller);

    Assignment1Controller.$inject = ['$scope'];

    function Assignment1Controller($scope){
        $scope.message = "Assignment1Message";
    };
})();