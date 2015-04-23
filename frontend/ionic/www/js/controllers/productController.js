'use strict';

angular.module('RiverAquarium.Controllers')
    .controller('ProductController', function ($scope, $stateParams, $timeout, $ProductService) {
        $scope.navBarHeader = 'River Aquarium';

        $scope.product = $ProductService.get($stateParams.categoryId, $stateParams.productId);
    });