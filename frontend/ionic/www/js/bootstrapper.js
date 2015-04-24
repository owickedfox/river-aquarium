'use strict';

angular.module('RiverAquarium')
    .config(function ($ionicConfigProvider) {

        // Remove Back-Button text.
        $ionicConfigProvider.backButton.previousTitleText(false).text('');
    })
    .run(function ($ionicPlatform, $rootScope, $state, $stateParams, $AuthenticationService, $IdentityService) {

        $ionicPlatform.ready(function () {

            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;

            if ($IdentityService.isIdentityResolved()) {
                
                $AuthenticationService.authorize();
            }
        });
    });