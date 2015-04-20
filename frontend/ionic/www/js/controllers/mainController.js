'use strict';

angular.module('RiverAquarium.Controllers')
    .controller('MainController', function ($scope, $state, $ionicSideMenuDelegate, $UserService, $CategoryService) {

        $scope.categories = $CategoryService.all();

        $scope.searchText = '';
        $scope.acountMenuHeader = $UserService.userInfos.username || 'Signin';

        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.toggleRight = function () {
            $ionicSideMenuDelegate.toggleRight();
        };

        $scope.clearSearchText = function () {
            $scope.searchText = '';
        };

        $scope.doSignOut = function () {

            $ionicSideMenuDelegate.toggleRight();
            $state.go('Main.SignIn');
        };
    });