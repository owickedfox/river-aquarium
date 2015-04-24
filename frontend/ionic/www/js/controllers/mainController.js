'use strict';

angular.module('RiverAquarium.Controllers')
    .controller('MainController', function ($scope, $state, $ionicSideMenuDelegate, $ionicPopup, $UserService, $CategoryService, $IdentityService) {

        $scope.categories = $CategoryService.all();

        $scope.searchText = '';
        $scope.acountMenuHeader = $UserService.userInfos.username || 'Signin';
        $scope.notificationCount = 3;

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

            var confirmPopup = $ionicPopup.confirm({

                title: 'Sign-out',
                template: 'Signing off ' + $UserService.userInfos.username + '... Do you want to continue?'
            });
            confirmPopup.then(function (popupResult) {

                if (popupResult) {

                    $ionicSideMenuDelegate.toggleRight();
                    
                    $IdentityService.authenticate(null);
                    
                    $state.go('Main.SignIn');
                } else {

                    console.log('You are not sure');
                }
            });
        };
    });