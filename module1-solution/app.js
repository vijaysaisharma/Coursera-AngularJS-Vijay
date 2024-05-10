(function() {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('Assignment1Controller', Assignment1Controller);

    Assignment1Controller.$inject = ['$scope'];

    function Assignment1Controller($scope){
        $scope.message = "";

        $scope.clear = function(){
            $scope.message = "";
        };

        $scope.checkIfTooMuch = function(){
            $scope.message = "";
            if($scope.numberOfItems === undefined || $scope.numberOfItems === "")
                {
                    $scope.message = "Please enter data first";
                    return;
                }
            var items = $scope.numberOfItems.split(',');

            if(items.length <= 3){
                    $scope.message = "Enjoy!";
                }
                else{
                    $scope.message = "Too much!";
                }
        };
    };
})();