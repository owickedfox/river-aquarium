'use strict';

angular.module('RiverAquarium.Controllers').controller('MainController', function ($scope, $ionicSideMenuDelegate) {

    $scope.categories = [
        {
            id: 1,
            name: 'Category 1'
        },
        {
            id: 2,
            name: 'Category 2'
        },
    ];

    $scope.searchText = '';

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.clearSearchText = function () {
        debugger;
        $scope.searchText = '';
    };

    $scope.activate = function () {

    };
});