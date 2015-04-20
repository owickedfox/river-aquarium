'use strict';

angular.module('RiverAquarium.Controllers')
    .controller('CategoryController', function ($scope, $stateParams, $CategoryService) {
    
        $scope.navBarHeader = 'River Aquarium';

        $scope.category = $CategoryService.get($stateParams.categoryId);
    });