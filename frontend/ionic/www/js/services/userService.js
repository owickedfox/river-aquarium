'use strict';

angular.module('RiverAquarium.Services').factory('$UserService', function () {

    var admin = {
        
        username: 'riversun',
    };

    return {

        isAuthorized: false,
        userInfos: {
            
            username: '',
            roles: [
                'admin'
            ]
        },

        signin: function (form) {
            
            this.isAuthorized = true;
            this.userInfos.username = form.username || 'riversun';
            
            return admin;
        },
        signup: function () {

            return 200;
        }
    };
});