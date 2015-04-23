'use strict';

angular.module('RiverAquarium.Controllers')
    .controller('SignInController', function ($scope, $state, $UserService) {

        $scope.navBarHeader = 'Account';

        $scope.signin = {
            username: 'riversun',
            password: '123'
        };

        $scope.doSignIn = function () {

            var signinData = $scope.signin;

            $UserService.signin(signinData);

            $state.go('Main.Dashboard', {
                reload: true
            });
        };
    });