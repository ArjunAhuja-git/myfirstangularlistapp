var module = angular.module('listApp', []);
var controller = module.controller('listController',function ($scope) {
    $scope.items = ['First Item'];
    $scope.addItem = function(){
            if ($scope.newItem) {   
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }
    }
}); 