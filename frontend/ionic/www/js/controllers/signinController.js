'use strict';

angular.module('RiverAquarium.Controllers')
    .controller('SignInController', function ($scope, $state, $UserService, $IdentityService) {

        $scope.navBarHeader = 'Account';

        $scope.signin = {
            username: 'riversun',
            password: '123'
        };

        // here, we fake authenticating and give a fake user
        $IdentityService.authenticate({

            name: $scope.signin.username,
            roles: ['Admin']
        });



        $scope.doSignIn = function () {

            var signinData = $scope.signin;

            $UserService.signin(signinData);

            if ($scope.returnToState) {

                $state.go($scope.returnToState.name, $scope.returnToStateParams);
            } else {

                $state.go('Main.Home');
            }
        };
    });